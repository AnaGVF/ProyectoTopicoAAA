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
incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. El liderazgo no solo se trata de dar ordenes, se trata de saber guiar y dirigir a las personas";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. Es una estrategia de negocio que, como su nombre lo indica, pone al cliente como centro de la misma.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. El networking se trata de conocer personas y contactos que te ayudarán para crecer laboral, profesional y personalmente.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. Tener iniciativa propia es una cuestión de ponerse en acción, tener fuerza de voluntad, confianza en uno mismo y constancia.";
    
    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. Planear y probar nuevas estrategias siempre es arriesgado, por lo que es importante tener claros los objetivos y las metas que se quieren alcanzar";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. Ser observador significa ver las cosas desde diferentes perspectivas, esto te ayudara a contemplar problemáticas desde diferentes puntos y te ayudara a encontrar nuevos métodos y soluciones.";

    // Función de Calificar 
    function submit() {
        // Pregunta #1
        if ($('#Liderazgo').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(correcto);
            document.getElementById("retroalimentacion").classList.add("w-100");
            calificacion++;
        } else if ($('#Networking').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(incorrecto);
            document.getElementById("retroalimentacion").classList.add("w-100");
        }

        // Pregunta #2
        if ($('#Cliente').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else if ($('#Negocio').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta #3
        if ($('#Networking3').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else if ($('#Negociacion').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta #4
        if ($('#Iniciativa').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else if ($('#Compromiso').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta #5
        if ($('#Falso').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else if ($('#Verdadero').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta #6
        if ($('#Observador').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else if ($('#Innovador').is(':checked')) {
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