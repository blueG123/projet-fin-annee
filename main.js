

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


