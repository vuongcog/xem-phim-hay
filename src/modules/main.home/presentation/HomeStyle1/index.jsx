import React from "react";
import COVER_IMAGE from "../../../../constants/img/vectors";
const HomeStyle1 = () => {
  return (
    <section className="home home--bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="home__title">
              <b>NEW ITEMS</b> OF THIS SEASON
            </h1>
          </div>

          <div className="col-12">
            <div className="home__carousel splide splide--home">
              <div className="splide__arrows">
                <button
                  className="splide__arrow splide__arrow--prev"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                  </svg>
                </button>
                <button
                  className="splide__arrow splide__arrow--next"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                  </svg>
                </button>
              </div>

              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover13} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">The Edge of Tomorrow</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Action</a>
                          <a href="#">Sci-Fi</a>
                        </span>
                        <span className="item__rate">8.4</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover16} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Beyond the Horizon</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Drama</a>
                        </span>
                        <span className="item__rate">7.1</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover4} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Blindspotting</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Comedy</a>
                          <a href="#">Drama</a>
                        </span>
                        <span className="item__rate">7.9</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover3} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Shattered Dreams</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Drama</a>
                          <a href="#">Romance</a>
                        </span>
                        <span className="item__rate">6.3</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover10} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Echoes of the Past</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Fantasy</a>
                        </span>
                        <span className="item__rate">9.0</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover5} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Tales from the Underworld</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Action</a>
                          <a href="#">Western</a>
                        </span>
                        <span className="item__rate">8.6</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover6} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Midnight Sun</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Drama</a>
                        </span>
                        <span className="item__rate">7.7</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover7} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">Wild Hearts</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Comedy</a>
                        </span>
                        <span className="item__rate">8.2</span>
                      </div>
                    </div>
                  </li>

                  <li className="splide__slide">
                    <div className="item item--big">
                      <a href="details1.html" className="item__cover">
                        <img src={COVER_IMAGE.cover12} alt="" />
                        <span className="item__play">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                          </svg>
                        </span>
                      </a>
                      <div className="item__content">
                        <h3 className="item__title">
                          <a href="details1.html">The Last Hope</a>
                        </h3>
                        <span className="item__category">
                          <a href="#">Animals</a>
                          <a href="#">Documentary</a>
                        </span>
                        <span className="item__rate">7.3</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStyle1;
