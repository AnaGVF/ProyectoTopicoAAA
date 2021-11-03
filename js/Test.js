var calificacion = 0;

// Respuestas Correctas 

    // #1
    var correcto = document.createElement("div");
    correcto.classList.add("alert");
    correcto.classList.add("alert-success");
    correcto.style.width = "100%";
    correcto.style.marginTop = "20px";
    correcto.textContent = "¡Correcto!";

    // #2
    var correcto_2 = correcto.cloneNode(true);

    // #3
    var correcto_3 = correcto.cloneNode(true);

    // #4
    var correcto_4 = correcto.cloneNode(true);
    
    // #5
    var correcto_5 = correcto.cloneNode(true);

    // #6
    var correcto_6 = correcto.cloneNode(true);

// Respuestas Incorrectas 

    // #1
    var incorrecto = document.createElement("div");
    incorrecto.classList.add("alert");
    incorrecto.classList.add("alert-danger");
    incorrecto.style.width = "100%";
    incorrecto.style.marginTop = "20px";
    incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. Yokoi Kenji cree que la disciplina tiene un peso mayor que la inteligencia en las personas.";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
    incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que el éxito debe ser lento, ya que el secreto del éxito es trabajar y tener siempre una visión a largo plazo. El éxito fácil y rápido es falso.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
    incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. Una persona debe también enfocarse en la educación de su ser, no sólamente de conocimientos. Si una persona trabaja en su ser, se conoce mejor y logra tener un mejor desempeño tanto individual como social.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
    incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. La vida puede ser cruel ante aquellas personas que sólamente gastan su tiempo inútilmente. Depende de cada persona el invertir o el gastar sus horas de vida. Una vez se acaba un minuto de la vida, ese minuto jamás regresará. ¡Recuerda aprovechar tu tiempo al máximo!";
    
    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
    incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. Una persona apasionada hace más de lo que se le pide, llega temprano y siempre está en un constante aprendizaje. Según dijo Yokoi Kenji, un profesional sin pasión es un estorbo con conocimientos.";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
    incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. Si una persona no es feliz, no va a encontrar su propósito. La felicidad es una decisión tomada y un estado interno. No es una emoción.";

    // Función de Calificar 
    function submit() {
        // Pregunta #1
        if ($('#yokoi').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(correcto);
            document.getElementById("retroalimentacion").classList.add("w-100");
            calificacion++;
        } else if ($('#carlos').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(incorrecto);
            document.getElementById("retroalimentacion").classList.add("w-100");
        }

        // Pregunta #2
        if ($('#lento').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else if ($('#rapido').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta #3
        if ($('#si').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else if ($('#no').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta #4
        if ($('#cruel').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else if ($('#maravillosa').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta #5
        if ($('#apasionada').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else if ($('#malhumorada').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta #6
        if ($('#feliz').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else if ($('#genia').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(incorrecto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
        }

        var calificacionFinal = (calificacion*10)/6;

        
        document.getElementById("calificacion").textContent = calificacionFinal;

        if(calificacionFinal >= 6) {
            document.getElementById("calificacion").style.color = "green";
        } else {
            document.getElementById("calificacion").style.color = "red";
        }
        
    }