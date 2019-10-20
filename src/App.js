import React from 'react'

function App() {
  return (
    <div className="home">
      <header className="navbar__header">
        <strong>Zabdos</strong>
        <nav className="navbar__menu">
          <a href="f" className="navbar__menu-item">
            Flight Statuses
          </a>
          <a href="c" className="navbar__menu-item btn">
            Check in
          </a>
          <a href="c" className="navbar__menu-item">
            <img src="/av.jpg" alt="avatar" />
          </a>
        </nav>
      </header>
      <div className="intro">
        <div className="intro__tagline">
          <div className="intro__tagline--highlight">Fly with us to</div>
          <div className="intro__tagline--normal"></div>
          <div className="intro__tagline--cal">
            <div className="intro__tagline--day-split">
              <div className="intro__tagline--day-color1"></div>
              <div className="intro__tagline--day-color2"></div>
            </div>
            <div className="intro__tagline--day"></div>
            <div className="intro__tagline--day"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
