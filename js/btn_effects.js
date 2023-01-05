let timer, timer2, timer3;

function emergencyCall(){
    clearTimeout(timer2);
    clearTimeout(timer3);

    bodyTag = document.getElementsByTagName("BODY")[0];
    bodyTag.style.filter="invert(100%)";
    bodyTag.style.transition="filter 1.5s";
    timer2 = setTimeout(
        function(){ bodyTag.style.filter="invert(0%)";} , 3000);
    timer3 = setTimeout(removeEmergencyCallEffect, 4500);

}

function sugoma(){
    clearTimeout(timer)
    var sugomaSec = document.getElementById("section1");
    document.getElementById("separator").style.display="none";
    sugomaSec.style.backgroundImage="url('../assets/img/sugoma.gif?"+Math.random()+"')";
    sugomaSec.style.backgroundSize="cover";
    timer = setTimeout(removeSugomaEffect, 2300);


}

function removeSugomaEffect(){
    document.getElementById("section1").removeAttribute("style");
    document.getElementById("separator").removeAttribute("style");

}

function removeEmergencyCallEffect(){
    document.getElementsByTagName("BODY")[0].removeAttribute("style");
}