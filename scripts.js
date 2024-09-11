// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const currentMode = localStorage.getItem('mode') || 'light';

if (currentMode === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    body.classList.remove('dark-mode');
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('mode', 'dark');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('mode', 'light');
    }
});

// Function to handle scroll behavior for header and links
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const navLinks = document.querySelectorAll(".nav-link");
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        darkModeToggle.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        header.classList.remove('scrolled');
        darkModeToggle.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
    }
});

// Toggle Skills Visibility
document.getElementById('toggleSkills').addEventListener('click', function () {
    var skillsList = document.querySelector('#skills ul');
    var button = this;

    skillsList.classList.toggle('show-all');

    if (skillsList.classList.contains('show-all')) {
        button.textContent = 'Show less';
    } else {
        button.textContent = '+1 more skill';
    }
});
