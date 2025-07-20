document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.numero-card');
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.2}s`;
        card.style.opacity = '0';
        
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 15px 25px -5px ${getComputedStyle(document.documentElement)
                .getPropertyValue('--cor-detalhe-transparente')}`;
            this.style.transform = 'scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 6px -1px rgba(46, 28, 28, 0.1)';
            this.style.transform = 'scale(1)';
        });
    });
});