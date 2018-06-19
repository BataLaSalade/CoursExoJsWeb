// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// suppression du contenu HTML de la liste
//document.getElementById("langages").innerHTML = "";

// ajout de contenu texte
document.querySelector("h1").textContent += " de programmation";

// Definition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
document.getElementById("cpp").setAttribute("class", "test");

// ajouter ou supprimer des classes à un element du DOM
var titreElt = document.querySelector("h1"); // accès au 1er titre h1
titreElt.classList.remove("debut"); // suppr la classe "debut"
titreElt.classList.add("titre");// ajout de la classe "titre"
console.log(titreElt);

//ajouter un nouvel element
// 1- créer le nouvel element
var pythonElt = document.createElement("li");
// 2- ajout des info de l'element
pythonElt.id = "python";
pythonElt.textContent = "Python"
// 3- insertion du nouvel element dans le DOM
document.getElementById("langages").appendChild(pythonElt);

//ajout d'un nouvel element avec un noeud
var perlElt = document.createElement("li");
perlElt.id = "perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

//ajout d'un nouvel element a une position choisie
document.getElementById("langages").insertAdjacentHTML("beforebegin", '<p class="paragrapheBeforeUl">lorem ipsum ** before begin **pussum lilum</p>');
document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">Javascript ** after begin **</li>');
document.getElementById("langages").insertAdjacentHTML("beforeend", '<li id="html">HTML mais ce nest pas de la programmation ** before end **</li>');
document.getElementById("langages").insertAdjacentHTML("afterend", '<p class="paragrapheBeforeUl">lorem ipsum ** after end ** pussum lilum</p>');
