const divResultat = document.querySelector("#resultat");


var tabJeu = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
];

var tabResultat = genereTableauAleatoire();

var oldSelection=[];
var nbAffiche = 0;
var ready = true;
var move = 0;



afficherTableau();

function afficherTableau(){
    var txt ="";

    for(var i=0; i < tabJeu.length ; i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ; j++){
            if(tabJeu[i][j] === 0){
                txt +="<img class='uneCarte' src='../asset/assetMemory/dosbleu.png' style='width:13%;height:30%;margin:1%' onClick='verif(\""+i+"-"+j+"\")'>";
            } 
            else{
                txt += "<img class='uneCarteSelect' src='"+getImage(tabJeu[i][j])+"' style=width:13%;height:30%;margin:1%>";
            } 
        }
        txt += "</div>";
    }

    divResultat.innerHTML = txt;
}

function getImage(valeur){
    var imgTxt = "../asset/assetMemory/";
    switch(valeur){
        case 1 : imgTxt += "6.png";
        break;
        case 2 : imgTxt += "7.png";
        break;
        case 3 : imgTxt += "8.png";
        break;
        case 4 : imgTxt += "9.png";
        break;
        case 5 : imgTxt += "10.png";
        break;
        case 6 : imgTxt += "valet.png";
        break;
        case 7 : imgTxt += "dame.png";
        break;
        case 8 : imgTxt += "roi.png";
        break;
        case 9 : imgTxt += "as.png";
        break;
        default : console.log("cas non pris en compte");
    }
    return imgTxt;
}

function verif(imgTxt){
    if(ready){
        nbAffiche++;

        var ligne = imgTxt.substr(0,1);
        var colonne = imgTxt.substr(2,1);
    
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();
    
        if(nbAffiche>1) {
            ready = false;
            setTimeout(() => {
                //verification
                if(tabJeu[ligne][colonne] !== tabJeu[oldSelection[0]][oldSelection[1]]){
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
                    move++;
                   
                }
                afficherTableau();
                ready = true;
                nbAffiche = 0;
                oldSelection = [ligne,colonne];
            },500)
        } else {
            oldSelection = [ligne,colonne];
            move++;
        } 
        $('#click').text('Nombre de coups : '+move);
        
    }
    VerifGagner();
}

function genereTableauAleatoire(){
    var tab = [];
    var nbImagePosition=[0,0,0,0,0,0,0,0,0];

    for(var i = 0 ; i < 3 ; i++){
        var ligne = [];
        for(var j = 0 ; j < 6 ; j++){
            var fin = false;
            while(!fin){
                var randomImage = Math.floor(Math.random() * 9);
                if(nbImagePosition[randomImage] < 2){
                    ligne.push(randomImage+1);
                    nbImagePosition[randomImage]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}

//  fonction de fin de partie
function VerifGagner(){
    var carteRetourner = $('.uneCarteSelect').length
    if (carteRetourner == 18){
        //  inserer code a executer en cas de victoire
        $('#victoire').removeAttr('hidden');
        $('#victoire').children('label').text("C'est gagné en "+move+" coups !")
        $('#restart').removeAttr('hidden');
    }
}
