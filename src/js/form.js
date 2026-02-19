// Form Module

export function setupFormHandler() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Mensaje enviado exitosamente! Nos comunicaremos pronto.');
            this.reset();
        });
    }
}

// Call on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFormHandler);
} else {
    setupFormHandler();
}
