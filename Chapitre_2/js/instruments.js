/*
----- instructions -----
créer une fonction infosLiens qui doit afficher :
    Le nombre total de liens dans la page web
    la cible du premier et du dernier lien
*/
var linksElts = document.getElementsByTagName("a");
var firstLink = linksElts[0];
var lastLink = linksElts[linksElts.length-1];

function infosLiens() {
    console.log(linksElts.length);
    console.log(firstLink.href + "\n" + lastLink.href);
}

infosLiens();
console.log("***---***")
/*
----- instructions -----
ecrire une fonction qui verifie qu'un element possede bien une classe
*/



function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    }
    else {
        console.log("Aucun élément ne possède l'indentifiant " + id);
    }
    
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur