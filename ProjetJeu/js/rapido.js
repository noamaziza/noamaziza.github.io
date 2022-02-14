var joueur = [];
var joueur2=0;
var ordi=[];
var ordi2=0;
var nbCases = 0;
var nbCases2 = 0;
var mise = parseInt($('#mise').val());
var gain = parseInt($('#cagnotte').val());
var mise2 = 0;
var  gain2 = 100;

function click1()
{ 
  var Case = $(this)
  if (Case.attr('class') == 'utilisateur'){
    if(nbCases<8)
    {
      Case.addClass('red');
      nbCases++;
    }
    else
    {
      alert("Vous devez choisir que 8 éléments");
    }
  }
  else {
    Case.removeClass('red');
    nbCases--;
  }
}
function click2()
{ 
  var Case2 = $(this);
  if (Case2.attr('class') == 'utilisateur2'){
    if(nbCases2<1)
    {
      Case2.addClass('red');
      nbCases2++;
    }
    else
    {
      alert("Vous devez choisir un élément");
    }
  }
  else {
    Case2.removeClass('red');
    nbCases2--;
  }
}



function jeu()
  
{
  mise2 = $('#mise').val();
  gain2 = $('#cagnotte').val();

  if($("#mise").val()=="")
  {
    alert("veuillez saisir une mise");
  }
  else if($("#mise").val()<=0)
  {
    alert("veuillez saisir une valeur positive");
  }
  
  else if(mise2 > gain2)
  {
    alert("Vous n'avez pas assez de crédit ");
  }
  else
  {
    $("#cagnotte").val($("#cagnotte").val()-$("#mise").val());
    $("td.ordi").css("background-color","grey");
    $("td.ordi2").css("background-color","grey");
    $('td.utilisateur.red').each(function()
  {
    joueur.push(parseInt($(this).html()))
  })

  joueur2 =parseInt($('td.utilisateur2.red').html());

   //  Génération de l'array random pour l'ordi grille A
  for(i = 0 ; i < 8 ; i++)
  {
    var rand = Math.floor(Math.random() * 20);
    if (ordi.includes(rand))
    {
      i--;
    } 
    else 
    {
      ordi.push(rand);
    }
  }

  //  Séléction des TD de la grille ordinateur :
  $('.ordi').each(function(){
    if(ordi.includes(parseInt($(this).html())))
    {
      $(this).css('background-color','red');
    }
  })

  //  creer un random grille B ordi
  ordi2= Math.floor(Math.random() * 4)+1;
  $('.ordi2').each(function()
  {
    if(ordi2 == (parseInt($(this).html())))
    {
      $(this).css("background-color","red");
    }
  })
  

  //  Comparaison des nombres & Application des règles :
  var result = [];
  for(i = 0 ; i < 8 ; i++)
  {
    if (ordi.includes(joueur[i]))
    {
      result.push(joueur[i]);
    }
  }
  // B
  var result2 = false;
    if (ordi2 == (joueur2))
    {
      result2 = true;
    }
  
  //  le Switch :
  switch(true){
    case result.length == 8 && result2:
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*8);
    break;
    case result.length == 7 && result2:
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*6); 
    break;
    case result.length == 6 && result2:
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*4);
    break;
    case result.length == 8 :
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*7);
    break;
    case result.length == 7:
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*5);
    break;
    case result.length == 6 :
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*3);
    break;
    default:
      $('#cagnotte').val(parseInt($('#cagnotte').val()) + parseInt(($('#mise').val()))*0);
    break;
  }

  if(result2)
  {
    result.push(ordi2);
  }

  $('#resultat').empty();

    var table = $('<table>');
    for(i=0; i<result.length ; i++){
        var colonne = $('<td>' + result[i] + '</td>');
        table.append(colonne);
    }
    $('#resultat').append(table);



}

}



