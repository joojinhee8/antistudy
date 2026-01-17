import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import TypographyShowcase from './components/TypographyShowcase'
import ColorShowcase from './components/ColorShowcase'
import './App.scss'

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <span className="header__logo">⚡</span>
        </div>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <a href="#" className="header__link">Products</a>
          <a href="#" className="header__link">Solutions</a>
          <a href="#" className="header__link">Community</a>
          <a href="#" className="header__link">Resources</a>
          <a href="#" className="header__link">Pricing</a>
          <a href="#" className="header__link">Contact</a>
          <a href="#" className="header__link">Link</a>
        </nav>

        <div className="header__actions">
          <button className="btn btn--ghost">Sign in</button>
          <button className="btn btn--primary">Register</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="header__menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="header__menu-icon">≡</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="header__mobile-nav">
          <a href="#" className="header__mobile-link">Products</a>
          <a href="#" className="header__mobile-link">Solutions</a>
          <a href="#" className="header__mobile-link">Community</a>
          <a href="#" className="header__mobile-link">Resources</a>
          <a href="#" className="header__mobile-link">Pricing</a>
          <a href="#" className="header__mobile-link">Contact</a>
          <div className="header__mobile-actions">
            <button className="btn btn--ghost btn--full">Sign in</button>
            <button className="btn btn--primary btn--full">Register</button>
          </div>
        </nav>
      )}
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Title</h1>
        <p className="hero__subtitle">Subtitle</p>
        <div className="hero__actions">
          <button className="btn btn--secondary">Button</button>
          <button className="btn btn--primary">Button</button>
        </div>
      </div>
    </section>
  )
}

// Image Placeholder Section
function ImageSection() {
  return (
    <section className="image-section">
      <div className="image-section__placeholder">
        <span className="image-section__icon">🖼</span>
      </div>
    </section>
  )
}

// Quote Card Component
interface QuoteCardProps {
  quote: string
  title: string
  description: string
}

function QuoteCard({ quote, title, description }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <p className="quote-card__quote">"{quote}"</p>
      <div className="quote-card__author">
        <div className="quote-card__avatar" />
        <div className="quote-card__info">
          <span className="quote-card__title">{title}</span>
          <span className="quote-card__description">{description}</span>
        </div>
      </div>
    </div>
  )
}

// Quotes Section
function QuotesSection() {
  const quotes = [
    { quote: 'Quote', title: 'Title', description: 'Description' },
    { quote: 'Quote', title: 'Title', description: 'Description' },
    { quote: 'Quote', title: 'Title', description: 'Description' },
    { quote: 'Quote', title: 'Title', description: 'Description' },
    { quote: 'Quote', title: 'Title', description: 'Description' },
    { quote: 'Quote', title: 'Title', description: 'Description' },
  ]

  return (
    <section className="quotes-section">
      <div className="quotes-section__header">
        <h2 className="quotes-section__heading">Heading</h2>
        <p className="quotes-section__subheading">Subheading</p>
      </div>
      <div className="quotes-section__grid">
        {quotes.map((q, i) => (
          <QuoteCard key={i} {...q} />
        ))}
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">⚡</span>
          <div className="footer__social">
            <a href="#" className="footer__social-link">𝕏</a>
            <a href="#" className="footer__social-link">📷</a>
            <a href="#" className="footer__social-link">▶</a>
            <a href="#" className="footer__social-link">in</a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4 className="footer__column-title">Use cases</h4>
            <a href="#" className="footer__link">UI design</a>
            <a href="#" className="footer__link">UX design</a>
            <a href="#" className="footer__link">Wireframing</a>
            <a href="#" className="footer__link">Diagramming</a>
            <a href="#" className="footer__link">Brainstorming</a>
            <a href="#" className="footer__link">Online whiteboard</a>
            <a href="#" className="footer__link">Team collaboration</a>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Explore</h4>
            <a href="#" className="footer__link">Design</a>
            <a href="#" className="footer__link">Prototyping</a>
            <a href="#" className="footer__link">Development features</a>
            <a href="#" className="footer__link">Design systems</a>
            <a href="#" className="footer__link">Collaboration features</a>
            <a href="#" className="footer__link">Design process</a>
            <a href="#" className="footer__link">FigJam</a>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Resources</h4>
            <a href="#" className="footer__link">Blog</a>
            <a href="#" className="footer__link">Best practices</a>
            <a href="#" className="footer__link">Colors</a>
            <a href="#" className="footer__link">Color wheel</a>
            <a href="#" className="footer__link">Support</a>
            <a href="#" className="footer__link">Developers</a>
            <a href="#" className="footer__link">Resource library</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Landing Page
function LandingPage() {
  return (
    <div className="landing">
      <Header />
      <main>
        <Hero />
        <ImageSection />
        <QuotesSection />
      </main>
      <Footer />
    </div>
  )
}

// Guide Page
function GuidePage() {
  return (
    <div className="guide-page">
      <nav className="guide-nav">
        <div className="guide-nav__brand">
          <span className="guide-nav__logo">DS</span>
          <span className="guide-nav__title">Design System</span>
        </div>
        <div className="guide-nav__links">
          <NavLink to="/guide" end className="guide-nav__link">Overview</NavLink>
          <NavLink to="/guide/colors" className="guide-nav__link">Colors</NavLink>
          <NavLink to="/guide/typography" className="guide-nav__link">Typography</NavLink>
        </div>
      </nav>
      <main className="guide-content">
        <Routes>
          <Route index element={<GuideLanding />} />
          <Route path="colors" element={<ColorShowcase />} />
          <Route path="typography" element={<TypographyShowcase />} />
        </Routes>
      </main>
    </div>
  )
}

function GuideLanding() {
  return (
    <div className="guide-landing">
      <header className="guide-hero">
        <h1 className="text-h1">Design System Guide</h1>
        <p className="text-body-lg text-secondary">
          Antistudy 프로젝트의 디자인 시스템 가이드입니다.
        </p>
        <div className="guide-hero__actions">
          <NavLink to="/guide/colors" className="btn btn--primary">Colors</NavLink>
          <NavLink to="/guide/typography" className="btn btn--secondary">Typography</NavLink>
        </div>
      </header>
    </div>
  )
}

function App() {
  return (
    <Router basename="/antistudy">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide/*" element={<GuidePage />} />
      </Routes>
    </Router>
  )
}

export default App
