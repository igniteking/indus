import React from "react";

function VideoComponent() {
  return (
    <div className="col-lg-12">
      <div className="item mb-80">
        <div className="row rest">
          <div className="col-md-6">
            <div className="img">
              <img src="assets/imgs/blog/h1.jpg" alt="" />
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
  );
}

export default VideoComponent;
