function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Open the project panel
function toggleProjects() {
  document.getElementById('projectPanel').classList.add('show');
}

// Close the project panel (when the "×" is clicked)
function closeProjects() {
  document.getElementById('projectPanel').classList.remove('show');
}