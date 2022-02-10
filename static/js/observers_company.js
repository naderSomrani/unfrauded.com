const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".hero-company");
const navigationButton = document.querySelector(".button-navigation");

const sectionOneOptions = {
  rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      console.log(navigationButton)
      header.classList.add("nav-scrolled");
      navigationButton.classList.add("button-shrunk")
    } else {
      header.classList.remove("nav-scrolled");
      navigationButton.classList.remove("button-shrunk")
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
