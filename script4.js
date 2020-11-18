
// function GereBR(className,etat){
//     var clist=document.getElementsByTagName(className);
//     clist.checked = etat==1 ? "checked" : false; 
    
// }

var output = document.getElementById('output'), br;

while (br = output.getElementsByTagName('br')[0]) {
    br.parentNode.removeChild(br);
}

affichetp1.addEventListener("click", () => {
    if(getComputedStyle(divtp1).display == "none"){
      divtp1.style.display = "block";
    }
}) 