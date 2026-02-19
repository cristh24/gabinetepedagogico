// Monitoreo Section Module

export function setupMonitoreoSection() {
    const monitoreoCard = document.getElementById('monitoreo-card');
    
    if (monitoreoCard) {
        monitoreoCard.addEventListener('click', () => {
            window.location.href = 'src/pages/monitoreo.html';
        });
        
        // Add cursor pointer on hover
        monitoreoCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMonitoreoSection);
} else {
    setupMonitoreoSection();
}
