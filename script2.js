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


// // On crée l'élément conteneur
// var divtp1 = div('divtp1','');

// // On insère le tout dans divtp
// text('Le ',divtp1);
// strong('World Wide Web Consortium',divtp1);
// text(', abrégé par le sigle ',divtp1);
// strong('W3C',divtp1);
// text(', est un ',divtp1);
// a('#','#','Organisme de normalisation',divtp1);
// text(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du ',divtp1);
// a('#','#','World Wide Web',divtp1);

// var childBody = document.body.firstChild;
// //On insert le bloc avant ce 1er child
// document.body.insertBefore(divtp1,childBody);



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

//La méthode window.getComputedStyle() donne la  valeur calculée finale de toutes les propriétés CSS sur un élément.
// var affiche = document.getElementById("affiche");
// var masquer = document.getElementById("masquer");

var divtp2 = document.createElement('div');
    divtp2.id = 'divtp2';

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

divtp2.addEventListener('click', function (e) {
    console.log(this.className)           // journalise le className de mon_element
    console.log(e.currentTarget === this) // journalise `true`
})

afficheBt.addEventListener("click", () => {
    if(getComputedStyle(divTP1).display != "none"){
      divTP1.style.display = "none";
    } else {
      divTP1.style.display = "block";
    }
}) 