var pElt = document.querySelector("p");
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

// les limites de la propriété style 
var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);
console.log(paragraphesElts[2].style.color);

// fonction getComputedStyle

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle);
console.log(stylePara.color);