import React from "react";

function LocalFooter() {
  return (
    <footer className="pt-80">
      <div className="container pb-80">
        <div className="row">
          <div className="col-lg-3">
            <div className="colum md-mb50">
              <div className="tit mb-20">
                <h6>Address</h6>
              </div>
              <div className="text">
                <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="colum md-mb50">
              <div className="tit mb-20">
                <h6>Say Hello</h6>
              </div>
              <div className="text">
                <p className="mb-10">
                  <a href="#0">hello@design.com</a>
                </p>
                <h5>
                  <a href="#">+1 840 841 25 69</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-2 md-mb50">
            <div className="tit mb-20">
              <h6>Social</h6>
            </div>
            <ul className="rest social-text">
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0">LinkedIn</a>
              </li>
              <li>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <div className="tit mb-20">
              <h6>Newsletter</h6>
            </div>
            <div className="subscribe">
              <form action="contact.php">
                <div className="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer pt-40 pb-40 bord-thin-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                <a href="#0">
                  <img src="assets/imgs/logo-light.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © 2023 Geekfolio is Proudly Powered by{" "}
                    <span className="underline">
                      <a
                        href="https://themeforest.net/user/ui-themez"
                        target="_blank"
                      >
                        Ui-ThemeZ
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LocalFooter;
