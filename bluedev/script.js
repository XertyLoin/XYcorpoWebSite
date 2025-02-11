document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const infoText = card.getAttribute('data-info');
        const infoBox = document.getElementById('infoBox');
        const infoTextElement = document.querySelector('.article');

        // Modifier le texte dans l'article en fonction de la carte survolée
        infoTextElement.innerHTML = `<h2>${card.querySelector('.subtitle').textContent}</h2><p>${infoText}</p>`;

        // Afficher le bloc d'information
        infoBox.style.display = 'block';
    });

    card.addEventListener('mouseleave', () => {
        // Masquer le bloc d'information lorsque la souris quitte la carte
        const infoBox = document.getElementById('infoBox');
        infoBox.style.display = 'none';
    });
});
