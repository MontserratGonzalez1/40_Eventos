 function(){ 
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btnagregar"); 

	// FUNCIONES

	var agregarTarea = function(){
		var tarea = tarea_Ingreso.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tarea_Ingreso.setAttribute("placeholder", "Agrega una tarea valida");
			tarea_Ingreso.className = "error";
			return false;
		}

		enlace.appendChild (contenido); // aquí se agrega el contenido al enlace
			enlace.setAttribute ("href", "#");  //se establece un atributo href
			nuevaTarea.appendChild (enlace);  //se agrega el enlace (a)  a la lista
			lista.appendChild (nuevaTarea);  //se agrega una nueva tarea a la list_Ingreso.value = ""; //se limpia el cuadro de texto automaticamente para agregar texto nuevamente
		

		tarea_Ingreso.value = "";

		/* for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}   con este evento se eliminan las tareas  */
	};

	 // aquí se tiene que validar que se escribió algo en la ventana para agregar la tarea 
	var validarTarea = function(){
		tarea_Ingreso.className = "";
		teareaInput.setAttribute("placeholder", "Agrega una tarea");
	};

		if(document.forms.length > 0) {
  		for(var i=0; i < document.forms[0].elements.length; i++) {
    		var campo = document.forms[0].elements[i];
    			if(campo.type != "hidden") {
      				campo.focus();
      				break;
    				}
  				}
		}


		function limita(maximoCaracteres) {
  			var elemento = document.getElementById("texto");
			  if(elemento.value.length >= maximoCaracteres ) {
			    return false;
			  }
			  else {
			    return true;
			  }
			}
}

	 // se eliminan las tareas seleccionadas o que ya fueron reaizadas
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};
		
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);  // con este evento se eliminan las tareas	
	}
	
	// EVENTOS

	btnNuevaTarea.addEventListener("click", agregarTarea); // Para agregar tareas 

	tarea_Ingreso.addEventListener("click", validarTarea); // Validar que haya texto en el cuado de tarea, de lo contrario se ´marcaría en rojo enviando error.

	
 }; 
  