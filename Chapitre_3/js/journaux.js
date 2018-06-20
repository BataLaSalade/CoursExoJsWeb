// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

// création des nouveaux éléments
// La liste
var listeJournaux = document.createElement("ul");
// ajout des information de l'élement liste
listeJournaux.id = "listeJournaux";
// insertion de l'élément liste
document.getElementById("contenu").appendChild(listeJournaux);

// création des items de la liste
//var itemsListe = document.createElement("li");

function addItems () {
    for ( var i = 0; i<journaux.length; i++) {
        //je crée mes éléments a inserrer
        var itemListe = document.createElement("li");
        var link = document.createElement("a");
        // j'ajoute les info de l'élément
        link.setAttribute("href", journaux[i]);
        link.setAttribute("target","blank");
        link.textContent = journaux[i];
        // j'insère le lien dans l'item de la liste (li)
        itemListe.appendChild(link);
        // j'insère l'item (li) dans la liste (ul)
        listeJournaux.appendChild(itemListe);
    };
};
addItems();
