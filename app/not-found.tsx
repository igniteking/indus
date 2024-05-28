import Addtional from "@/components/Addtional";
import Includes from "@/components/Includes";
import LocalAddtional from "@/components/LocalAddtional";
import LocalFooter from "@/components/LocalFooter";
import LocalIncludes from "@/components/LocalIncludes";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import React from "react";

function Custom404() {
  return (
    <>
      <LocalIncludes />
      <body className="main-bg">
        <Navbar />

        <div id="smooth-content">
          <main className="main-bg">
            <section className="error-404 section-padding">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-8">
                    <div className="img">
                      <img src="assets/imgs/svg-assets/404.svg" alt="" />
                    </div>
                    <div className="cont text-center">
                      <h3>Page not found</h3>
                      <p className="mt-15">
                        The requested URL you are looking for <br />
                        doesn’t exist on this server.
                      </p>
                      <a
                        href="/"
                        className="butn butn-md main-colorbg3 radius-30 mt-50"
                      >
                        <span className="text-dark fw-600">
                          Back To Homepage
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

        </div>
        <Addtional />
      </body>
    </>
  );
}

export default Custom404;
