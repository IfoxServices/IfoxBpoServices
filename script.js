document.addEventListener("DOMContentLoaded", function () {
  const servicesItem = document.querySelector(".has-submenu");
  const submenu = servicesItem.querySelector(".submenu");

  servicesItem.addEventListener("click", function (e) {
    e.stopPropagation();
    servicesItem.classList.toggle("active");

    if (servicesItem.classList.contains("active")) {
      submenu.style.top = `-${submenu.offsetHeight}px`;
    } else {
      submenu.style.top = "100%";
    }
  });

  document.addEventListener("click", function (e) {
    if (!submenu.contains(e.target) && !servicesItem.contains(e.target)) {
      servicesItem.classList.remove("active");
      submenu.style.top = "100%";
    }
  });

  const servicesItemDesktop = document.querySelector(".has-submenu-desktop");
  const submenuDesktop = servicesItemDesktop.querySelector(".submenu-desktop");

  servicesItemDesktop.addEventListener("click", function (e) {
    e.stopPropagation();
    servicesItemDesktop.classList.toggle("active");

    if (servicesItemDesktop.classList.contains("active")) {
      submenuDesktop.style.top = "100%";
    } else {
      submenuDesktop.style.top = "100%";
    }
  });

  document.addEventListener("click", function (e) {
    if (
      !submenuDesktop.contains(e.target) &&
      !servicesItemDesktop.contains(e.target)
    ) {
      servicesItemDesktop.classList.remove("active");
      submenuDesktop.style.top = "100%";
    }
  });

  const mobileNavItems = document.querySelectorAll(".mobile-nav .nav-links li");
  mobileNavItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileNavItems.forEach(function (navItem) {
        navItem.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
});
// About Us page
