// Recursos Section Module

export function setupRecursosSection() {
    const recursosLinks = document.querySelectorAll('[data-recurso-link]');
    
    recursosLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const recursoLink = this.getAttribute('data-recurso-link');
            if (recursoLink && recursoLink !== '#') {
                e.preventDefault();
                window.location.href = recursoLink;
            }
        });
    });
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupRecursosSection);
} else {
    setupRecursosSection();
}
