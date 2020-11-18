/////////Troisieme partie

/////////////////Exercice 1
// Créez 4 éléments input de type checkbox et deux boutons, le
// premier permettant de cocher toutes les cases et le deuxième pour
// décocher toutes les cases

function GereCheckbox(className,etat){
    var clist=document.getElementsByClassName(className);
    for (var i = 0; i < clist.length; ++i) {
        clist[i].checked = etat==1 ? "checked" : false; 
    }
}

var divtp3 = document.createElement('div');
    divtp3.id = "divtp3";
    divtp3.Class="text-center";

var form2 = document.createElement('form');
    form2.class= "form";
    form2.action='#'

var div1 = document.createElement('div');
    div1.class="m-auto";

var input1 = document.createElement('input');
    input1.type = "checkbox";
    input1.name = "test1";
    input1.id = 1;

var input2 = document.createElement('input');
    input2.type = "checkbox";
    input2.name = "test2";
    input2.id = 2;

var input3 = document.createElement('input');
    input3.type = "checkbox";
    input3.name = "test3";
    input3.id = 3;

var input4 = document.createElement('input');
    input4.type = "checkbox";
    input4.name = "test4";
    input4.id = 4;

var div2 = document.createElement('div');
    div2.class="m-auto";

var btn1 = document.createElement('button');
    btn1.href="#";
    btn1.value="coche";
    btn1.onClick="GereCheckbox('chkbx','1');";
    btn1.type="submit";
    btn1.class="btn btn-success"
    btn1.appendChild(document.createTextNode('tout cocher'));

var btn2 = document.createElement('button');
    btn2.href="#";
    btn2.value="decoche";
    btn2.onClick="GereCheckbox('chkbx','0');";
    btn2.type="submit";
    btn2.class="btn btn-danger"
    btn2.appendChild(document.createTextNode('tout décocher'));

divtp3.appendChild(form2);

div1.appendChild(input1);
div1.appendChild(input2);
div1.appendChild(input3);
div1.appendChild(input4);

form2.appendChild(div1);

div2.appendChild(btn1);
div2.appendChild(btn2);

form2.appendChild(div2);

var childBody = document.body.firstChild;
// On insert le bloc avant ce 1er child
document.body.insertBefore(divtp3,childBody);
