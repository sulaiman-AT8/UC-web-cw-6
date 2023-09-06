let score = 0;
let nam = prompt("ما هو اسمك")
nameDisply = document.getElementById("title")
let scoreHtml = document.getElementById('score')

function increaese() {
    score=score +1;
    scoreHtml.innerHTML = score
   

}
function welcome() {
    nameDisply.innerHTML = "welcome, " + nam + "to COOKIEE CLICKEEERRR!!!"   
}
nameDisply.innerHTML = "welcome, " + nam + "to COOKIEE CLICKEEERRR!!!"   



