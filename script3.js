/////////Troisieme partie

/////////////////Exercice 1
// Créez 4 éléments input de type checkbox et deux boutons, le
// premier permettant de cocher toutes les cases et le deuxième pour
// décocher toutes les cases

function input(idInput,typeInput,nameInput,parent){
    var newInput = createElement('input');
    newInput.id = idInput;
    newInput.type = typeInput;
    newInput.name = nameInput;
    parent.appendChild(newInput);
    return newInput;
}

function btn(hrefBtn,valueBtn,onclickBtn,typeBtn,classListBtn,parent){
    var newBtn = createElement('Btn');
    newBtn.href = hrefBtn;
    newBtn.value = valueBtn;
    newBtn.onclick = onclickBtn;
    newBtn.type = typeBtn;
    newBtn.classList = classListBtn;
    parent.appendChild(newBtn);
    return newBtn;
}

function gereCheckbox(className,etat){
    var clist=document.getElementsByTagName(className);
    for (var i = 0; i < clist.length; ++i) {
        clist[i].checked = etat==1 ? "checked" : false; 
    }
}

// var divtp3 = document.createElement('div');
//     divtp3.id = "divtp3";
//     divtp3.classList="text-center";

// var form2 = document.createElement('form');
//     form2.class= "form";
//     form2.action='#'

// var div1 = document.createElement('div');
//     div1.classList="m-auto";


// var div2 = document.createElement('div');
//     div2.classList="m-auto";

// divtp3.appendChild(form2);

// input(1,'checkbox','test1',div1)
// input(2,'checkbox','test2',div1)
// input(3,'checkbox','test3',div1)
// input(4,'checkbox','test4',div1)

// btn('#',"coche","GereCheckbox('chkbx','1');","submit","btn btn-success",div2);
// btn('#',"decoche","GereCheckbox('chkbx','0');","submit","btn btn-danger",div2);

// form2.appendChild(div1);

// form2.appendChild(div2);

// document.body.appendChild(divtp3);