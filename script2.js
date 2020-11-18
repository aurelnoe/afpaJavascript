///////////DEUXIEME PARTIE

function form(fenctype,fmethod,faction,parent){
    var form = document.createElement('form');
    form.enctype = fenctype;
    form.method = fmethod;
    form.action = faction;
    parent.appendChild(form);
    return form;
}

function fieldset(parent){
    var newfield = document.createElement('fieldset');
    parent.appendChild(newfield);
    return newfield;
}

function legend(text,parent){
    var newlegend = document.createElement('legend');
    newlegend.appendChild(document.createTextNode(text));
    parent.appendChild(newlegend);
    return newlegend;
}

function label(forlabel,text,parent){
    var newlabel = document.createElement('label');
    newlabel.for = forlabel;
    newlabel.appendChild(document.createTextNode(text));
    parent.appendChild(newlabel);
    return newlabel;
}

function strong(text,parent) {
    var newStrong = document.createElement('strong');
    newStrong.appendChild(document.createTextNode(text));
    parent.appendChild(newStrong);
    return newStrong;
}

function a(ahref,atitle,text,parent) {
    var newA = document.createElement('a');
    newA.href  = ahref;
    newA.title = atitle;//'Organisme de normalisation'
    newA.textContent = text;
    parent.appendChild(newA);
    return newA;
}

function text(textchild,parent){
    var newtext = document.createTextNode(textchild);
    parent.appendChild(newtext);
    return newtext;
}

function input(typeInput,nameInput,idInput,valueInput,parent){
    var newInput = document.createElement('input');
    newInput.type = typeInput;
    newInput.name = nameInput;
    newInput.id = idInput;
    newInput.value = valueInput;
    parent.appendChild(newInput);
    return newInput;
}

function br(parent){
    var newbr = document.createElement('br');
    parent.appendChild(newbr)
    return newbr;
}
//////////////////////Exercice 1
/* 
<div id="divTP1">
    Le <strong> World Wibe Web Consortium</strong>, abrégé par le sigle
    <strong>W3C</strong>, est un 
    <a href="#"
    title="#"> organisme de standardisation</a>
    a but non lucratif chargé de promouvoir la comptabilité des technologie du
    <a href="#" title="#"> World Wide Web</a>
</div> */


// On crée l'élément conteneur
var divtp1 = document.createElement('div');
    divtp1.id = 'divtp1';
    divtp1.classList = "text-center"

// On insère le tout dans divtp
text('Le ',divtp1);
strong('World Wide Web Consortium',divtp1);
text(', abrégé par le sigle ',divtp1);
strong('W3C',divtp1);
text(', est un ',divtp1);
a('#','#','Organisme de normalisation',divtp1);
text(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du ',divtp1);
a('#','#','World Wide Web',divtp1);

document.body.appendChild(divtp1);


///////////////////////Exercice 2
/* <div id="divTP2">
    <form enctype="multipart/form-data" method="post" action="upload.php">
        <fieldset>
            <legend>Upload une image</legend>
            <div style="text-align: center">
                <label for="inputLoad">Image à uploader :</label>
                <input type="file" name="inputLoad" id="inputLoad"/>
                <br/><br/>
                <input type="submit" value="envoyer"/>
            </div>
        </fieldset>
    </form>
</div> */

var divtp2 = document.createElement('div');
    divtp2.id = 'divtp2';
    divtp2.classList = "text-center my-4"

var formtp2 = form('multipart/form-data','post','upload.php',divtp2);

var fieldtp2 = fieldset(formtp2);

var legendtp2 = legend('Upload une image',fieldtp2);

var div1 = document.createElement('div');
    div1.id = 'div1';
    div1.style = TextAlign = 'center';

label("inputLoad",'Image à uploader :',div1)
input('submit','','idInput','Envoyer',div1)
br(div1);
br(div1);
input('file','inputLoad','inputLoad','',div1);
    
fieldtp2.appendChild(div1);

document.body.appendChild(divtp2);

var affichetp1 = document.getElementById("affichetp1");
var masquertp1 = document.getElementById("masquertp1");
var affichetp2 = document.getElementById("affichetp2");
var masquertp2 = document.getElementById("masquertp2");

affichetp1.addEventListener("click", () => {
    if(getComputedStyle(divtp1).display == "none"){
      divtp1.style.display = "block";
    }
}) 

masquertp1.addEventListener("click", () => {
    if(getComputedStyle(divtp1).display != "none"){
    divtp1.style.display = "none";
    }
})

affichetp2.addEventListener("click", () => {
    if(getComputedStyle(divtp2).display == "none"){
      divtp2.style.display = "block";
    }
}) 

masquertp2.addEventListener("click", () => {
    if(getComputedStyle(divtp2).display != "none"){
    divtp2.style.display = "none";
    }
})