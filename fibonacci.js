function calcularFibonacci() {
  //obtencion de datos que ingresa el usuario para el calculo de la serie Fibonacci
  let numeroInput = document.getElementById("numeroInput").value;
  //resultado a arrojar en pantalla 
  let resultadoDiv = document.getElementById("resultado");

  //toma el numero dado y lo transforma en un integral
  let numero = parseInt(numeroInput);

  //validar los numeros dados
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
  //inicia la serie Fibonacci con los dos primeros números
  let serie = [0, 1];
//el bucle for comienza desde  desde i = 2 (ya que ya se tienen 0 y 1) hasta i < n. 
//En cada iteración, se calcula el siguiente número de Fibonacci sumando los dos números anteriores y se agrega a la serie. 
//Al final, la función devuelve la serie completa.
  for (let i = 2; i < n; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
  }

  return serie;
}
