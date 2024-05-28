"use client";

import Includes from "@/components/Includes";
import LocalAddtional from "@/components/LocalAddtional";
import LocalFooter from "@/components/LocalFooter";
import LocalIncludes from "@/components/LocalIncludes";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LocalIncludes />
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
        <Navbar />

        <main>
          <header className="page-header section-padding pb-0">
            <div className="container mt-80">
              <div className="row">
                <div className="col-lg-8">
                  <div className="caption">
                    <h6 className="sub-title">Who We Are ?</h6>
                    <h1 className="fz-55">
                      We're a digital agency based in Valencia.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 offset-lg-4">
                  <div className="text mt-30">
                    <p>
                      We help our clients succeed by creating brand identities,
                      digital experiences, and print materials that communicate
                      clearly, achieve marketing goals, and look fantastic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-marq xlrg section-padding pb-0">
              <div className="slide-har st1">
                <div className="box">
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                </div>
                <div className="box">
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                  <div className="item">
                    <h4>About Us</h4>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="pg-about section-padding sub-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="bg-img radius-10 md-mb50"
                    data-background="assets/imgs/about/sq1.jpg"
                  ></div>
                </div>
                <div className="col-lg-8">
                  <div
                    className="bg-img radius-10"
                    data-background="assets/imgs/about/sq2.jpg"
                  ></div>
                </div>
                <div className="col-lg-4">
                  <div className="sec-head mt-80">
                    <h6 className="sub-title">Our Story.</h6>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="cont mt-80">
                    <h4>
                      GeekFolio are digital marketing experts and can partner
                      with you to implement tactical campaigns which engage and
                      connect audiences whilst driving ROI for your brand. We
                      are SEO and SEM professionals and have implemented
                      successful search campaigns for clients which drive
                      super-charge improvements in organic rankings, increase
                      visits and grow revenue.{" "}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="serv-box section-padding">
            <div className="container">
              <div className="sec-lg-head mb-80">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="position-re">
                      <h6 className="dot-titl-non mb-10">Featured Services</h6>
                      <h2 className="fz-60 fw-700">Our Services</h2>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex align-items-center">
                    <div className="text">
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit odit aut
                        fugit, sed quia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="serv-item md-mb50 radius-10">
                    <div className="icon-img-60 mb-40">
                      <Image
                        src="/assets/imgs/serv-icons/0.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="mb-30 pb-30 bord-thin-bottom">
                      Brand Strategy & <br /> Art Direction
                    </h5>
                    <p>
                      Creating a higher spacing and how people move through a
                      unique.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="serv-item md-mb50 radius-10">
                    <div className="icon-img-60 mb-40">
                      <Image
                        src="/assets/imgs/serv-icons/1.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="mb-30 pb-30 bord-thin-bottom">
                      UX/UI Design & <br /> Website/App Design
                    </h5>
                    <p>
                      Creating a higher spacing and how people move through a
                      unique.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="serv-item radius-10">
                    <div className="icon-img-60 mb-40">
                      <Image
                        src="/assets/imgs/serv-icons/2.png"
                        alt=""
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="mb-30 pb-30 bord-thin-bottom">
                      Typography & <br /> Video Production
                    </h5>
                    <p>
                      Creating a higher spacing and how people move through a
                      unique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="intro-corp section-padding pt-0">
            <div className="container">
              <div className="row justify-content-around">
                <div className="col-lg-5 valign md-mb50">
                  <div className="imgs mb-80">
                    <div className="img1">
                      <Image
                        src="/assets/imgs/about/sq1.jpg"
                        alt=""
                        className="radius-10"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="img2">
                      <Image
                        src="/assets/imgs/about/sq2.jpg"
                        alt=""
                        className="radius-10"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 valign">
                  <div className="cont">
                    <div className="text">
                      <h2 className="d-slideup wow">
                        <span className="sideup-text">
                          <span className="up-text">Watch the creative</span>
                        </span>
                        <span className="sideup-text">
                          <span className="up-text">process behind our</span>
                        </span>
                        <span className="sideup-text">
                          <span className="up-text">
                            <span>digital marketing</span>.
                          </span>
                        </span>
                      </h2>
                    </div>
                    <div className="accordion bord mt-40">
                      <div
                        className="item mb-15 wow fadeInUp"
                        data-wow-delay=".1s"
                      >
                        <div className="title">
                          <h6 className="fz-18">
                            The Power of Influencer Marketing
                          </h6>
                          <span className="ico"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Taken possession of my entire soul, like these sweet
                            mornings of spring which i enjoy with my whole.
                          </p>
                        </div>
                      </div>

                      <div
                        className="item mb-15 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="title">
                          <h6 className="fz-18">
                            Unique and Influential Design
                          </h6>
                          <span className="ico"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Taken possession of my entire soul, like these sweet
                            mornings of spring which i enjoy with my whole.
                          </p>
                        </div>
                      </div>

                      <div className="item wow fadeInUp" data-wow-delay=".5s">
                        <div className="title">
                          <h6 className="fz-18">
                            We Build and Activate Brands
                          </h6>
                          <span className="ico"></span>
                        </div>
                        <div className="accordion-info">
                          <p className="fz-14">
                            Taken possession of my entire soul, like these sweet
                            mornings of spring which i enjoy with my whole.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="testim-vrt sub-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 valign">
                  <div className="cont">
                    <div>
                      <h6 className="sub-title mb-15">Since From 2008</h6>
                      <h3>Keep pushing forward. We've got your back.</h3>
                      <div className="text mt-10 pb-30 bord-thin-bottom">
                        <p>
                          Things go wrong have questions. We’ve understand. So
                          we have people
                        </p>
                      </div>
                      <div className="stauts d-flex mt-20">
                        <div className="item d-flex align-items-center mt-30">
                          <h2 className="mr-20">12k</h2>
                          <p className="fz-14">
                            Happy Users <br /> Around World
                          </p>
                        </div>
                        <div className="item d-flex align-items-center ml-auto mt-30">
                          <h2 className="mr-20">150k</h2>
                          <p className="fz-14">
                            Projects <br /> Already Done
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div>
                    <div className="main-marqv">
                      <div className="slide-vertical st1">
                        <div className="box">
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
                                    Ceo
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
                                    Ceo
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
                                    Ceo
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="box">
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
                                    Ceo
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
                                    Ceo
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item radius-30 mt-30">
                            <div className="cont mb-40">
                              <div className="rate-stars mb-30 fz-12">
                                <span className="rate main-color">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </span>
                              </div>
                              <p className="fw-400">
                                I have been hiring people in this space for a
                                number of years and I have never seen this level
                                of professionalism. It really feels like you are
                                working with a team that can get the job done.
                              </p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div>
                                <div className="img circle-80">
                                  <Image
                                    src="/assets/imgs/testim/1.jpg"
                                    alt=""
                                    className="circle-img"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              </div>
                              <div className="ml-30">
                                <div className="info">
                                  <h6>Leonard Heiser</h6>
                                  <span className="main-color sub-title">
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
                </div>
              </div>
            </div>
          </section>

          <section className="team-crev section-padding pb-0 bord-thin-bottom">
            <div className="container-fluid rest">
              <div className="row">
                <div className="col-12">
                  <div
                    className="sec-head-lg text-center text-u mb-80"
                    id="sticky_item"
                  >
                    <h2>Team</h2>
                  </div>
                  <div
                    className="swiper4"
                    data-carousel="swiper"
                    data-items="4"
                    data-loop="true"
                    data-space="60"
                    data-center="true"
                    data-speed="1000"
                  >
                    <div
                      id="content-carousel-container-unq-team"
                      className="swiper-container"
                      data-swiper="container"
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="item">
                            <div className="img">
                              <Image
                                src="/assets/imgs/team/1.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="info">
                              <div className="main-marq team-position">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-marq team-name">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item">
                            <div className="img">
                              <Image
                                src="/assets/imgs/team/2.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="info">
                              <div className="main-marq team-position">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-marq team-name">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item">
                            <div className="img">
                              <Image
                                src="/assets/imgs/team/3.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="info">
                              <div className="main-marq team-position">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-marq team-name">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item">
                            <div className="img">
                              <Image
                                src="/assets/imgs/team/4.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="info">
                              <div className="main-marq team-position">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-marq team-name">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item">
                            <div className="img">
                              <Image
                                src="/assets/imgs/team/3.jpg"
                                alt=""
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="info">
                              <div className="main-marq team-position">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                    <div className="item">
                                      <h4>Co-Founder</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="main-marq team-name">
                                <div className="slide-har st1 non-strok">
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                  <div className="box">
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                    <div className="item">
                                      <h4>adrian parody</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="clients section-padding pb-100 position-re">
            <div className="container">
              <div className="row justify-content-center mb-80">
                <div className="col-lg-6 text-center">
                  <div className="text">
                    <h3>
                      We create <span>experiences</span> and turn ideas into
                      reality.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="row md-marg">
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/01.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".6s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/02.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".8s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/03.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".3s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/04.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".4s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/05.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-4 col-6 brand box-bg">
                      <div
                        className="item mb-30 wow fadeIn"
                        data-wow-delay=".7s"
                      >
                        <div className="img">
                          <Image
                            src="/assets/imgs/brands/03.png"
                            alt=""
                            width={100}
                            height={100}
                          />
                        </div>
                        <a href="#0" className="link" data-splitting>
                          www.GeekFolio.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className="call-action-img">
          <div className="container">
            <div
              className="sec-bg-img bg-img parallaxie"
              data-background="assets/imgs/background/2.jpg"
            ></div>
            <div className="sec-lg-head section-padding">
              <div className="row ontop">
                <div className="col-11 d-flex align-items-center">
                  <div className="valign">
                    <h2 className="fz-50 d-rotate wow">
                      <span className="rotate-text">
                        Have a project in mind?
                      </span>
                      <span className="rotate-text">
                        Let’s <span className="sub-font">get to work</span>.
                      </span>
                    </h2>
                  </div>
                  <div className="ml-auto">
                    <a
                      href="#0"
                      className="butn-circle d-flex align-items-center text-center m-auto"
                    >
                      <div className="full-width">
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
                        <span className="full-width">Get In Touch</span>
                      </div>
                      <Image
                        src="/assets/imgs/svg-assets/circle-star.svg"
                        alt=""
                        className="circle-star"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LocalFooter />
        <LocalAddtional />
      </body>
    </>
  );
}
