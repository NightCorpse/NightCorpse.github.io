const imports = document.createElement('div');
imports.setAttribute('id','imports');
document.head.appendChild(imports);

$(function() {
    $("#imports").load("../html/imports.html");
 });