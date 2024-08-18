alert("Bienvenido a la calculadora Harris Bennedict, te pediremos algunos datos para calcular tu gasto energético basal.")



let continuar = true;

while (continuar) {
    let sexo = prompt("Ingresa tu sexo: \n -masculino \n -femenino").toLowerCase();
    let peso = parseFloat(prompt("Ingresa tu peso en kg:"));
    let altura = parseFloat(prompt("Ingresa tu altura en cm:"));
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let objetivo = prompt("Cual es tu objetivo: \n -mantener \n -subir \n -bajar").toLowerCase();
    let bmr;
    let objetivoCalorias;

    function bmrMale() {
        bmr = 88.362 + (13.397 * peso) + (4.779 * altura) - (5.667 * edad);
    }

    function bmrFemale() {
        bmr = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * edad);
    }

    if (sexo === "masculino") {
        bmrMale();
        alert("tu gasto energético basal es " + bmr + " kcal")
        console.log("tu gasto energético basal es " + bmr + " kcal")

    } else if (sexo === "femenino") {
        bmrFemale();
        alert("tu gasto energético basal es " + bmr + " kcal")
        console.log("tu gasto energético basal es " + bmr + " kcal")

    } else {
        alert("Sexo no válido, por favor ingrese masculino o femenino.");
    
    }
    
    
    switch (objetivo){

        case "mantener":
            objetivoCalorias = bmr;
            alert("tus calorias para mantener son "+ objetivoCalorias + " kcal");
            console.log("tus calorias para mantener son "+ objetivoCalorias + " kcal")
            break

        case "subir":
            objetivoCalorias = bmr + 500;
            alert("tus calorias para subir son "+ objetivoCalorias + " kcal");
            console.log("tus calorias para subir son "+ objetivoCalorias + " kcal")
            break

        case "bajar":
            objetivoCalorias = bmr - 500;
            alert("tus calorias para bajar son "+ objetivoCalorias + " kcal");
            console.log("tus calorias para bajar son "+ objetivoCalorias + " kcal")
            break

        default:
            console.log("por favor, selecciona una de las opciones.")
            break

    }

    let confirmacion = prompt("desea hacer otro calculo? \n -si \n -no").toLowerCase();

    if (confirmacion == "no"){
        continuar = false;
        console.log("Gracias por usar nuestra calculadora. Hasta luego!")
    }

}


