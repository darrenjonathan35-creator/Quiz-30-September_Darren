document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan Feather Icons
    feather.replace();

    // Active menu saat berpindah section
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // Form CSS + JavaScript sederhana
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        message.textContent =
            "Terima kasih, " + name + "! Pesan berhasil diisi dan siap dikirim.";
        message.style.color = "#15803d";

        form.reset();
    });
});
