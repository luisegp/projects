
document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".nav__link");

    menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                behavior: "smooth",
                });
            }
        });
    });
});
