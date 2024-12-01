let repath = false;
let targetSelector = "img.repath";
let siteName = "Portfolio-Site/";

if (repath) {
  var targets = document.querySelectorAll(targetSelector);
  targets.forEach((element) => {
    let currentSrc = element.getAttribute("src");
    while (currentSrc[0] == "." || currentSrc[0] == "/") {
      currentSrc = currentSrc.substring(1);
    }
    element.setAttribute("src", siteName.concat(currentSrc));
  });
}
