document.getElementById('Calcular').addEventListener('click', function(ev) {
    ev.preventDefault();

    const valuesOfForm = getValuesForm();
    const result = imcCalculate(valuesOfForm.altura, valuesOfForm.peso)

    createResult(result)
    clearForm(); 
    
});

function getValuesForm() {
    const formulario = document.getElementById('form');
    const {altura, peso} = formulario.elements;
    return {
        altura: altura.value,
        peso: peso.value
    };
}



function imcCalculate(altura, peso) {
    const alturaCalc = parseFloat(altura)
    const pesoCalc = parseFloat(peso)
    const imc = pesoCalc / (alturaCalc * alturaCalc) 
    const imcFormatado = imc.toFixed(2);

    return imcFormatado;
}

function createResult(result) {
    const imcResult = document.getElementById('imc')
    imcResult.innerText = `O IMC do neném é ${result}`



}

function clearForm() {
    const formulario = document.getElementById('form');
    const { altura, peso } = formulario.elements;

    altura.value = '';
    peso.value = '';
}
  
