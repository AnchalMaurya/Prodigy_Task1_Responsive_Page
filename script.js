// Open and Close Side Navbar
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "250px";
}
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0";
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    closeNavbar();
  });
});

// Form Validation
const signupForm = document.getElementById("signupForm");
signupForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!name || !email || !password){
    alert("Please fill all fields!");
    return;
  }

  alert("Sign Up Successful! Welcome, " + name);
  signupForm.reset();
});

// Scroll Fade-In Effect
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
