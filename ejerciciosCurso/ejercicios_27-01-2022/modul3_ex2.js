
function obtenerResultado(primerNumero, segundoNumero) {
    primerNumero = document.getElementById("primerNumeroUsuario").value
    segundoNumero = document.getElementById("segundoNumeroUsuario").value

    let resultadoSuma = Number(primerNumero) + Number(segundoNumero);
    let resultadoResta = primerNumero - segundoNumero;
    let resultadoDivision = primerNumero / segundoNumero;
    let resultadoMultiplicacion = primerNumero * segundoNumero;

    console.log(`Suma:${resultadoSuma} Resta:${resultadoResta} División:${resultadoDivision} Multiplicación:${resultadoMultiplicacion}`)

    document.getElementById("resultadoSuma").innerText = `El resultado de la suma de ${primerNumero} + ${segundoNumero} es: ${resultadoSuma}`
    document.getElementById("resultadoResta").innerText = `El resultado de la resta de ${primerNumero} - ${segundoNumero} es: ${resultadoResta}`
    document.getElementById("resultadoDivision").innerText = `El resultado de la división de ${primerNumero} / ${segundoNumero}  es: ${resultadoDivision}`
    document.getElementById("resultadoMultiplicacion").innerText = `El resultado de la multiplicación de ${primerNumero} * ${segundoNumero}  es: ${resultadoMultiplicacion}`
};