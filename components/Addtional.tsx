"use client";

import Script from "next/script";

function Addtional() {
  return (
    <>
      <Script
        src="assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(`Script loaded correctly, jquery has been populated`)
        }
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="assets/js/jquery-migrate-3.4.0.min.js"
        onLoad={() =>
          console.log(
            `Script loaded correctly, jquery-migrate has been populated`
          )
        }
      ></Script>

      <Script
        src="assets/js/plugins.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, plugins has been populated`)
        }
      ></Script>

      <Script
        src="assets/js/gsap.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, gsap has been populated`)
        }
      ></Script>
      <Script
        src="assets/js/ScrollSmoother.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `Script loaded correctly, ScrollSmoother has been populated`
          )
        }
      ></Script>
      <Script
        src="assets/js/ScrollTrigger.min.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(
            `Script loaded correctly, ScrollTrigger has been populated`
          )
        }
      ></Script>
      <Script
        src="assets/js/hscroll.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, hscroll has been populated`)
        }
      ></Script>
      <Script
        src="assets/js/smoother-Script.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, smoother has been populated`)
        }
      ></Script>
      <Script
        src="./assets/js/scripts.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, Scripts has been populated`)
        }
      />
    </>
  );
}

export default Addtional;
