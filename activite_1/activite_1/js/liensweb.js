/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web
/*
----- consignes -----
Le titre de chaque lien est cliquable et envoie vers son URL
La couleur à donner au titre d'un lien est #428bca
Les fichiers liensweb.css et liensweb.html ne doivent pas etre modifies
Les bonnes pratiques doivent être respectees :
    les nouveaux elements du DOM doivent etre crees et modifies 
    puis etre ajoutes à la page
    les variables JS doivent respecter la norme camelCase et le fichier liensweb.js doit être correctement indenté
*/

/*
----- decomposition -----
div "contenu"
|----- div "container" ou "lien"
|    |---- a
|    |    |----- span  "titre"
|    |    |----- "url"
|    |---- p "auteur"
*/

// creation et modification du conteneur
var containerElt = document.createElement("div");
containerElt.classList.add("lien");
// width 100 % ?

// creation et modification des titres du lien
var titleElts = document.createElement("a");
titleElts.style.fontWeight = "bold";
titleElts.style.fontSize = "1.2rem";
titleElts.style.color = "#428bca";
titleElts.style.textDecoration = "none";
titleElts.href = listeLiens[0].url;
titleElts.textContent = listeLiens[0].titre + " ";

var spanElts = document.createElement("span"); // pour l'url du lien
spanElts.textContent = listeLiens[0].url;

// creation et modification des auteurs du lien
var authorElts = document.createElement("p");
authorElts.style.fontSize = "80%";
authorElts.textContent = "Ajouté par " + listeLiens[0].auteur;

// insersion dans le DOM
document.getElementById("contenu").appendChild(containerElt);
containerElt.appendChild(titleElts);
//document.getElementsByTagName("a").insertBefore(spanElts, titleElts)
containerElt.appendChild(spanElts);
containerElt.appendChild(authorElts);





