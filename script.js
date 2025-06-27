document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DEL CURSOR PERSONALIZADO ELIMINADA ---
    // Todo el código que estaba aquí (const cursor, const interactiveElements, etc.) ha sido borrado.

    // --- LÓGICA DE REVELADO AL SCROLL --- (Esto se mantiene)
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: dejar de observar el elemento una vez que es visible
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // El elemento se revela cuando el 15% es visible
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});