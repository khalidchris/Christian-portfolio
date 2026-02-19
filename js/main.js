// ===== TYPING EFFECT =====
const words = ["modern web applications.", "real-world software systems.", "clean & scalable code.", "brands that stand out."];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
    currentWord = words[i];
    document.querySelector(".typing").textContent = currentWord.substring(0, j);
    if(!isDeleting) j++;
    if(isDeleting) j--;
    
    if(!isDeleting && j === currentWord.length){ setTimeout(()=> isDeleting=true,1500); }
    if(isDeleting && j===0){ isDeleting=false; i=(i+1)%words.length; }
    setTimeout(typeEffect, isDeleting?50:100);
}
typeEffect();

// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll(".section");
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section=>{
        if(section.getBoundingClientRect().top < triggerBottom){
            section.classList.add("show");
        }
    });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click', e=>{
        if(link.hash!==""){ e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({behavior:"smooth"});
        }
    });
});

// ===== DARK/LIGHT MODE =====
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if(localStorage.getItem("theme")==="light"){ body.classList.add("light"); toggleBtn.textContent="☀️"; }

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("light");
    if(body.classList.contains("light")){ toggleBtn.textContent="☀️"; localStorage.setItem("theme","light"); }
    else{ toggleBtn.textContent="🌙"; localStorage.setItem("theme","dark"); }
});
