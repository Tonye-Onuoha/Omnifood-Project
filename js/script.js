// Set current year
const year = document.querySelector(".current-year");
const date = new Date();
const currentYear = date.getFullYear();
year.textContent = currentYear;

// Make navigation work
const mobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    if (href === "#") {
      // Scroll back to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href.startsWith("#") && href.length > 1) {
      // Scroll to other links
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (e.currentTarget.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const body = document.querySelector("body");
    if (!ent.isIntersecting) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
