import React, { Fragment } from 'react'
import { ReactComponent as Arrow } from './assets/images/icons/arrow.svg'
import { ReactComponent as PlayButton } from './assets/images/icons/play.svg'
import { ReactComponent as ArrowDown } from './assets/images/icons/arrow-down.svg'

function App() {
  return (
    <Fragment>
      <div className="primary-content">
        <div className="centered-container">
          <header className="navbar">
            <strong>Zabdos</strong>
            <nav className="menu">
              <div className="menu__items">
                <a href="f" className="menu__item">
                  Flight Statuses
                </a>
                <a href="c" className="menu__item menu__btn">
                  Check in
                </a>
                <a href="c" className="menu__item">
                  <img src="/av.jpg" alt="avatar" className="menu__avatar -round" />
                </a>
              </div>
              <a href="c" className="menu__item">
                <img src="/h.jpg" alt="menu" className="menu__avatar" />
              </a>
            </nav>
          </header>

          <div className="indented-container">
            <article className="slider">
              <div className="slider__header">Fly with us to</div>
              <div>
                <div className="advert">
                  <h2 className="advert__header">Bangkok</h2>
                  <h3 className="advert__subheader">A new door to paradise for just 1500 USD</h3>
                  <div className="advert__details">
                    <p>Book now till 25 Oct 2019</p>
                    <p>Travel from 25 Oct 2019 to 25 Dec 2019</p>
                  </div>
                  <a href="c" className="advert__btn">
                    Let's Go
                    <div className="advert__icon">
                      <Arrow className="brand-icon" />
                    </div>
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
            </article>
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
        </div>
      </div>

      <div className="secondary-content">
        <div className="centered-container">
          <div className="indented-container">
            <article className="column-section">
              <div className="column-section__column">
                <h1 className="heading -secondary-branded">The Zabdos Experience</h1>
                <div className="column-section__description">
                  Wheter it's your first flight or simply latest, we work to anticipate your every
                  need
                </div>
                <div className="column-section__links">
                  <a href="c" className="link-with-icon">
                    <div className="link-with-icon__icon">
                      <PlayButton className="white-icon" />
                    </div>
                    Watch the full video now!
                  </a>
                </div>
              </div>
              <div className="column-section__column">
                <section className="card">
                  <div className="card__image">
                    <img src="/inside1.jpg" alt="inside" />
                  </div>
                  <div className="card__subcaption">Arrive inspired</div>
                  <h2 className="card__caption">Business Class</h2>
                </section>
                <section className="card">
                  <div className="card__image">
                    <img src="/inside2.jpg" alt="inside" />
                  </div>
                  <div className="card__subcaption">Expect the exceptional</div>
                  <h2 className="card__caption">Economy Class</h2>
                </section>
              </div>
              <div className="column-section__column">
                <section className="card -visible-on-top">
                  <div className="card__image">
                    <img src="/vr.jpg" alt="vr" />
                  </div>
                  <div className="card__subcaption">Award winning technology</div>
                  <h2 className="card__caption">Explore the Fleet in VR</h2>
                </section>
              </div>
            </article>

            <article className="listing">
              <h1 className="heading -primary-branded">Complement Your Journey</h1>
              <div className="listing__description">
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
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
