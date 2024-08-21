alert("Bienvenido a la calculadora Harris Bennedict, te pediremos algunos datos para calcular tu gasto energético basal.");


let continuar = true;

while (continuar) {
    
    let sexo 
    
    sexoCorrecto = true
    
    while (sexoCorrecto) {
        sexo = prompt("Ingresa tu sexo: \n -masculino \n -femenino").toLowerCase();
        if (sexo === "masculino" || sexo === "femenino") {
            sexoCorrecto = false 
        } else {
            alert("Sexo no válido. Por favor ingrese 'masculino' o 'femenino'.");
        }
    }
    
    let peso = parseFloat(prompt("Ingresa tu peso en kg:"))
    let altura = parseInt(prompt("Ingresa tu altura en cm:"))
    let edad = parseInt(prompt("Ingresa tu edad:"))
    
    function bmr(sexo, peso, altura, edad) {
        let bmrValue;
        if (sexo === "masculino") {
            bmrValue = 88.362 + (13.397 * peso) + (4.779 * altura) - (5.667 * edad);
            
        } else if (sexo === "femenino") {
            bmrValue = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
            
        } else {
            alert("Sexo no válido. Por favor ingrese 'masculino' o 'femenino'.");
            
        }
        
        return bmrValue;
    }

    let resultadoBmr = bmr(sexo, peso, altura, edad)
    alert("tus calorias de mantenimiento son " + resultadoBmr + "kcal")
    console.log("tus calorias de mantenimiento son " + resultadoBmr + "kcal")

    let objetivo = prompt("Cual es tu objetivo:\n -mantener \n -subir \n -bajar")

    let objetivoCalorias

    function calcularObjetivo () {
        
        switch (objetivo){
    
            case "mantener":
                objetivoCalorias = resultadoBmr;
                alert("tus calorias para mantener son "+ objetivoCalorias + " kcal");
                console.log("tus calorias para mantener son "+ objetivoCalorias + " kcal")
                break
    
            case "subir":
                objetivoCalorias = resultadoBmr + 500;
                alert("tus calorias para subir son "+ objetivoCalorias + " kcal");
                console.log("tus calorias para subir son "+ objetivoCalorias + " kcal")
                break
    
            case "bajar":
                objetivoCalorias = resultadoBmr - 500;
                alert("tus calorias para bajar son "+ objetivoCalorias + " kcal");
                console.log("tus calorias para bajar son "+ objetivoCalorias + " kcal")
                break
    
            default:
                alert("por favor, selecciona una de las opciones.")
                console.log("por favor, selecciona una de las opciones.")
                break
    
        }
    }

    calcularObjetivo()


    const confirmacion = prompt("desea hacer otro calculo? \n -si \n -no").toLowerCase();

    function despedida (){
        if (confirmacion == "no") {
            continuar = false
            alert("Gracias por usar nuestra calculadora. Hasta luego!")
            console.log("Gracias por usar nuestra calculadora. Hasta luego!")
        } else if(confirmacion == "si"){
            continuar = true
        } else {
            alert("por favor ingresa una de las opciones.")
        }
    }

    despedida();
}



