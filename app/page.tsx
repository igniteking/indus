"use client";

import Addtional from "@/components/Addtional";
import Footer from "@/components/Footer";
import Includes from "@/components/Includes";
import Navbar from "@/components/Navbar";
import Thumbnail from "@/components/Thumbnail";

export default function Home() {
  return (
    <>
      <Includes />
      <body className="home-main-crev main-bg">
        <div className="loader-wrap">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="loader-wrap-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
        <div className="cursor"></div>
        <div className="progress-wrap cursor-pointer">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />
            <main className="main-bg">
              <header className="crev-header">
                <div className="container mt-80">
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="caption">
                        <h1>
                          Welcome to <br />{" "}
                          <span className="stroke">INDUS STAR</span>{" "}
                        </h1>
                        <div className="row mt-30">
                          <div className="col-lg-5 offset-lg-1">
                            <div className="text">
                              <p>
                                Where Melodies Meet Vision! Explore
                                soul-stirring songs and mesmerizing videos. Let
                                INDUS STAR ignite your imagination and elevate
                                your senses!
                              </p>
                            </div>
                            <div className="crv-butn-vid mt-30">
                              <a
                                href="https://www.youtube.com/watch?v=jUdve8tG89w"
                                className="vid"
                              >
                                <span className="text sub-title mr-20">
                                  Watch{" "}
                                </span>
                                <span className="icon main-colorbg4 ml-20">
                                  <svg
                                    className="default"
                                    width="13"
                                    height="20"
                                    viewBox="0 0 13 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M0 20L13 10L0 0V20Z"></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="md-hide">
                        <a
                          href="https://www.youtube.com/@indusstar"
                          className="hover-this"
                          target="_blank"
                        >
                          <div className="circle-button in-bord hover-anim">
                            <div className="rotate-circle fz-30 text-u">
                              <svg className="textcircle" viewBox="0 0 500 500">
                                <defs>
                                  <path
                                    id="textcircle"
                                    d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                  ></path>
                                </defs>
                                <text>
                                  <textPath href="#textcircle" textLength="900">
                                    Explore More - Explore More -
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <div className="arrow">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-img z-10">
                  {/* <img src="/tharjpg.jpg" alt="" /> */}
                  <video
                    className="z-10"
                    controls
                    playsInline
                    controlsList="nodownload"
                    autoPlay
                    preload="auto"
                    width={1000}
                    loop
                    aria-label="Video player"
                  >
                    <source
                      src="/teaser.mp4"
                      className="z-10"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div
                  className="bg-pattern bg-img"
                  data-background="assets/imgs/patterns/graph.png"
                ></div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </header>

              <section className="marquee">
                <div className="container-fluid rest">
                  <div className="row">
                    <div className="col-12">
                      <div className="main-marq">
                        <div className="slide-har st1">
                          <div className="box non-strok">
                            {Array.from({ length: 10 }).map((_, index) => (
                              <div className="item" key={index}>
                                <h4 className="d-flex align-items-center">
                                  <span>INDUS STAR</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="serv-box section-padding pb-0">
                <div className="container">
                  <div className="sec-lg-head mb-80">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="position-re">
                          <h6 className="dot-titl-non mb-15 wow fadeIn">
                            Featured Services
                          </h6>
                          <h2 className="d-rotate wow">
                            <span className="rotate-text">What we do?</span>
                          </h2>
                        </div>
                      </div>
                      <div className="col-lg-4 d-flex align-items-center">
                        <div className="text wow fadeIn">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit odit
                            aut fugit, sed quia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div
                        className="serv-item lg-pad md-mb50 radius-5 wow fadeIn"
                        data-wow-delay=".5s"
                      >
                        <div className="icon-img-50 mb-40">
                          <img src="assets/imgs/serv-icons/0.png" alt="" />
                        </div>
                        <span className="mb-10 opacity-7">Product Design</span>
                        <h6 className="mb-15">Digital Product Design</h6>
                        <p className="fz-14">
                          Creating a higher spacing and how people move through
                          a unique.
                        </p>
                        <div className="crv-more">
                          <a
                            href="page-services.html"
                            className="mt-30 ls1 fz-12 text-u"
                          >
                            Read More
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="serv-item lg-pad md-mb50 radius-5 wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="icon-img-50 mb-40">
                          <img src="assets/imgs/serv-icons/1.png" alt="" />
                        </div>
                        <span className="mb-10 opacity-7">
                          Customs Services
                        </span>
                        <h6 className="mb-15">Branding & Design</h6>
                        <p className="fz-14">
                          Creating a higher spacing and how people move through
                          a unique.
                        </p>
                        <div className="crv-more">
                          <a
                            href="page-services.html"
                            className="mt-30 ls1 fz-12 text-u"
                          >
                            Read More
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="serv-item lg-pad radius-5 wow fadeIn"
                        data-wow-delay="1.2s"
                      >
                        <div className="icon-img-50 mb-40">
                          <img src="assets/imgs/serv-icons/2.png" alt="" />
                        </div>
                        <span className="mb-10 opacity-7">
                          Product Development
                        </span>
                        <h6 className="mb-15">Web Development</h6>
                        <p className="fz-14">
                          Creating a higher spacing and how people move through
                          a unique.
                        </p>
                        <div className="crv-more">
                          <a
                            href="page-services.html"
                            className="mt-30 ls1 fz-12 text-u"
                          >
                            Read More
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="works thecontainer">
                <Thumbnail
                  path="/chalo.jpg"
                  title="Yash Production"
                  subtitle="Chalo Ayodhya Bula Rahi"
                  date="Jan 19, 2024"
                  Ytlink="https://www.youtube.com/watch?v=fQPj3zEYC88"
                />

                <Thumbnail
                  path="/thar.jpg"
                  title="NEW HARYANVI SONG | RADIHIKA S | KAPIL YADAV KP"
                  subtitle="THAR"
                  date="Sep 18, 2023"
                  Ytlink="https://www.youtube.com/watch?v=ctagMydEQec"
                />
                <Thumbnail
                  path="/tharjpg.jpg"
                  title="Radhika Sharma | Kapil Yadav Kp"
                  subtitle="Thar Teaser"
                  date="Sep 16, 2023"
                  Ytlink="https://www.youtube.com/watch?v=jUdve8tG89w"
                />

                <Thumbnail
                  path="/iphonejpg.jpg"
                  title="Kapil Yadav Kp | Radhika S "
                  subtitle="I PHONE (Official Video)"
                  date="Aug 20, 2023"
                  Ytlink="https://www.youtube.com/watch?v=YDMX1av01_Y"
                />

                <Thumbnail
                  path="/kyujpg.jpg"
                  title="Kapil Yadav KP"
                  subtitle="Kyun Kiya (Official Video)"
                  date="May 4, 2023"
                  Ytlink="https://www.youtube.com/watch?v=8W7PbZpY8XE"
                />

                <Thumbnail
                  path="/ladka.jpg"
                  title="Kapil Yadav KP | Ram"
                  subtitle="Ladki Kamaal (Official Video)"
                  date="Mar 30, 2023"
                  Ytlink="https://www.youtube.com/watch?v=WICcZQRE2T4"
                />

                <Thumbnail
                  path="/teaserLadki.jpg"
                  title="KAPIL YADAV KP || RAM || VEERA"
                  subtitle="TEASER II LADKI KAMAAL"
                  date="Mar 30, 2023"
                  Ytlink="https://www.youtube.com/watch?v=WICcZQRE2T4"
                />
              </section>

              <section className="services-tab revers section-padding pt-0">
                <div className="container">
                  <div className="row mb-80">
                    <div className="col-lg-12">
                      <div className="full-width">
                        <div className="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom">
                          <div className="slide-har st1">
                            <div className="box">
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                            </div>
                            <div className="box">
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                              <div className="item">
                                <h4 className="d-flex align-items-center fz-70">
                                  <span>Amazing Design</span>
                                  <span className="fz-50 ml-50 stroke icon">
                                    *
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center" id="tabs">
                    <div className="col-lg-5 valign">
                      <div className="serv-tab-link tab-links full-width md-mb50">
                        <div className="sec-lg-head mb-80 wow fadeIn">
                          <h6 className="dot-titl-non mb-15">Services</h6>
                          <p>
                            We help you to go online and increase your
                            conversion rate Better design for your digital
                            products.{" "}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-10">
                            <ul className="rest">
                              <li
                                className="item-link current mb-15 pb-15 bord-thin-bottom"
                                data-tab="tabs-1"
                              >
                                <span>01</span> UI/UX Design
                              </li>
                              <li
                                className="item-link mb-15 pb-15 bord-thin-bottom"
                                data-tab="tabs-2"
                              >
                                <span>02</span> Branding
                              </li>
                              <li
                                className="item-link mb-15 pb-15 bord-thin-bottom"
                                data-tab="tabs-3"
                              >
                                <span>03</span> Development
                              </li>
                              <li className="item-link" data-tab="tabs-4">
                                <span>04</span> Marketing
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="serv-tab-cont">
                        <div className="tab-content current" id="tabs-1">
                          <div className="item">
                            <div className="img">
                              <img
                                src="./assets/imgs/sass-img/serv/4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="cont sub-bg">
                              <div className="icon-img-60 mb-40">
                                <img
                                  src="./assets/imgs/serv-icons/0.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <p>
                                  We are a creative studio specializing in
                                  design, development and strategy many
                                  different skills and disciplines in the
                                  production of all web.
                                </p>
                              </div>
                              <a href="page-services.html" className="mt-30">
                                <span className="mr-15">Read More</span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                              <div
                                className="bg-pattern bg-img"
                                data-background="assets/imgs/patterns/abstact-BG.png"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content" id="tabs-2">
                          <div className="item">
                            <div className="img">
                              <img
                                src="./assets/imgs/sass-img/serv/2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="cont sub-bg">
                              <div className="icon-img-60 mb-40">
                                <img
                                  src="./assets/imgs/serv-icons/1.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <p>
                                  We are a creative studio specializing in
                                  design, development and strategy many
                                  different skills and disciplines in the
                                  production of all web.
                                </p>
                              </div>
                              <a href="page-services.html" className="mt-30">
                                <span className="mr-15">Read More</span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content" id="tabs-3">
                          <div className="item">
                            <div className="img">
                              <img
                                src="./assets/imgs/sass-img/serv/3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="cont sub-bg">
                              <div className="icon-img-60 mb-40">
                                <img
                                  src="./assets/imgs/serv-icons/2.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <p>
                                  We are a creative studio specializing in
                                  design, development and strategy many
                                  different skills and disciplines in the
                                  production of all web.
                                </p>
                              </div>
                              <a href="page-services.html" className="mt-30">
                                <span className="mr-15">Read More</span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content" id="tabs-4">
                          <div className="item">
                            <div className="img">
                              <img
                                src="./assets/imgs/sass-img/serv/1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="cont sub-bg">
                              <div className="icon-img-60 mb-40">
                                <img
                                  src="./assets/imgs/serv-icons/0.png"
                                  alt=""
                                />
                              </div>
                              <div className="text">
                                <p>
                                  We are a creative studio specializing in
                                  design, development and strategy many
                                  different skills and disciplines in the
                                  production of all web.
                                </p>
                              </div>
                              <a href="page-services.html" className="mt-30">
                                <span className="mr-15">Read More</span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="testim-crv2 section-padding sub-bg">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="sec-lg-head mb-80">
                        <div className="position-re text-center">
                          <h6 className="dot-titl-non mb-15 wow fadeIn">
                            Testimonials
                          </h6>
                          <h2 className="d-rotate wow">
                            <span className="rotate-text">
                              What People Says?
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-5 position-re wow fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="bord-qoute d-flex align-items-center justify-content-center">
                        <div className="qoute-icon main-bg">
                          <img
                            src="./assets/imgs/svg-assets/quote.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="img-qoute">
                        <img
                          src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/about/sq1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeIn" data-wow-delay=".4s">
                      <div
                        className="testim-swiper"
                        data-carousel="swiper"
                        data-items="1"
                        data-loop="true"
                        data-space="30"
                      >
                        <div
                          id="content-carousel-container-unq-testim"
                          className="swiper-container"
                          data-swiper="container"
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="item">
                                <div className="cont mb-40">
                                  <div className="rate-stars mb-20 fz-16">
                                    <span className="rate main-color4">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </span>
                                  </div>
                                  <h5 className="fw-400">
                                    I have been hiring people in this space for
                                    a number of years and I have never seen this
                                    level of professionalism. It really feels
                                    like you are working with a team that can
                                    get the job done.
                                  </h5>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <div className="img circle-60">
                                      <img
                                        src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/testim/1.jpg"
                                        alt=""
                                        className="circle-img"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-30">
                                    <div className="info">
                                      <h6 className="fz-16">Leonard Heiser</h6>
                                      <span className="opacity-7 sub-title">
                                        Ceo
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="item">
                                <div className="cont mb-40">
                                  <div className="rate-stars mb-20 fz-16">
                                    <span className="rate main-color4">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                    </span>
                                  </div>
                                  <h5 className="fw-400">
                                    I have been hiring people in this space for
                                    a number of years and I have never seen this
                                    level of professionalism. It really feels
                                    like you are working with a team that can
                                    get the job done.
                                  </h5>
                                </div>
                                <div className="d-flex align-items-center">
                                  <div>
                                    <div className="img circle-60">
                                      <img
                                        src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/testim/2.jpg"
                                        alt=""
                                        className="circle-img"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-30">
                                    <div className="info">
                                      <h6 className="fz-16">Leonard Heiser</h6>
                                      <span className="opacity-7 sub-title">
                                        Ceo
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="swiper-controls testim-controls arrow-out d-flex ml-auto">
                          <div className="swiper-button-prev">
                            <span className="left">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                          <div className="swiper-button-next ml-50">
                            <span className="right">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="numbers mt-80 pt-80 bord-thin-top wow fadeIn"
                    data-wow-delay=".4s"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="item md-mb50">
                          <h2 className="fw-800 stroke">4.82K</h2>
                          <h6>Subscriber</h6>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="item md-mb50">
                          <h2 className="fw-800 stroke">100+K</h2>
                          <h6>Views</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="blog-list-half crev section-padding">
                <div className="container">
                  <div className="sec-lg-head mb-80">
                    <div className="row">
                      <div className="col-lg-6">
                        <h6 className="dot-titl-non mb-15 wow fadeIn">
                          Our Blog
                        </h6>
                        <h2 className="d-rotate wow">
                          <span className="rotate-text">Latest News.</span>
                        </h2>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center">
                        <div className="full-width d-flex justify-content-end justify-end">
                          <div className="vew-all">
                            <a href="blog-list.html">
                              View All Our News
                              <span>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row wow fadeIn" data-wow-delay=".4s">
                    <div className="col-lg-6">
                      <div className="item md-mb80">
                        <div className="row rest">
                          <div className="col-md-6">
                            <div className="img">
                              <img
                                src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/sass-img/blog/1.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6 valign">
                            <div className="cont">
                              <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                                August 6, 2022
                              </span>
                              <h5>
                                <a href="blog-details.html">
                                  Free advertising for your online business.
                                </a>
                              </h5>
                              <div className="tags colorbg mt-15">
                                <a href="blog-half-img.html">Marketing</a>
                                <a href="blog-half-img.html">Design</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item">
                        <div className="row rest">
                          <div className="col-md-6">
                            <div className="img">
                              <img
                                src="https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/sass-img/blog/2.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6 valign">
                            <div className="cont">
                              <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                                August 6, 2022
                              </span>
                              <h5>
                                <a href="blog-details.html">
                                  Business meeting 2023 in San Francisco.
                                </a>
                              </h5>
                              <div className="tags colorbg mt-15">
                                <a href="blog-half-img.html">Marketing</a>
                                <a href="blog-half-img.html">Design</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>
        <Addtional />
      </body>
    </>
  );
}
