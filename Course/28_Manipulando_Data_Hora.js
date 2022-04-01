// Trabalhando com objet Date()

var cont = 2;
var dt = new Date();
var ndt = new Date(); //Ano, Mes, Dia, Hora, Min, Seg, Mil

//ndt.setDate(dt.getDate() + 2); //Metodo usado para modificar a data inteira

// get - retorna o set - configura
let hora = dt.getHours();
let minutos = dt.getMinutes();
let segundos = dt.getSeconds();
let diasem = dt.getDay();
let dia = dt.getDate();
let mes = dt.getUTCMonth();
let ano = dt.getFullYear();

var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

var semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");



document.write(`${semanas[diasem]} , ${dia} , ${meses[mes]} de ${ano} são exatamente ${hora}:${minutos}:${segundos}`);

// Criando uma data personalizada
var ndtp = new Date(2020,07,09) //Year, Month, day, 
document.write("<br>Day > " + ndtp.getDate())
document.write("<br>Month > " + ndtp.getMonth())
document.write("<br>Year > " + ndtp.getFullYear())