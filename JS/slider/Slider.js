var number = Math.floor(Math.random()*7)+1; //floor zaokragla liczbe w dol//losowanie liczby od 1 do 7

var timer1;
var timer2;

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
    timer1 = setTimeout("ChangeSlide()",5000) //funkcja ma sie wywolac po uplywie 10 sekund
    timer2 = setTimeout("Hide()",4500);
    
}
function SetSlide(nr)
{
    //wyzerowanie licznika zmiany slajdow 
    clearTimeout(timer1);
    clearTimeout(timer2);
    //-----------------------------------
    numer=nr - 1;
    Hide();
    setTimeout(ChangeSlide(),5000);
}