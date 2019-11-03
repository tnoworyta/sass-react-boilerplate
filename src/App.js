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
          <a href="c" className="navbar__menu-item navbar__menu-avatar">
            <img src="/av.jpg" alt="avatar" />
          </a>
          <a href="c" className="navbar__menu-item">
            <img src="/h.jpg" alt="menu" />
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
        <div className="intro__tagline-header">
          <div className="intro__tagline-header--normal">Bangkok</div>
          <div className="intro__tagline-header--cal">
            <div className="intro__tagline-header--day-split">
              <div className="intro__tagline-header--day-number">01</div>
              <div className="intro__tagline-header--day-dot-split"></div>
            </div>
            <div className="intro__tagline-header--day">
              <div className="intro__tagline-header--day-number">02</div>
              <div className="intro__tagline-header--day-dot"></div>
            </div>
            <div className="intro__tagline-header--day">
              <div className="intro__tagline-header--day-number">03</div>
              <div className="intro__tagline-header--day-dot"></div>
            </div>
          </div>
        </div>
        <div className="intro__caption">A new door to paradise for just 1500 USD</div>
        <div className="intro__subcaption">
          <div>Book now till 25 Oct 2019</div>
          <div className="intro__subcaption--last-line">Travel from 25 Oct 2019 to 25 Dec 2019</div>
        </div>
        <div className="intro__search-btn">
          <div className="intro__search-btn--caption">Let's Go</div>
          <div className="intro__search-btn--icon">&rarr;</div>
        </div>
      </div>

      <div className="search">
        <div className="search__icon">
          <img src="/plane.png" alt="icon" />
        </div>
        <div className="search__flights">
          <div className="search__flights--item">
            <div className="search__flights--item-caption">Departure airport</div>
            <div className="search__flights--item-airport">Mumbai (BOM) &darr;</div>
          </div>
          <div className="search__flights--item">
            <div className="search__flights--item-caption">Arrival airport</div>
            <div className="search__flights--item-airport">Aalborg (AAL) &darr;</div>
          </div>
        </div>
        <div className="search__btn">Search</div>
      </div>
    </div>
  )
}

export default App
