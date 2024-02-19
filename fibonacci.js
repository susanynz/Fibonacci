function calcularFibonacci() {
  //obtencion de datos que ingresa el usuario para el calculo de la serie Fibonacci
  let numeroInput = document.getElementById("numeroInput").value;
  //resultado a arrojar en pantalla 
  let resultadoDiv = document.getElementById("resultado");

  let numero = parseInt(numeroInput);

  if (!validarEntrada(numero)) {
      resultadoDiv.innerHTML = "Por favor, ingrese un número entero positivo válido.";
      return;
  }
//funcion para calcular la serie
  let serie = fibonacciSerie(numero);
  resultadoDiv.innerHTML = "Serie de Fibonacci: " + serie.join(', ');
}

function validarEntrada(dato) {
  return !isNaN(dato) && Number.isInteger(dato) && dato > 0;
}

function fibonacciSerie(n) {
  let serie = [0, 1];

  for (let i = 2; i < n; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
  }

  return serie;
}
