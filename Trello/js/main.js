window.addEventListener("load", function() {
	var notaUno = document.getElementById("inicial");
	var notaDos = document.getElementById("nota");
	var boton = document.getElementById("boton");
	var fondo = document.getElementById("fondo");
	

	notaUno.addEventListener("click", function(){
		mostrarInput();

		notaUno.style.display = "none";

    });

	boton.addEventListener("click", function(e) {
		e.preventDefault();
		agregarTitulo(notaDos, this);
		fondo.style.display = "none";
		agregarDiv();
	});

	function mostrarInput(){
		fondo.style.display ="block";
	}

	function agregarTitulo(notaDos, notaUno){
		var div = document.createElement("div");
		var btn = document.createElement("button");

		div.classList.add("tituloList");
		btn.classList.add("agregarTar");


		div.innerHTML = notaDos.value;
		btn.textContent = "Añadir una tarjeta...";

		var insertar = notaUno.parentElement.parentElement;
		insertar.insertBefore(btn, insertar.childNodes[0]);
		insertar.insertBefore(div, insertar.childNodes[0]);
		notaDos.value="";
	}

	function agregarDiv(){
		var newNota = document.createElement("div");
		contenedor.appendChild(newNota);
		newNota.classList.add("newNota");

		newNota.insertBefore(notaUno, newNota.childNodes[0]);
		newNota.insertBefore(fondo, newNota.childNodes[1]);

		notaUno.classList.add("inicial");
		notaUno.style.display = "block";

		
	}
});

