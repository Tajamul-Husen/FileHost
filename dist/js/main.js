const header = document.querySelector("#my-header");
const nav = document.querySelector(".nav");

//smooth scroll
let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  easing: "easeInOutCubic",
  clip: false,
  header: "#my-header",
  topOnEmptyHash: false,
  offset: function(anchor, toggle) {
    let size = window.innerWidth < 1000 ? -305 : 0;
    if (window.innerWidth < 1000) {
      if (toggle.classList.contains("navbar-link")) return size;
      else return 0;
    }
    return size;
  }
});

//gumshoe scrollpy
let spy = new Gumshoe("#my-awesome-nav a", {
  offset: function() {
    return header.getBoundingClientRect().height;
  }
});

//owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

// animate on scroll
AOS.init({
  startEvent: "DOMContentLoaded", //when domcontentloaded
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: "ease-in-out", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  anchorPlacement: "top-top"
});

//toggle navbar
const hamburger = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function() {
  navbar.classList.toggle("active");
});

//navbar fixed scroll
window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("fixed-header");
    nav.classList.add("nav-animate");
    nav.classList.add("nav-shadow");
  } else {
    nav.classList.remove("fixed-header");
    nav.classList.remove("nav-animate");
    nav.classList.remove("nav-shadow");
  }
};

// navbar fixed on refresh
window.onload = () => {
  if (document.documentElement.scrollTop !== 0) {
    nav.classList.add("fixed-header");
    nav.classList.add("nav-animate");
    nav.classList.add("nav-shadow");
  }
};

// preloader before render page
let loadingComplete = false;
document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    loadingComplete = true;
    loaderComplete();
  }
};

function loaderComplete() {
  if (loadingComplete) {
    document.querySelector(".preloader").classList.add("loader-hider");
  }
}


