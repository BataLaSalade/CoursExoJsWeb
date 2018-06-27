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
        var titleElt = document.createElement("a");
        titleElt.href = lien.url;
        titleElt.textContent = lien.titre;
        titleElt.setAttribute("target", "blank")
        // ajout des styles sur l'element
        titleElt.style.fontWeight = "bold";
        titleElt.style.color = "#428bca";
        titleElt.style.textDecoration = "none";
        titleElt.style.marginRight = "5px";
        // Insersion dans le parent
        containerElt.appendChild(titleElt);
        
        // creation et modification de l'URL
        var spanElt = document.createElement("span");
        spanElt.textContent = lien.url;
        // insertion dans le parent
        containerElt.appendChild(spanElt);

        // creation et modification des auteurs du lien
        var authorElt = document.createElement("p");
        var spanAuthorElt = document.createElement("span");
        spanAuthorElt.textContent = "Ajouté par " + lien.auteur;
        authorElt.style.marginBottom = "5px";
        // insersion dans le parent
        authorElt.appendChild(spanAuthorElt);
        containerElt.appendChild(authorElt);

        // insersion dans le DOM
        document.getElementById("contenu").appendChild(containerElt);
        
        
        
    });
}
addLink();
