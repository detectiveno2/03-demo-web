function slideMenu() {
  var burger = document.querySelector(".burger");
  var linkContainer = document.querySelector(".links-container");
  var navLinks = document.querySelector("nav-links");
  var hasSubmenus = document.querySelectorAll(".has-submenu");
  var submenu = document.querySelector(".submenu");

  burger.addEventListener("click", function() {
    // Toggle links container
    linkContainer.classList.toggle("slide-menu");

    // Toggle burger
    burger.classList.toggle("toggle");

    linkContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("has-submenu"))
        submenu.style.display = "block";
    });
  });
}

slideMenu();
