window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('is-visible');
        }
    });
});

window.onload = () => {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        section.classList.add('is-visible');
    });
};
