function CreateInterval()
{
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;
    var numbers = ""
    for(i=number1;i<=number2;i++)
        numbers=numbers + i + ", ";
    document.getElementById("intervalOfNumbers" ).innerHTML=numbers;
} 