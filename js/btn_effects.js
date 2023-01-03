function emergencyCall(){
    

    bodyTag = document.getElementsByTagName("BODY")[0];
    bodyTag.style.filter="invert(100%)";
    bodyTag.style.transition="filter 1.5s";
    setTimeout(
        function(){ bodyTag.style.filter="invert(0%)";} , 3000);
        setTimeout(removeEffect, 4500);

}

function sugoma(){
    var sugomaSec = document.getElementById("section1");
    document.getElementById("separator").style.display="none";
    sugomaSec.style.backgroundImage="url('../assets/img/sugoma.gif?"+Math.random()+"')";
    sugomaSec.style.backgroundSize="cover";
    setTimeout(removeEffect, 2300);


}

function removeEffect(){
    document.getElementsByTagName("BODY")[0].removeAttribute("style");
    document.getElementById("section1").removeAttribute("style");
    document.getElementById("separator").removeAttribute("style");

}