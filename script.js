const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");
const embers = document.getElementById("embers");
const cursorGlow = document.querySelector(".cursor-glow");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

function createEmbers() {
  const emberCount = 76;

  for (let i = 0; i < emberCount; i++) {
    const ember = document.createElement("span");

    ember.style.left = `${Math.random() * 100}%`;
    ember.style.animationDuration = `${5 + Math.random() * 9}s`;
    ember.style.animationDelay = `${Math.random() * 10}s`;

    const size = 2 + Math.random() * 4;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;

    embers.appendChild(ember);
  }
}

createEmbers();

const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((target) => {
  revealObserver.observe(target);
});
