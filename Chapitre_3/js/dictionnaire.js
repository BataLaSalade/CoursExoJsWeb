// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

/*function addDico() {
    for (i=0; i<mots.length; i++){
        var words = document.createElement("dl");
        words.id = mots[i].terme;
        var bold = document.createElement("strong");
        bold.textContent = mots[i].terme;
        var termes = document.createElement("dt");
        termes.id = "terme";
        var def = document.createElement("dd");
        def.id = "def";
        def.textContent = mots[i].definition;
        document.getElementById("contenu").appendChild(words);
        words.appendChild(termes);
        termes.appendChild(bold);
        words.appendChild(def);
    };    
};
addDico();*/
function addDico() {
    for (i=0; i<mots.length; i++){
        var dlElts = document.createElement("dl");
        var strongElts = document.createElement("strong");
        strongElts.textContent = mots[i].terme;

        var dtElts = document.createElement("dt");
        var ddElts = document.createElement("dd");
        ddElts.textContent = mots[i].definition;
        document.getElementById("contenu").appendChild(dlElts);
        dlElts.appendChild(dtElts);
        dtElts.appendChild(strongElts);
        dlElts.appendChild(ddElts);
    };    
};
addDico();