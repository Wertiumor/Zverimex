let ext = 0;
let ext2 = 0;
let mezisoucet;
let kg = 1;



function extra(typ) {
    ext = parseFloat(typ.value);

}
function extra2(typ) {
    ext2 = parseFloat(typ.value);

}


function kolikKg(sel) {
    kg = parseInt(sel.value);
}

function sum(event) {
    event.preventDefault();
    let total = krmiva.krmivo.value * kg * ext *kvalita2+ kvalita3 +ext2;

    krmiva.cena.value = total;

}


function vejduSe(event) {
    event.preventDefault();
    let total = krmiva.krmivo.value * kg * ext *kvalita2 +kvalita3+ext2;
    let limit = krmiva.kolik.value;

    if (limit >= total)
        krmiva.vLimitu.value = "Vejdeš se do limitu. Ještě něco nakup!";
    else
        krmiva.vLimitu.value = "Nevejdeš se do limitu";

}


function submitMail(event) {
    event.preventDefault()
    mail = krmiva.email.value;
    if (validation(mail))
        alert('Objednávka odeslána')
    krmiva.email.value = 'Zadejte validní email'
}

function handleMailInput() {
    if (krmiva.email.value != '@')
        krmiva.email.value = "";
}


function validation(mail) {
    let validate = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(regexEmail))
        validate = true
    return validate;

}
function kvalita(){

    let kvalita;
    
   
    
         cbb1= cb1.checked;
         cbb2= cb2.checked;
         cbb3= cb3.checked;
         cbb4= cb4.checked;
    
        if(cbb1 == true)
            kvalita2 = 1.30;
        if(cbb2 == true)
            kvalita2 = 1.50; 
        if(cbb3 == true)
            kvalita2 = 0.85;
            if(cbb4 == true){

                kvalita3 = 500;
            }
            else{
                kvalita3 = 0;
            }
             
    
    }
    
