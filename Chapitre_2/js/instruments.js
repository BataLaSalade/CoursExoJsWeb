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