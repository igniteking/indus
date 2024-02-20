import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bord main-bg">
      <div className="container">
        <a className="logo icon-img-100" href="#">
          <img src="../assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Home</span>
              </a>
              <div className="dropdown-menu mega-menu">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Home Dark</h6>
                        </div>
                        <div className="links">
                          <a className="dropdown-item" href="home-main.html">
                            Main Home
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-creative.html"
                          >
                            Creative Home
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-corporate.html"
                          >
                            Corporate Business
                          </a>
                          <a className="dropdown-item" href="home-onepage.html">
                            Home One page
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-digital-agency.html"
                          >
                            Digital Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-freelancer.html"
                          >
                            Freelancer
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-marketing-agency.html"
                          >
                            Marketing Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-creative-agency.html"
                          >
                            Creative Agency
                          </a>
                          <a className="dropdown-item" href="home-startup.html">
                            Startup Bussines
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-architecture.html"
                          >
                            Architecture
                          </a>
                          <a
                            className="dropdown-item"
                            href="home-personal.html"
                          >
                            Personal
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Home Light</h6>
                        </div>
                        <div className="links">
                          <a
                            className="dropdown-item"
                            href="../light/home-main.html"
                          >
                            Main Home
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-corporate.html"
                          >
                            Corporate Business
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-onepage.html"
                          >
                            Home One page
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-digital-agency.html"
                          >
                            Digital Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-freelancer.html"
                          >
                            Freelancer
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-marketing-agency.html"
                          >
                            Marketing Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-creative-agency.html"
                          >
                            Creative Agency
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-startup.html"
                          >
                            Startup Bussines
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/home-architecture.html"
                          >
                            Architecture
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Showcases</h6>
                        </div>
                        <div className="links">
                          <a
                            className="dropdown-item"
                            href="showcase-parallax-slider.html"
                          >
                            Parallax Slider
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-frame-slider.html"
                          >
                            Frame Slider
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-circle-slider.html"
                          >
                            Circle Slider
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-carousel.html"
                          >
                            Showcase Carousel
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-interactive-center-horizontal.html"
                          >
                            Interactive Links1
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-interactive-center.html"
                          >
                            Interactive Links2
                          </a>
                          <a
                            className="dropdown-item"
                            href="showcase-parallax.html"
                          >
                            Vertical Parallax
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="clumn">
                        <div className="title">
                          <h6 className="sub-title ls1">Showcases Light</h6>
                        </div>
                        <div className="links">
                          <a
                            className="dropdown-item"
                            href="../light/showcase-parallax-slider.html"
                          >
                            Parallax Slider
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/showcase-carousel.html"
                          >
                            Showcase Carousel
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/showcase-interactive-center-horizontal.html"
                          >
                            Interactive Links1
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/showcase-interactive-center.html"
                          >
                            Interactive Links2
                          </a>
                          <a
                            className="dropdown-item"
                            href="../light/showcase-parallax.html"
                          >
                            Vertical Parallax
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Pages</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="page-about.html">
                  About
                </a>
                <a className="dropdown-item" href="page-services.html">
                  Services
                </a>
                <a className="dropdown-item" href="page-career.html">
                  Career
                </a>
                <a className="dropdown-item" href="page-single-service.html">
                  Single Service
                </a>
                <a className="dropdown-item" href="page-FAQS.html">
                  FAQS
                </a>
                <a className="dropdown-item" href="page-team.html">
                  Our Team
                </a>
                <a className="dropdown-item" href="page-single-team.html">
                  Single Team
                </a>
                <a className="dropdown-item" href="page-Oops404.html">
                  Oops 404
                </a>
                <a className="dropdown-item" href="page-comingsoon.html">
                  Coming Soon
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Portfolio</span>
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <a href="#0">
                    classNameic Grid{" "}
                    <i className="fas fa-angle-right icon-arrow"></i>
                  </a>
                  <ul className="dropdown-side">
                    <li>
                      <a className="dropdown-item" href="portfolio-grid-2.html">
                        Grid 2 Columns
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="portfolio-grid-3.html">
                        Grid 3 Columns
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="portfolio-grid-4.html">
                        Grid 4 Columns
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <a href="#0">
                    Masonry <i className="fas fa-angle-right icon-arrow"></i>
                  </a>
                  <ul className="dropdown-side">
                    <li>
                      <a
                        className="dropdown-item"
                        href="portfolio-masonry-2.html"
                      >
                        Masonry 2 Columns
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="portfolio-masonry-3.html"
                      >
                        Masonry 3 Columns
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="portfolio-masonry-4.html"
                      >
                        Masonry 4 Columns
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="portfolio-metro.html">
                    Portfolio Metro
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="portfolio-modern.html">
                    Modern Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="project-details1.html">
                    Project Details 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="project-details2.html">
                    Project Details 2
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Blogs</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blog-classNameic.html">
                  Blog Standerd
                </a>
                <a className="dropdown-item" href="blog-list.html">
                  Blog List
                </a>
                <a className="dropdown-item" href="blog-half-Image.html">
                  Image Out Frame
                </a>
                <a className="dropdown-item" href="blog-details.html">
                  Blog Details
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Shop</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="shop-list.html">
                  Shop List
                </a>
                <a className="dropdown-item" href="shop-product.html">
                  Single Product
                </a>
                <a className="dropdown-item" href="shop-cart.html">
                  Cart
                </a>
                <a className="dropdown-item" href="shop-checkout.html">
                  Checkout
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="page-contact.html">
                <span className="rolling-text">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button>
              <span className="pe-7s-search"></span>
            </button>
          </div>
          <div className="search-icon">
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
