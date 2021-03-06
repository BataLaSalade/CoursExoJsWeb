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
----- decomposition -----
div "contenu"
|----- div "container" ou "lien"
    |---- a "titre"
    |----- span  "url"
    |---- p +  span "auteur"
*/

// creation du prototype "Lien" a partir duquel, on crée l'objet "lien" qui devra être ajouté au tableau ListeLien
var Link = {
    titre : "",
    url : "",
    auteur : ""
};

//Création d'une div pour gérer l'ajout d'un lien par l'utilisateur
var divAddLink = document.createElement("div");
divAddLink.style.marginBottom = "15px";
divAddLink.id = "divAddLink";
var btnAddLink = document.createElement("button");
btnAddLink.id = "btnAddLink";
btnAddLink.textContent = "Ajouter un lien";
// Ajout du bouton dans la div
divAddLink.appendChild(btnAddLink);
document.body.insertBefore(divAddLink, document.getElementById("contenu"));

// Ajout de l'encart pour l'affichage du message après l'ajout d'un lien
var divMessage = document.createElement("div");
divMessage.id = "divMessage";
divMessage.style.marginBottom = "15px";
divMessage.style.backgroundColor = "lightblue";
divAddLink.insertBefore(divMessage,btnAddLink);
// disparition de l'élément avant la validation
divMessage.style.display = "none";

// Ajout du message dans la div
var message = document.createElement("p");
message.id = "message";
message.textContent = "Le lien \"" + listeLiens[listeLiens.length-1].titre  +  "\" a bien été ajouté.";
message.style.color = "#428bca";
message.style.padding = "15px";
divMessage.appendChild(message);

// test variable global
var userInputAuthor = "";
var userInputTitle = "";
var userInputUrl = "";

// gestion de l'événement click sur "Ajouter un lien"
document.getElementById("btnAddLink").addEventListener("click", function(){
    console.log("L'utilisateur veut ajouter un lien");
    //disparition du bouton
    document.getElementById("btnAddLink").style.display = "none";

    // création du formulaire
    var form = document.createElement("form");

    // créer les champs de saisi
    var inputAuthor = document.createElement("input");
    inputAuthor.id = "inputAuthor";
    inputAuthor.required = true;
    inputAuthor.setAttribute("type", "text");
    inputAuthor.setAttribute("name", "inputAuthor");
    inputAuthor.setAttribute("placeholder", "Entrez votre nom");
    inputAuthor.style.marginRight = "0.8rem";
    
    var inputTitle = document.createElement("input");
    inputTitle.id = "inputTitle";
    inputTitle.required = true;
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "inputTitle");
    inputTitle.setAttribute("placeholder", "Entrez le titre du lien");
    inputTitle.style.marginRight = "0.8rem";
    
    var inputUrl = document.createElement("input");
    inputUrl.id = "inputURL";
    inputUrl.required = true;
    inputUrl.setAttribute("type", "text");
    inputUrl.setAttribute("name","inputURL");
    inputUrl.setAttribute("placeholder","Entrez l'URL du lien");
    inputUrl.style.marginRight = "0.8rem";

    var btnAdd = document.createElement("input");
    btnAdd.id = "btnAdd";
    btnAdd.setAttribute("type", "submit");
    btnAdd.setAttribute("value", "Ajouter");
    
    // insersion dans le parent et affichage
    form.appendChild(inputAuthor);
    form.appendChild(inputTitle);
    form.appendChild(inputUrl);
    form.appendChild(btnAdd);
    document.getElementById("divAddLink").appendChild(form);

    //Contrôle du format de l'uRL en fin de saisie
    inputUrl.addEventListener("blur", function(){
        //var regexUrl = /^((http|https):\/\/){1}(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$/;
        var httpCheck = userInputUrl.indexOf("http://");
        var httpsCheck = userInputUrl.indexOf("https://");
        if (httpCheck == 0 || httpsCheck == 0){
            console.log("URL valide");
            console.log(userInputUrl);
        } else {
            userInputUrl = "http://" + inputUrl.value;
            console.log(userInputUrl);
        }
    });
    console.log(userInputUrl);
    // gestion de l'affichage du message
    btnAdd.addEventListener("click", function(){
        setTimeout(function (){
            divMessage.style.display = "block";
        }, 100);
    });

    // gestion de l'événement apres le click sur le btn "Ajouter"
    form.addEventListener("submit", function(e){
        console.log("l'utilisateur a fini d'ajouter son lien");
        userInputAuthor = inputAuthor.value;
        userInputTitle = inputTitle.value;
        console.log(userInputAuthor);
        console.log(userInputTitle);
        console.log(userInputUrl);

        // création de l'objet newLink à partir du prototype Link
        var newLink = Object.create(Link);
        newLink.titre = userInputTitle;
        newLink.url = userInputUrl;
        newLink.auteur = userInputAuthor;
        // envoie du nouveau lien dans le tableau listeLiens
        listeLiens.push(newLink);
        console.log(listeLiens);

        //instruction pour l'ajout du dernier lien du tableau
        // creation et modification du conteneur
        var containerElt = document.createElement("div");
        containerElt.classList.add("lien");

        // creation et modification des titres du lien
        var titleElt = document.createElement("a");
        titleElt.href = listeLiens[listeLiens.length-1].url;
        titleElt.textContent = listeLiens[listeLiens.length-1].titre;
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
        spanElt.textContent = listeLiens[listeLiens.length-1].url;
        // insertion dans le parent
        containerElt.appendChild(spanElt);

        // creation et modification des auteurs du lien
        var authorElt = document.createElement("p");
        var spanAuthorElt = document.createElement("span");
        spanAuthorElt.textContent = "Ajouté par " + listeLiens[listeLiens.length-1].auteur;
        authorElt.style.marginBottom = "5px";
        // insersion dans le parent
        authorElt.appendChild(spanAuthorElt);
        containerElt.appendChild(authorElt);

        // insersion dans le DOM en premiere position
        document.getElementById("contenu").insertBefore(containerElt, document.querySelector(".lien")); 
        
        //gestion de l'affichage du message de validation
        

        
        
        e.preventDefault();
        //disparition du form
        form.style.display = "none";        
        btnAddLink.style.display = "inline";

        
        
    });
    
});


    
//var intervalId = setInterval(showMessage, 2000);




//création d'une fonction qui parcours le tableau et qui crée une div contenant le titre, l'url et l'auteur du lien pour chaque element du tableau

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

