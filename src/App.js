import React from 'react'

function App() {
  return (
    <div className="home">
      <header className="navbar__header">
        <strong>Zabdos</strong>
        <nav className="navbar__menu">
          <a href="f" className="navbar__item">
            Flight Statuses
          </a>
          <a href="c" className="navbar__menu-item navbar__menu-btn">
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
        <div className="slider">
          <div className="slider__header">Fly with us to</div>
          <div className="slider__slideframe">
            <div className="advert__header">Bangkok</div>
            <div className="advert__subheader">A new door to paradise for just 1500 USD</div>
            <div className="advert__details">
              <div>Book now till 25 Oct 2019</div>
              <div>Travel from 25 Oct 2019 to 25 Dec 2019</div>
            </div>
            <div className="advert__btn">
              <div className="advert__btn-caption">Let's Go</div>
              <div className="advert__btn-icon">&rarr;</div>
            </div>
          </div>
          <div className="slider__buttons">
            <div className="slider__button--active">
              <div className="slider__button-caption--active">01</div>
              <div className="slider__button-icon--active"></div>
            </div>
            <div className="slider__button">
              <div className="slider__button-caption">02</div>
              <div className="slider__button-icon"></div>
            </div>
            <div className="slider__button">
              <div className="slider__button-caption">03</div>
              <div className="slider__button-icon"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="search">
        <div className="search__icon">
          <img src="/plane.png" alt="icon" />
        </div>
        <div className="search__filters">
          <div className="filter__item">
            <div className="filter__item-caption">Departure airport</div>
            <div className="filter__item-value">Mumbai (BOM) &darr;</div>
          </div>
          <div className="filter__item">
            <div className="filter__item-caption">Arrival airport</div>
            <div className="filter__item-value">Aalborg (AAL) &darr;</div>
          </div>
        </div>
        <div className="search__btn">Search</div>
      </div>

      <div className="pages">
        <div className="pages__transition"></div>
        <div className="pages__content">
          <div className="experience">
            <div className="experience__heading-section">
              <div className="experience__divider"></div>
              <div className="experience__header">
                <h1>The Zabdos Experience</h1>
              </div>
              <div className="experience__subheader">
                Wheter it's your first flight or simply latest, we work to anticipate your every
                need
              </div>
              <hr className="divider" />
              <a href="c" className="experience__link">
                <div className="experience__link-icon">&#9658;</div>
                <div className="experience__link-caption">Watch the full video now!</div>
              </a>
            </div>
            <div className="experience__classes">
              <div className="card">
                <img src="/inside1.jpg" alt="inside" />
                <div className="card__subcaption">Arrive inspired</div>
                <div className="card__caption">Business Class</div>
              </div>
              <div className="card">
                <img src="/inside2.jpg" alt="inside" />
                <div className="card__subcaption">Expect the exceptional</div>
                <div className="card__caption">Economy Class</div>
              </div>
            </div>
            <div className="experience__vr">
              <div className="card--visible-on-top">
                <img src="/vr.jpg" alt="vr" />
                <div className="card__subcaption">Award winning technology</div>
                <div className="card__caption">Explore the Fleet in VR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
