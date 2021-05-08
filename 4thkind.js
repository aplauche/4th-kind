// handle changes on click
const darkModeSwitch = document.querySelector(".dark-mode-toggle span");
const bodyTag = document.querySelector("body");

darkModeSwitch.addEventListener("click", function () {
  const darkTl = gsap.timeline();

  darkTl
    .set("div.wipe", { height: "0%", top: 0 })
    .to("div.wipe", { height: "100vh" })
    .add(function () {
      bodyTag.classList.toggle("dark-mode");
      if (bodyTag.classList.contains("dark-mode")) {
        darkModeSwitch.innerHTML = "Light Mode";
        gsap.to("g.toggle", { x: 43 });
      } else {
        darkModeSwitch.innerHTML = "Dark Mode";
        gsap.to("g.toggle", { x: 19 });
      }
    })
    .to("div.wipe", { height: 0, top: "100%" });
});

// handle system preferences changes
const mqDark = window.matchMedia("(prefers-color-scheme: dark)");

function updateDarkModeMediaQuery() {
  if (mqDark.matches) {
    bodyTag.classList.add("dark-mode");
    darkModeSwitch.innerHTML = "Light Mode";
    gsap.to("g.toggle", { x: 43 });
  } else {
    bodyTag.classList.remove("dark-mode");
    darkModeSwitch.innerHTML = "Dark Mode";
    gsap.to("g.toggle", { x: 19 });
  }
}

// Run on page load
updateDarkModeMediaQuery();

// run on update
mqDark.addEventListener("change", function () {
  updateDarkModeMediaQuery();
});

// Burger Navigation

const menuToggle = document.querySelector(".menu-toggle");
const menuToggleText = menuToggle.querySelector("span");

menuToggle.addEventListener("click", function () {
  bodyTag.classList.toggle("nav-open");
  if (bodyTag.classList.contains("nav-open")) {
    menuToggleText.innerHTML = "Close";
    gsap.to(".burger-top", { rotation: 405, y: 8, transformOrigin: "50% 50%" });
    gsap.to(".burger-mid", { opacity: 0 });
    gsap.to(".burger-bottom", {
      rotation: -45,
      y: -8,
      transformOrigin: "50% 50%",
    });
  } else {
    menuToggleText.innerHTML = "Menu";
    gsap.to(".burger-top", { rotation: 0, y: 0, transformOrigin: "50% 50%" });
    gsap.to(".burger-mid", { opacity: 1 });
    gsap.to(".burger-bottom", {
      rotation: 0,
      y: 0,
      transformOrigin: "50% 50%",
    });
  }
});

const spiralTl = gsap.timeline({ repeat: -1 });

spiralTl
  .set("svg.spiral rect", { rotation: 0, transformOrigin: "50% 50%" })
  .to("svg.spiral rect", {
    rotation: 90,
    transformOrigin: "50% 50%",
    stagger: -0.3,
    duration: 1.5,
  });
