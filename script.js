function updateAgeDisplay(value) {
    document.getElementById("ageDisplay").innerText = value;
}


const roles = ["I am a Frontend Developer", "I am a Backend Developer", "I am a Full Stack Developer", "I am a UI Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 1000;

const role1 = document.getElementById("dynamic-role");
const role2 = document.getElementById("dynamic-role-1");

function type() {
    const current = roles[index];
    const displayText = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);

    if (role1) role1.textContent = displayText;
    if (role2) role2.textContent = displayText;

    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, delayBetweenRoles);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % roles.length;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", type);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.scroll-reveal').forEach((el) => {
    observer.observe(el);
});
