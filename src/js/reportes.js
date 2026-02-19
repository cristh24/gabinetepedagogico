// Reportes Section Module

export function setupReportesSection() {
    const reportesButtons = document.querySelectorAll('[data-report-type]');
    
    reportesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reportType = this.getAttribute('data-report-type');
            window.location.href = `src/pages/reporte-${reportType}.html`;
        });
    });
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupReportesSection);
} else {
    setupReportesSection();
}
