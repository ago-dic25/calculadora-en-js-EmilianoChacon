function operar(op) {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");
    const historial = document.getElementById("historial");

    const num1 = num1Input.value.trim();
    const num2 = num2Input.value.trim();

    resultado.textContent = "";
    error.textContent = "";

    if (num1 === "" || num2 === "") {
        error.textContent = "Por favor, ingresa ambos números.";
        return;
    }

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res;

    if (isNaN(a) || isNaN(b)) {
        error.textContent = "Por favor, ingresa números válidos.";
        return;
    }


    switch (op) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/':
            if (b === 0) {
                error.textContent = "Error: División entre 0 no permitida.";
                return;
            }
            res = a / b;
            break;
        default:
            error.textContent = "Operación no válida.";
            return;
    }

    // Usando template literals (backticks) para mostrar el resultado y el historial
    resultado.textContent = `${res}`; 
    
    const li = document.createElement("li");
    li.textContent = `${a} ${op} ${b} = ${res}`;
    
    historial.appendChild(li);
}

function limpiarHistorial() {
    document.getElementById("historial").innerHTML = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("error").textContent = "";
}