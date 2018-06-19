var titresElts = document.getElementsByTagName("h2");
console.log(titresElts[0]);
console.log(titresElts.length);
////
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i<merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
};
//
console.log(document.getElementById("nouvelles"));
//
// tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);