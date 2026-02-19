// Directivas Section Module

export function setupDirectivasSection() {
    const directivasCard = document.getElementById('directivas-card');
    
    if (directivasCard) {
        directivasCard.addEventListener('click', () => {
            window.location.href = 'src/pages/directivas.html';
        });
        
        // Add cursor pointer on hover
        directivasCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDirectivasSection);
} else {
    setupDirectivasSection();
}
