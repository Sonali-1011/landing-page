async function fetchQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.textContent = "Loading...";
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    quoteElement.textContent = `"${data.content}" — ${data.author}`;
  } catch {
    quoteElement.textContent = "Failed to load quote.";
  }
}

// Reveal animation on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visible = 150;
    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.onload = () => {
  fetchQuote();
  revealOnScroll();
};
async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    document.getElementById("quote").textContent = `"${data.content}" — ${data.author}`;
  } catch (error) {
    document.getElementById("quote").textContent = "Failed to fetch quote. Please try again.";
    console.error("Error fetching quote:", error);
  }
}

const quotes = [
  "Dream big.",
  "Believe in yourself.",
  "Chase your dreams.",
  "If you can dream it, do it.",
  "Stay strong. Keep going.",
  "Dream. Believe. Achieve.",
  "Make it happen.",
  "Turn dreams into plans.",
  "One step at a time.",
  "Live your dream."
];

function fetchQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

window.onload = fetchQuote;
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
