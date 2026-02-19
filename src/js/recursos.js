// Recursos Section Module

export function setupRecursosSection() {
    const recursosCard = document.getElementById('recursos-card');
    
    if (recursosCard) {
        recursosCard.addEventListener('click', () => {
            window.location.href = 'src/pages/recursos.html';
        });
        
        // Add cursor pointer on hover
        recursosCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupRecursosSection);
} else {
    setupRecursosSection();
}
