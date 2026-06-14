import { useEffect, useMemo, useState } from 'react'
import { CATEGORIES, DUAS } from './data/duas.js'
import { useSpeech } from './useSpeech.js'
import { STRINGS, UI_LANGS } from './i18n.js'

const PROPHETS = [...new Set(DUAS.map((d) => d.prophet))]
const PROPHET_UR = Object.fromEntries(DUAS.map((d) => [d.prophet, d.prophetUr]))

const TRANSLATIONS = [
  { key: 'english', label: 'English' },
  { key: 'urdu', label: 'اردو' },
  { key: 'transliteration', label: 'Transliteration' },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeProphet, setActiveProphet] = useState('all')
  const [shownTranslations, setShownTranslations] = useState({
    english: true,
    urdu: true,
    transliteration: true,
  })
  const [theme, setTheme] = useState(() => localStorage.getItem('dua-theme') || 'light')
  const [lang, setLang] = useState(() => localStorage.getItem('dua-lang') || 'en')

  const t = STRINGS[lang]
  const isUr = lang === 'ur'

  const { speak, stop, speakingId, supported, error, hasArabicVoice, clearError } = useSpeech()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dua-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    localStorage.setItem('dua-lang', lang)
  }, [lang, t.dir])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DUAS.filter((d) => {
      if (activeCategory !== 'all' && d.category !== activeCategory) return false
      if (activeProphet !== 'all' && d.prophet !== activeProphet) return false
      if (!q) return true
      const haystack = [
        d.prophet, d.prophetAr, d.prophetUr, d.arabic, d.transliteration,
        d.english, d.urdu, d.reference, d.note || '',
        CATEGORIES[d.category]?.label || '', CATEGORIES[d.category]?.labelUr || '',
      ].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [query, activeCategory, activeProphet])

  const toggleTranslation = (key) => setShownTranslations((s) => ({ ...s, [key]: !s[key] }))
  const resetFilters = () => {
    setQuery('')
    setActiveCategory('all')
    setActiveProphet('all')
  }
  const hasFilters = query || activeCategory !== 'all' || activeProphet !== 'all'

  return (
    <div className={`app ${isUr ? 'app--ur' : ''}`}>
      <div className="bg-ornament" aria-hidden />

      <header className="hero">
        <div className="hero__inner">
          <div className="hero__top">
            <div className="brand">
              <span className="brand__mark" aria-hidden>۞</span>
              <div>
                <h1 className="brand__title">{t.title}</h1>
                <p className="brand__sub" dir="rtl" lang="ar">{t.subtitle}</p>
              </div>
            </div>

            <div className="hero__controls">
              <div className="langswitch" role="group" aria-label={t.interface}>
                {UI_LANGS.map((l) => (
                  <button
                    key={l.code}
                    className={`langswitch__btn ${lang === l.code ? 'is-active' : ''}`}
                    onClick={() => setLang(l.code)}
                    lang={l.code}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <button
                className="theme-toggle"
                onClick={() => setTheme((th) => (th === 'light' ? 'dark' : 'light'))}
                aria-label="Toggle theme"
                title="Toggle light / dark"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>

          <p className="hero__lede">{t.lede}</p>

          <div className="searchbar">
            <span className="searchbar__icon" aria-hidden>🔍</span>
            <input
              type="search"
              className="searchbar__input"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label={t.searchPlaceholder}
            />
            {query && (
              <button className="searchbar__clear" onClick={() => setQuery('')} aria-label="Clear">✕</button>
            )}
          </div>

          {!supported && <p className="notice">{t.noSpeech}</p>}
          {supported && !hasArabicVoice && <p className="notice notice--info">{t.noArabicVoice}</p>}
        </div>
      </header>

      <main className="container">
        <section className="filters" aria-label="Filters">
          <div className="filters__group">
            <span className="filters__label">{t.typeOfDua}</span>
            <div className="chiprow">
              <Chip active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
                {t.all}
              </Chip>
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <Chip
                  key={key}
                  active={activeCategory === key}
                  onClick={() => setActiveCategory(key)}
                  color={cat.color}
                >
                  <span aria-hidden>{cat.icon}</span> {isUr ? cat.labelUr : cat.label}
                </Chip>
              ))}
            </div>
          </div>

          <div className="filters__group">
            <span className="filters__label">{t.prophet}</span>
            <div className="chiprow">
              <Chip active={activeProphet === 'all'} onClick={() => setActiveProphet('all')}>
                {t.all}
              </Chip>
              {PROPHETS.map((p) => (
                <Chip key={p} active={activeProphet === p} onClick={() => setActiveProphet(p)}>
                  {isUr ? PROPHET_UR[p] : p}
                </Chip>
              ))}
            </div>
          </div>

          <div className="filters__group">
            <span className="filters__label">{t.show}</span>
            <div className="chiprow">
              {TRANSLATIONS.map((tr) => (
                <Chip
                  key={tr.key}
                  active={shownTranslations[tr.key]}
                  onClick={() => toggleTranslation(tr.key)}
                  variant="toggle"
                >
                  {tr.label}
                </Chip>
              ))}
            </div>
          </div>
        </section>

        <div className="resultbar">
          <span>{hasFilters ? t.resultFound(filtered.length) : t.resultTotal(filtered.length)}</span>
          {hasFilters && <button className="link-btn" onClick={resetFilters}>{t.reset}</button>}
        </div>

        {error && (
          <div className="alert" role="alert">
            <span>{error}</span>
            <button onClick={clearError} aria-label="Dismiss">✕</button>
          </div>
        )}

        {filtered.length === 0 ? (
          <EmptyState t={t} onReset={resetFilters} />
        ) : (
          <div className="grid">
            {filtered.map((d) => (
              <DuaCard
                key={d.id}
                dua={d}
                t={t}
                isUr={isUr}
                shown={shownTranslations}
                speak={speak}
                stop={stop}
                isSpeaking={speakingId === d.id}
                speechSupported={supported}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="footer"><p>{t.footer}</p></footer>
    </div>
  )
}

function DuaCard({ dua, t, isUr, shown, speak, stop, isSpeaking, speechSupported }) {
  const cat = CATEGORIES[dua.category]
  return (
    <article className="card" style={{ '--accent': cat?.color }} dir="ltr">
      <div className="card__head">
        <div className="card__prophet">
          <span className="card__prophet-ar" dir="rtl" lang="ar">{dua.prophetAr}</span>
          <span className="card__prophet-en">{isUr ? dua.prophetUr : dua.prophet}</span>
        </div>
        <span className="card__cat">
          <span aria-hidden>{cat?.icon}</span> {isUr ? cat?.labelUr : cat?.label}
        </span>
      </div>

      <p className="card__arabic" dir="rtl" lang="ar">{dua.arabic}</p>

      {speechSupported && (
        <div className="card__audio">
          <button
            className={`play-btn ${isSpeaking ? 'play-btn--active' : ''}`}
            onClick={() => (isSpeaking ? stop() : speak(dua.arabic, dua.id))}
            aria-label={isSpeaking ? t.stop : t.listen}
          >
            {isSpeaking ? (
              <>
                <span className="eq" aria-hidden><i /><i /><i /></span> {t.stop}
              </>
            ) : (
              <><span aria-hidden>▶</span> {t.listen}</>
            )}
          </button>
        </div>
      )}

      <div className="card__translations">
        {shown.transliteration && <p className="t t--translit">{dua.transliteration}</p>}
        {shown.english && (
          <p className="t t--en"><span className="t__tag">EN</span>{dua.english}</p>
        )}
        {shown.urdu && (
          <p className="t t--ur" dir="rtl" lang="ur"><span className="t__tag">اردو</span>{dua.urdu}</p>
        )}
      </div>

      {dua.note && <p className="card__note">ℹ️ {dua.note}</p>}

      <div className="card__foot"><span className="ref">📖 {dua.reference}</span></div>
    </article>
  )
}

function Chip({ active, onClick, children, color, variant }) {
  return (
    <button
      className={`chip ${active ? 'chip--active' : ''} ${variant === 'toggle' ? 'chip--toggle' : ''}`}
      onClick={onClick}
      style={active && color ? { '--chip-accent': color } : undefined}
    >
      {variant === 'toggle' && <span className="chip__check" aria-hidden>{active ? '✓' : ''}</span>}
      {children}
    </button>
  )
}

function EmptyState({ t, onReset }) {
  return (
    <div className="empty">
      <div className="empty__icon" aria-hidden>🕊️</div>
      <h3>{t.emptyTitle}</h3>
      <p>{t.emptyBody}</p>
      <button className="btn" onClick={onReset}>{t.reset}</button>
    </div>
  )
}
