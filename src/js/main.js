// Main navigation and scroll management

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        updateSidebarButtons(sectionId);
    }
}

function updateSidebarButtons(activeId) {
    document.querySelectorAll('.sidebar-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`button[onclick="scrollToSection('${activeId}')"]`)?.classList.add('active');
}

// Update sidebar on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scroll-section');
    if (sections.length === 0) return;
    
    let currentSection = sections[0].id;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
            currentSection = section.id;
        }
    });
    
    updateSidebarButtons(currentSection);
});

// Smooth scroll para todos los enlaces
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Export functions for global use
window.scrollToSection = scrollToSection;
window.updateSidebarButtons = updateSidebarButtons;
