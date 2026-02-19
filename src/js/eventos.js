// Eventos Section Module

export function setupEventosSection() {
    const eventosCards = document.querySelectorAll('[data-event-id]');
    
    eventosCards.forEach(card => {
        card.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event-id');
            window.location.href = `src/pages/evento-${eventId}.html`;
        });
        
        this.style.cursor = 'pointer';
    });
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventosSection);
} else {
    setupEventosSection();
}
