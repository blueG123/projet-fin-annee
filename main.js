window.addEventListener("DOMContentLoaded", () => {
  // Correction du sélecteur pour cibler la section "A propos"
  const contenu = document.querySelector("#apropos");
  if (contenu) {
    contenu.style.opacity = 0;
    contenu.style.transform = "translateY(30px)";
    contenu.style.transition = "all 1s ease";
    setTimeout(() => {
      contenu.style.opacity = 1;
      contenu.style.transform = "translateY(0)";
    }, 200);
  }

  // Gestion du menu responsive mobile
  const btnMenu = document.getElementById("btn-menu");
  const navbarCache = document.getElementById("navbar-cache");
  const navbarClicable = document.getElementById("navbar-clicable");

  if (btnMenu && navbarCache) {
    btnMenu.addEventListener("click", () => {
      navbarCache.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  }
  if (navbarClicable && navbarCache) {
    navbarClicable.addEventListener("click", () => {
      navbarCache.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }
});

document.querySelectorAll("h2, h3").forEach((titre) => {
  titre.addEventListener("mouseenter", () => {
    titre.style.transform = "scale(1.05)";
    titre.style.transition = "transform 0.3s ease";
  });
  titre.addEventListener("mouseleave", () => {
    titre.style.transform = "scale(1)";
  });
});

document.querySelectorAll("a[href^='#']").forEach((ancre) => {
  ancre.addEventListener("click", function (e) {
    e.preventDefault();
    const cible = document.querySelector(this.getAttribute("href"));
    if (cible) {
      cible.scrollIntoView({ behavior: "smooth" });
    }
  });
});



