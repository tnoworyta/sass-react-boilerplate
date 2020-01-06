import React from 'react'
import { ReactComponent as Arrow } from './assets/images/icons/arrow.svg'
import { ReactComponent as PlayButton } from './assets/images/icons/play.svg'
import { ReactComponent as ArrowDown } from './assets/images/icons/arrow-down.svg'

function App() {
  return (
    <div>
      <div className="primary-content">
        <header className="navbar">
          <strong>Zabdos</strong>
          <nav className="menu">
            <a href="f" className="menu__item">
              Flight Statuses
            </a>
            <a href="c" className="menu__item menu__btn">
              Check in
            </a>
            <a href="c" className="menu__item menu__avatar">
              <img src="/av.jpg" alt="avatar" />
            </a>
            <a href="c" className="menu__item">
              <img src="/h.jpg" alt="menu" />
            </a>
          </nav>
        </header>
        <div className="slider">
          <div className="slider__header">Fly with us to</div>
          <div className="slider__slideframe">
            <div className="advert">
              <div className="advert__header">Bangkok</div>
              <div className="advert__subheader">A new door to paradise for just 1500 USD</div>
              <div className="advert__details">
                <div>Book now till 25 Oct 2019</div>
                <div>Travel from 25 Oct 2019 to 25 Dec 2019</div>
              </div>
              <a href="c" className="advert__btn">
                Let's Go
                <div className="advert__icon"><Arrow className="brand-icon" /></div>
              </a>
            </div>
          </div>
          <div className="slider__buttons">
            <button className="slider__button -active">
              <div className="slider__button-caption">01</div>
              <div className="slider__button-icon"></div>
            </button>
            <button className="slider__button">
              <div className="slider__button-caption">02</div>
              <div className="slider__button-icon"></div>
            </button>
            <button className="slider__button">
              <div className="slider__button-caption">03</div>
              <div className="slider__button-icon"></div>
            </button>
          </div>
        </div>

        <div className="search">
          <div className="search__icon">
            <img src="/plane.png" alt="icon" />
          </div>
          <div className="search__filters">
            <div className="filter">
              <div className="filter__caption">Departure airport</div>
              <div className="filter__value">
                <div className="filter__selected-value">Mumbai (BOM)</div>
                <ArrowDown />
              </div>
            </div>
            <div className="filter">
              <div className="filter__caption">Arrival airport</div>
              <div className="filter__value">
              <div className="filter__selected-value">Aalborg (AAL)</div>
              <ArrowDown />
            </div>
            </div>
          </div>
          <button className="search__btn">Search</button>
        </div>
      </div>

      <div className="secondary-content">
        <div className="column-section">
          <div className="column-section__column">
            <h1 className="heading--secondary-branded">The Zabdos Experience</h1>
            <div className="column-section__description">
              Wheter it's your first flight or simply latest, we work to anticipate your every
              need
            </div>
            <div className="column-section__links">
              <a href="c" className="link-with-icon">
              <div className="link-with-icon__icon"><PlayButton className="white-icon"/></div>
                Watch the full video now!
              </a>
            </div>
          </div>
          <div className="column-section__column">
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
          <div className="column-section__column">
            <div className="card--visible-on-top">
              <img src="/vr.jpg" alt="vr" />
              <div className="card__subcaption">Award winning technology</div>
              <div className="card__caption">Explore the Fleet in VR</div>
            </div>
          </div>
        </div>

        <div className="section">
          <h1 className="heading--primary-branded">Complement Your Journey</h1>
          <div className="section__description">
            Explore the additional services we offer to make your
            <br />
            journey even more memorable
          </div>
          <div className="gallery">
            <div className="gallery__image">
              <div className="gallery__thumb -active">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Manage booking</div>
            </div>
            <div className="gallery__image">
              <div className="gallery__thumb">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Excess bagage</div>
            </div>
            <div className="gallery__image">
              <div className="gallery__thumb">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Paid lounge access</div>
            </div>
            <div className="gallery__image">
              <div className="gallery__thumb">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Oryx Airport Hotel</div>
            </div>
            <div className="gallery__image">
              <div className="gallery__thumb">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Al Maha Services</div>
            </div>
            <div className="gallery__image">
              <div className="gallery__thumb">
                <img src="/plane.png" alt="icon" />
              </div>
              <div className="gallery__thumb-caption">Car rentals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
