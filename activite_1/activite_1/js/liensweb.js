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
    |---- a "titre"
    |----- span  "url"
    |---- p "auteur"
*/

//création d'une fonction qui parcours le tableau et qui crée une div contenant le titre, l'url et l'auteur du lien pour chaque element du tableau

function addLink() {
    listeLiens.forEach(function(lien){
        // creation et modification du conteneur
        var containerElt = document.createElement("div");
        containerElt.classList.add("lien");
        // creation et modification des titres du lien
        var titleElts = document.createElement("a");
        titleElts.style.fontWeight = "bold";
        titleElts.style.fontSize = "1.2rem";
        titleElts.style.color = "#428bca";
        titleElts.style.textDecoration = "none";
        titleElts.style.lineHeight = "0.3rem"
        titleElts.href = lien.url;
        titleElts.setAttribute("target", "blank")
        titleElts.textContent = lien.titre + " ";
        var spanElts = document.createElement("span"); // pour l'url du lien
        spanElts.textContent = lien.url;
        spanElts.style.lineHeight = "0.3rem"
        spanElts.style.fontSize = "0.9rem";
        // creation et modification des auteurs du lien
        var authorElts = document.createElement("p");
        authorElts.style.fontSize = "0.9rem";
        authorElts.style.lineHeight = "0.3rem";
        authorElts.style.marginBottom = "5px";
        authorElts.textContent = "Ajouté par " + lien.auteur;
        // insersion dans le DOM
        document.getElementById("contenu").appendChild(containerElt);
        containerElt.appendChild(titleElts);
        containerElt.appendChild(spanElts);
        containerElt.appendChild(authorElts);
    });
}
addLink();
