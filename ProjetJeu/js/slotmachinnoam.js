var  gameOver= new Audio("../asset/assetNoam/gameover.mp3");
var  defaite= new Audio("../asset/assetNoam/defaite.mp3");
var  jackpot = new Audio("../asset/assetNoam/jackpot.mp3");
var Victoire = new Audio("../asset/assetNoam/victoire.mp3");

function Jeu()
{
    var mise = parseInt($('#mise').val());
    var gain = parseInt($('#gain').val());
    

    if( $('#mise').val() === "" || mise > gain || mise < 1)
    {
        alert("Veuillez saisir une bonne mise !");
        if(gain == 0)
        {
            alert("GAME OVER RESTART");
            gameOver.play();
        } 
    }
    else
    {
       $('#reels ul').playSpin({
            onFinish : function(){
                Jackpot();
            }
        });
    }
}

function Jackpot()
{
    
    if(($('#reel1').css('top')) == ($('#reel2').css('top')) && ($('#reel2').css('top')) == ($('#reel3').css('top')))
    {
        alert("JACKPOT, TU ES LE ROI DES SALLES D'ARCADE");
        $('#gain').val(parseInt($('#gain').val()) + parseInt(($('#mise').val()))*5);
        jackpot.play();
    }
    else if(($('#reel1').css('top')) == ($('#reel2').css('top')) || ($('#reel2').css('top')) == ($('#reel3').css('top')) || ($('#reel1').css('top')) == ($('#reel3').css('top')))
    {
        alert("GAGNE, T'ES UN BON"); 
        $('#gain').val(parseInt($('#gain').val()) + parseInt(($('#mise').val()))*2);
        Victoire.play();
    }
    else
    {
        alert("PERDU, T'ES UN LOOSER");
        $('#gain').val(parseInt($('#gain').val()) - parseInt(($('#mise').val())));
        defaite.play();
    }
}

