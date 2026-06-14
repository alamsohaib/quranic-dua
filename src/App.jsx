import { useEffect, useMemo, useRef, useState } from 'react'
import { CATEGORIES, DUAS } from './data/duas.js'
import { useSpeech } from './useSpeech.js'

const PROPHETS = [...new Set(DUAS.map((d) => d.prophet))]

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
  const [theme, setTheme] = useState(
    () => localStorage.getItem('dua-theme') || 'light'
  )

  const { speak, stop, speakingId, supported } = useSpeech()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('dua-theme', theme)
  }, [theme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DUAS.filter((d) => {
      if (activeCategory !== 'all' && d.category !== activeCategory) return false
      if (activeProphet !== 'all' && d.prophet !== activeProphet) return false
      if (!q) return true
      const haystack = [
        d.prophet,
        d.prophetAr,
        d.prophetUr,
        d.arabic,
        d.transliteration,
        d.english,
        d.urdu,
        d.reference,
        d.note || '',
        CATEGORIES[d.category]?.label || '',
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, activeCategory, activeProphet])

  const toggleTranslation = (key) =>
    setShownTranslations((s) => ({ ...s, [key]: !s[key] }))

  const resetFilters = () => {
    setQuery('')
    setActiveCategory('all')
    setActiveProphet('all')
  }

  const hasFilters =
    query || activeCategory !== 'all' || activeProphet !== 'all'

  return (
    <div className="app">
      <BackgroundOrnament />

      <header className="hero">
        <div className="hero__inner">
          <div className="hero__top">
            <div className="brand">
              <span className="brand__mark" aria-hidden>
                ۞
              </span>
              <div>
                <h1 className="brand__title">Duas of the Prophets</h1>
                <p className="brand__sub" dir="rtl" lang="ar">
                  أَدْعِيَةُ الْأَنْبِيَاءِ عَلَيْهِمُ السَّلَام
                </p>
              </div>
            </div>
            <button
              className="theme-toggle"
              onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
              aria-label="Toggle theme"
              title="Toggle light / dark"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>

          <p className="hero__lede">
            The supplications the Prophets (peace be upon them) made to Allah,
            preserved in the Qur’an — in Arabic with Urdu and English
            translations, references, and audio recitation.
          </p>

          <div className="searchbar">
            <span className="searchbar__icon" aria-hidden>
              🔍
            </span>
            <input
              type="search"
              className="searchbar__input"
              placeholder="Search by word, prophet, theme, or reference…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search duas"
            />
            {query && (
              <button
                className="searchbar__clear"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {!supported && (
            <p className="notice">
              ⚠️ Your browser does not support the Web Speech API, so audio
              playback is unavailable. Try the latest Chrome or Edge.
            </p>
          )}
        </div>
      </header>

      <main className="container">
        <section className="filters" aria-label="Filters">
          <div className="filters__group">
            <span className="filters__label">Type of Dua</span>
            <div className="chiprow">
              <Chip
                active={activeCategory === 'all'}
                onClick={() => setActiveCategory('all')}
              >
                All
              </Chip>
              {Object.entries(CATEGORIES).map(([key, cat]) => (
                <Chip
                  key={key}
                  active={activeCategory === key}
                  onClick={() => setActiveCategory(key)}
                  color={cat.color}
                >
                  <span aria-hidden>{cat.icon}</span> {cat.label}
                </Chip>
              ))}
            </div>
          </div>

          <div className="filters__group">
            <span className="filters__label">Prophet</span>
            <div className="chiprow">
              <Chip
                active={activeProphet === 'all'}
                onClick={() => setActiveProphet('all')}
              >
                All
              </Chip>
              {PROPHETS.map((p) => (
                <Chip
                  key={p}
                  active={activeProphet === p}
                  onClick={() => setActiveProphet(p)}
                >
                  {p}
                </Chip>
              ))}
            </div>
          </div>

          <div className="filters__group">
            <span className="filters__label">Show</span>
            <div className="chiprow">
              {TRANSLATIONS.map((t) => (
                <Chip
                  key={t.key}
                  active={shownTranslations[t.key]}
                  onClick={() => toggleTranslation(t.key)}
                  variant="toggle"
                >
                  {t.label}
                </Chip>
              ))}
            </div>
          </div>
        </section>

        <div className="resultbar">
          <span>
            <strong>{filtered.length}</strong>{' '}
            {filtered.length === 1 ? 'dua' : 'duas'}
            {hasFilters ? ' found' : ' in total'}
          </span>
          {hasFilters && (
            <button className="link-btn" onClick={resetFilters}>
              Reset filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <EmptyState onReset={resetFilters} />
        ) : (
          <div className="grid">
            {filtered.map((d) => (
              <DuaCard
                key={d.id}
                dua={d}
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

      <footer className="footer">
        <p>
          Made with care for the Ummah · References from the Holy Qur’an ·
          Verify recitation with a qualified teacher.
        </p>
      </footer>
    </div>
  )
}

function DuaCard({ dua, shown, speak, stop, isSpeaking, speechSupported }) {
  const cat = CATEGORIES[dua.category]
  return (
    <article className="card" style={{ '--accent': cat?.color }}>
      <div className="card__head">
        <div className="card__prophet">
          <span className="card__prophet-ar" dir="rtl" lang="ar">
            {dua.prophetAr}
          </span>
          <span className="card__prophet-en">{dua.prophet}</span>
        </div>
        <span className="card__cat">
          <span aria-hidden>{cat?.icon}</span> {cat?.label}
        </span>
      </div>

      <p className="card__arabic" dir="rtl" lang="ar">
        {dua.arabic}
      </p>

      <div className="card__audio">
        {speechSupported && (
          <button
            className={`play-btn ${isSpeaking ? 'play-btn--active' : ''}`}
            onClick={() => (isSpeaking ? stop() : speak(dua.arabic, dua.id))}
            aria-label={isSpeaking ? 'Stop recitation' : 'Listen to recitation'}
          >
            {isSpeaking ? (
              <>
                <span className="eq" aria-hidden>
                  <i />
                  <i />
                  <i />
                </span>
                Stop
              </>
            ) : (
              <>
                <span aria-hidden>▶</span> Listen
              </>
            )}
          </button>
        )}
      </div>

      <div className="card__translations">
        {shown.transliteration && (
          <p className="t t--translit">{dua.transliteration}</p>
        )}
        {shown.english && (
          <p className="t t--en">
            <span className="t__tag">EN</span>
            {dua.english}
          </p>
        )}
        {shown.urdu && (
          <p className="t t--ur" dir="rtl" lang="ur">
            <span className="t__tag">اردو</span>
            {dua.urdu}
          </p>
        )}
      </div>

      {dua.note && <p className="card__note">ℹ️ {dua.note}</p>}

      <div className="card__foot">
        <span className="ref">📖 {dua.reference}</span>
      </div>
    </article>
  )
}

function Chip({ active, onClick, children, color, variant }) {
  return (
    <button
      className={`chip ${active ? 'chip--active' : ''} ${
        variant === 'toggle' ? 'chip--toggle' : ''
      }`}
      onClick={onClick}
      style={active && color ? { '--chip-accent': color } : undefined}
    >
      {variant === 'toggle' && (
        <span className="chip__check" aria-hidden>
          {active ? '✓' : ''}
        </span>
      )}
      {children}
    </button>
  )
}

function EmptyState({ onReset }) {
  return (
    <div className="empty">
      <div className="empty__icon" aria-hidden>
        🕊️
      </div>
      <h3>No duas match your search</h3>
      <p>Try a different word, prophet, or theme.</p>
      <button className="btn" onClick={onReset}>
        Reset filters
      </button>
    </div>
  )
}

function BackgroundOrnament() {
  return <div className="bg-ornament" aria-hidden />
}
