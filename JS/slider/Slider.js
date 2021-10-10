var number = Math.floor(Math.random()*7)+1; //floor zaokragla liczbe w dol//losowanie liczby od 1 do 7

function Hide()
{
    $("#slider").fadeOut(500); //animacja znikniecia slajdow
}
function ChangeSlide()
{
    number++;
    if(number>7)
        number=1;
    var file = "<img src=\"Data//s" + number + ".png\">";

    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500); //animacja pojawienia sie slajdow
    setTimeout("ChangeSlide()",5000) //funkcja ma sie wywolac po uplywie 10 sekund
    setTimeout("Hide()",4500);
    
}