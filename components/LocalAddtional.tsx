"use client";

import Script from "next/script";

function LocalAddtional() {
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
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(`Script loaded correctly, plugins has been populated`)
        }
      ></Script>
      <Script
        src="assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(
            `Script loaded correctly, ScrollTrigger has been populated`
          )
        }
      ></Script>
      <Script
        src="./assets/js/scripts.js"
        strategy="beforeInteractive"
        onLoad={() =>
          console.log(`Script loaded correctly, Scripts has been populated`)
        }
      />
    </>
  );
}

export default LocalAddtional;
