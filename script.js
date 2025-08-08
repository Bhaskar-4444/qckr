document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            const toggleIcon = item.querySelector('.toggle-icon');
            answer.classList.toggle('active');
            toggleIcon.textContent = answer.classList.contains('active') ? '−' : '+';
        });
    });
});
