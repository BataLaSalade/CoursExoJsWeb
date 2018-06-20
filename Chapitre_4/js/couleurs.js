/*
----- instructions -----
l'utilisateur saisi
    la nouvelle couleur du texte
    la nouvelle couleur de fond
les couleurs sont saisi en anglais ou en valeur RGB
*/
var textColor = prompt("Saisissez votre couleur de texte");
var bkgColor = prompt("Saisissez votre couleur de fond");

var divElts = document.getElementsByTagName("div");
for (i=0; i<divElts.length; i++){
    divElts[i].style.color = textColor;
    divElts[i].style.backgroundColor = bkgColor;
};