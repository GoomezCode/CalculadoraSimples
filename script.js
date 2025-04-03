function buttonConfirm(){
    let ResultadoConta = document.getElementById("ResultadoConta")

   let Num1 = parseFloat(document.getElementById("Num1").value)
   let Num2 = parseFloat(document.getElementById("Num2").value)

    let ItemConta = document.getElementById("ItemConta").value
    let Resultado

    switch (ItemConta){
        case "soma":
            Resultado = Num1 + Num2
        break;
        case "subtracao":
            Resultado = Num1 - Num2
        break;
        case "divisao":
            Resultado = Num1 / Num2
        break;
        case "multiplicacao":
            Resultado = Num1 * Num2
        break;
        
        default:
            Resultado = "Erro"
    }

    ResultadoConta.textContent = Resultado
}

