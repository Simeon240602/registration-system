document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const screens = document.querySelectorAll(".screen");
  const switchButtons = document.querySelectorAll(".switch-screen, .link-switch");
  const logoutButton = document.getElementById("logoutBtn");

  function showScreen(targetId) {
    screens.forEach((screen) => {
      screen.classList.toggle("active", screen.id === targetId);
    });

    navItems.forEach((button) => {
      button.classList.toggle("active", button.dataset.target === targetId);
    });
  }

  navItems.forEach((button) => {
    button.addEventListener("click", () => showScreen(button.dataset.target));
  });

  switchButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = button.dataset.target;
      if (target) {
        event.preventDefault();
        showScreen(target);
      }
    });
  });

  logoutButton?.addEventListener("click", () => {
    showScreen("login-screen");
    navItems.forEach((button) => {
      button.classList.toggle("active", button.dataset.target === "login-screen");
    });
  });
});
