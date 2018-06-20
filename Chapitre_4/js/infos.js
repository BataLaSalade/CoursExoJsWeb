/*
----- instructions -----
le programme doit ajouter a la page web
    une liste affichant
        la hauteur de l'élément identifié par "contenu"
        la longeur de l'éléement identifié par "contenu"
*/
var contenu = getComputedStyle(document.getElementById("contenu"))
console.log(contenu.height + "\n" + contenu.width)
var infoListe = document.createElement("ul");
document.getElementById("infos").appendChild(infoListe);


var infoHeight = document.createElement("li");
infoHeight.textContent = "Hauteur : " + contenu.height;
infoListe.appendChild(infoHeight);

var infoWidth = document.createElement("li");
infoWidth.textContent = "Longueur : " + contenu.width;
infoListe.appendChild(infoWidth);

