function relogio1() {
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();

  if (segundo < 10) {
      segundo = '0' + segundo;
  }
  if (minuto < 10) {
      minuto = '0' + minuto;
  }
  if (hora < 10) {
      hora = '0' + hora;
  }
  var horas = hora + ":" + minuto + ":" + segundo;
  document.querySelector('#relogio').value = horas;
}
var tempo = setInterval(relogio1, 1000);