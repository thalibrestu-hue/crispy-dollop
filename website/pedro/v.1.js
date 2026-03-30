console.log('Pedro Website v1.0 Loaded');

function showWelcomeMessage() {
    alert('Welcome to Pedro\'s Website! Enjoy exploring!');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return 'Good Morning!';
    } else if (hour < 18) {
        return 'Good Afternoon!';
    } else {
        return 'Good Evening!';
    }
}

window.addEventListener('load', function() {
    console.log(getGreeting());
});