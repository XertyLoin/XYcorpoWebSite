function rechercherSurPage() {
    var termeRecherche = document.getElementById('search-bar').value.toLowerCase();
    var elements = document.getElementsByTagName('p');

    for (var i = 0; i < elements.length; i++) {
        var contenuElement = elements[i].textContent.toLowerCase();

        // Si le terme de recherche est vide, supprimez le surlignement de tous les éléments
        if (termeRecherche === '') {
            elements[i].innerHTML = elements[i].innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
        } else {
            // Si le contenu de l'élément contient le terme de recherche, surligner le terme
            if (contenuElement.includes(termeRecherche)) {
                elements[i].innerHTML = elements[i].innerHTML.replace(new RegExp('(' + termeRecherche + ')', 'gi'), '<mark>$1</mark>');
            } else {
                // Si le contenu de l'élément ne contient pas le terme de recherche, supprimer tout surlignement
                elements[i].innerHTML = elements[i].innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
            }
        }
    }
}
function effacerSurlignement() {
    // Supprimer le surlignement de tous les éléments
    var elements = document.getElementsByTagName('p');
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = elements[i].innerHTML.replace(/<mark>(.*?)<\/mark>/g, '$1');
    }
}