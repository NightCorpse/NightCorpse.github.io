let timer, timer2, timer3, iconTimer, iconTimer2;

function sugoma(){
    clearTimeout(timer); clearTimeout(iconTimer);
    
    var icon = document.getElementById('icon');
    icon.setAttribute('href' , '/assets/img/sugomaIcon.png' );
    iconTimer = setTimeout(function(){icon.setAttribute('href' , '/assets/img/amogusCyan.png' );}, 2300);
    
    var sugomaSec = document.getElementById("section1");
    sugomaSec.style.backgroundImage="url('../assets/img/sugoma.gif?"+Math.random()+"')";
    sugomaSec.style.backgroundSize="cover";
    document.getElementById("sectionSeparator").style.display="none";
    timer = setTimeout(removeSugomaEffect, 2300);


}

function emergencyCall(){
    clearTimeout(timer2); clearTimeout(timer3); clearTimeout(iconTimer2);
    
    var icon = document.getElementById('icon');
    icon.setAttribute('href' , '/assets/img/amogusInverted.png' );
    iconTimer2 = setTimeout(function(){icon.setAttribute('href' , '/assets/img/amogusCyan.png' );}, 3000);
    
    bodyTag = document.getElementsByTagName("BODY")[0];
    bodyTag.style.filter="invert(100%)";
    bodyTag.style.transition="filter 1.5s";
    
    timer2 = setTimeout(function(){ bodyTag.style.filter="invert(0%)";} , 3000);
    timer3 = setTimeout(removeEmergencyCallEffect, 4500);
}

function removeSugomaEffect(){
    document.getElementById("section1").removeAttribute("style");
    document.getElementById("sectionSeparator").removeAttribute("style");

}

function removeEmergencyCallEffect(){
    document.getElementsByTagName("BODY")[0].removeAttribute("style");
}