const words = [
    "premium websites.",
    "powerful user experiences.",
    "brands that stand out."
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[i];

    if (isDeleting) {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, j--);
    } else {
        document.querySelector(".typing").textContent =
            currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        setTimeout(() => isDeleting = true, 1500);
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
const sections = document.querySelectorAll(".hidden");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 30px";
        navbar.style.background = "rgba(0, 0, 0, 0.4)";
    } else {
        navbar.style.padding = "15px 30px";
        navbar.style.background = "rgba(255, 255, 255, 0.08)";
    }
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash !== "") {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ===== Project Card Glow Effect =====
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px,
            rgba(0,198,255,0.15),
            rgba(255,255,255,0.05))
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "var(--card)";
    });
});
// ===== Track Project Clicks =====
document.querySelectorAll(".project-links a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Project link clicked:", link.href);
    });
});
const words = [
    "modern web applications.",
    "real-world software systems.",
    "clean & scalable code.",
    "brands that stand out."
];

