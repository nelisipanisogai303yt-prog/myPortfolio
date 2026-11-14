
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navigationItems = document.querySelectorAll(".nav-links a");
const year = document.getElementById("year");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
});

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

year.textContent = new Date().getFullYear();

(function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const starSymbols = ["✦", "✧", "★"];
    const particleColors = ["#dbeafe", "#93c5fd", "#60a5fa", "#ffffff"];

    function burstStar(star) {
        if (star.dataset.bursting === "true") {
            return;
        }

        star.dataset.bursting = "true";
        const bounds = star.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;

        for (let index = 0; index < 12; index += 1) {
            const particle = document.createElement("span");
            const angle = Math.random() * Math.PI * 2;
            const distance = 18 + Math.random() * 42;

            particle.className = "star-particle";
            particle.setAttribute("aria-hidden", "true");
            particle.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
            particle.style.setProperty("--particle-x", `${centerX}px`);
            particle.style.setProperty("--particle-y", `${centerY}px`);
            particle.style.setProperty("--particle-dx", `${Math.cos(angle) * distance}px`);
            particle.style.setProperty("--particle-dy", `${Math.sin(angle) * distance}px`);
            particle.style.setProperty("--particle-size", `${7 + Math.random() * 7}px`);
            particle.style.setProperty(
                "--particle-color",
                particleColors[Math.floor(Math.random() * particleColors.length)]
            );
            particle.addEventListener("animationend", function () {
                particle.remove();
            }, { once: true });

            document.body.appendChild(particle);
            window.setTimeout(function () {
                particle.remove();
            }, 1000);
        }

        star.remove();
    }

    function createStar() {
        if (document.hidden) {
            window.setTimeout(createStar, 1000);
            return;
        }

        const star = document.createElement("button");
        const duration = 6000 + Math.random() * 3000;
        const direction = (90 + Math.random() * 180) * Math.PI / 180;
        const distance = Math.hypot(window.innerWidth, window.innerHeight) * (0.6 + Math.random() * 0.4);

        star.type = "button";
        star.className = "shooting-star";
        star.setAttribute("aria-label", "Burst a shooting star");
        star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        star.style.setProperty("--star-x", `${window.innerWidth - 32 + Math.random() * 8}px`);
        star.style.setProperty("--star-y", `${Math.random() * Math.max(0, window.innerHeight - 32)}px`);
        star.style.setProperty("--star-size", `${14 + Math.random() * 8}px`);
        star.style.setProperty("--fall-duration", `${duration}ms`);
        star.style.setProperty("--fall-x", `${Math.cos(direction) * distance}px`);
        star.style.setProperty("--fall-y", `${Math.sin(direction) * distance}px`);
        star.addEventListener("pointerdown", function (event) {
            if (event.button === 0) {
                event.preventDefault();
                burstStar(star);
            }
        });
        star.addEventListener("click", function (event) {
            if (event.detail === 0) {
                burstStar(star);
            }
        });
        star.addEventListener("animationend", function () {
            star.remove();
        }, { once: true });

        document.body.appendChild(star);
        window.setTimeout(function () {
            star.remove();
        }, duration + 500);
        window.setTimeout(createStar, 175 + Math.random() * 325);
    }

    createStar();
})();
