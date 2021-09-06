function count(){
    var today = new Date(); 
    var day = today.getDate();
    if(day<10)
        day="0"+day;
    var month = today.getMonth()+1;
    if(month<10)
        month="0"+month;
    var year = today.getFullYear();

    var hour = today.getHours();
    if(hour<10)
        hour="0"+hour;
    var minute = today.getMinutes();
    if(minute<10)
        minute="0"+minute;
    var second = today.getSeconds();
    if(second<10)
        second="0"+second;
    //"podmienienie" zawartości tagu div o danym id na poniższe wartości 
    document.getElementById("clock").innerHTML = 
    day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second;

    setTimeout("count()",1000); //wywołanie funkcji na nowo po upływie czasu 1000ms
}
