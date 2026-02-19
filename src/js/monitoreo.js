// Monitoreo Section Module

export function setupMonitoreoSection() {
    const monitoreoLink = document.querySelector('[data-section="monitoreo"]');
    
    if (monitoreoLink) {
        monitoreoLink.addEventListener('click', () => {
            window.location.href = 'src/pages/monitoreo.html';
        });
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMonitoreoSection);
} else {
    setupMonitoreoSection();
}
