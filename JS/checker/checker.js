function check()
{
    var number =  document.getElementById("in").value;   
    //document.write(number);//wypisz na ekranie
    if(number<0) 
        document.getElementById("comment").innerHTML="ujemna";
    else
        if(number>0)
            document.getElementById("comment").innerHTML="dodatnia";
        else
            if(number=="0")
                document.getElementById("comment").innerHTML="zero";
}