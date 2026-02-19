// Reportes Section Module

export function setupReportesSection() {
    const reportesCard = document.getElementById('reportes-card');
    
    if (reportesCard) {
        reportesCard.addEventListener('click', () => {
            window.location.href = 'src/pages/reportes.html';
        });
        
        // Add cursor pointer on hover
        reportesCard.style.cursor = 'pointer';
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReportesSection);
} else {
    setupReportesSection();
}
