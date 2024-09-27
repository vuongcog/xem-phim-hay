const scripts = [
  "/js/bootstrap.bundle.min.js",
  "/js/splide.min.js",
  "/js/smooth-scrollbar.js",
  "/js/slimselect.min.js",
  "/js/plyr.min.js",
  "/js/photoswipe.min.js",
  "/js/photoswipe-ui-default.min.js",
  "/js/main.js",
];

export const generateScript = () => {
  scripts.forEach((src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    console.log(script);
    document.body.appendChild(script);
  });
};

export const removeScript = () => {
  scripts.forEach((src) => {
    const script = document.querySelector(`script[src="${src}"]`);
    if (script) {
      document.body.removeChild(script);
    }
  });
};
