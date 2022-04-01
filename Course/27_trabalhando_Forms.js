// Obtendo quantidade de formularios na pagina
// var fm=document.forms.length
// document.write("Quantidade de formularios: "+fm)


// Formar diferente de retorna os id dos formularios
// var fm=document.forms[1].id;
// var fm=document.forms.item().id;
// var fm = document.forms.namedItem("curso1").id;
// document.write("ID: " + fm)

// Retornando o formulario | Imprimir o formulario
var fm = document.forms.namedItem("curso1").innerHTML;
document.write("ID: " + fm)

var fm = document.forms[0];
var el = fm.elements;

for (let i = 0; i < el.length; i++) {
    el[i].style.backgroundColor = "#bbb"
    // el[i].value = "Talismar"
}

/** Pegando formularios atravez do getElementsById */
document.write("<br><br>" + document.getElementById('curso1').elements[0].value);

/** Mudando a cor */
document.getElementById('curso1').elements[0].style.color="green"

// document.write(document.getElementById('curso1').elements[0].value = "Novo texto");