
var global;

function Pasajero (Nombre, apellido, dniBuscar, asiento){
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.asiento = asiento;
	this.isOccupied = false;

	this.reservar = function(){
		isOccupied = true;
	}

	}
	this.mostrar = function(){
		var rpta = document.getElementById("resultado");
		var r ="";
		var nam = "<strong>Nombre: </strong>" + this.nombre + "<br>";
    	var las = "<strong>Apellido: </strong>" + this.apellido + "<br>";
    	var i = "<strong>DNI: </strong>" + this.dni + "<br>";
    	var as = "<strong>Asiento: </strong>"+ this.asiento;
    	r += "<div class='lista' align='center'>"+ nam+ las + i+ as+"</div>";
    	rpta.innerHTML += res; 
	}
}


function Bus(){
	this.pasajeros = [];
	this.numeroAsientoOcupado = 0;

	this.add = function(pasajero){
		this.pasajeros.push(pasajero);
	}
	this.reservar = function(){
		var stringHTML="";
		this.pasajeros[this.numeroAsientoOcupado];
		/*for(var i in this.pasajeros){
			var pasajero = this.pasajeros[i];
			if(pasajero.isOccupied){
				stringHTML += "<"
			}
		}*/


	}
	this.cancelar = function(){
		df
	}

	this.listar = function(){
		var res = [];
		for(var i in this.pasajeros){
			res += this.mostrar(i);
		}
		return res;
	}

	this.buscar = function(){
		var dniBuscar = document.getElementById("dniBuscar").value;
		dniBuscar = parseInt(dniBuscar);
		var encontrado;
		for(var i in this.pasajeros){
			if(dniBuscar == this.pasajeros[i].dni && this.pasajeros[i] != undefined){
				encontrado = this.pasajeros[i];				
				document.getElementById("nombre").value = encontrado.nombre;
				document.getElementById("apellido").value = encontrado.apellido;
				document.getElementById("dni").value = encontrado.dni;
				return true;
			}
		}
	}

	this.limpiar = function(){
		document.getElementById("nombre").value = "";
		document.getElementById("apellido").value = "";
		document.getElementById("dni").value = "";
		document.getElementById("dniBuscar").value ="";
		document.getElementById("resultado").value ="";
		document.getElementById("mostrar").innerHTML = "<strong>"+"Seleccione asiento"+ "</strong>";
	}
}





//*******************************************POR CORREGIR*******************
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
var numero = new nAsiento();

function redirect(event){
    var asiento = event.target.textContent;
    numero.retornaAsiento(asiento);

    var seat = parseInt(asiento);
    var mostrar = document.getElementById("mostrar");
    mostrar.innerHTML = "Seleccionó el asiento " + "<strong>"+seat+"</strong>";
    //(event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
    (event.target).style.backgroundColor = '#7FB3D5';

    for(var i in pasajeros){
    	var reservacion = pasajeros[i];
    	if(reservacion.asiento == seat){
    		document.getElementById("nombre").value =  reservacion.nombre;
			document.getElementById("apellido").value = reservacion.apellido;
			document.getElementById("dni").value = reservacion.dni;
			document.getElementById("resultado").value ="";
    	}
    }
    global = event.target;
    return seat;
    //reinicia();
    // crear funcion que traiga caja
}


function nAsiento(){
    this.retornaAsiento= function (asiento){
        this.asiento= asiento;
    }
}


//**********FUNCIONES DE BOTONES********
function obtenerListaPasajeros() {
    return pasajeros;
}

function reinicia(){
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
	document.getElementById("dniBuscar").value ="";
	document.getElementById("resultado").value ="";
	document.getElementById("mostrar").innerHTML = "<strong>"+"Seleccione asiento"+ "</strong>";
}

function reservar(name, apellido, dni, asiento){	
	var name = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var asiento = numero.asiento;

	function Pasajero(nombre, apellido, dni, asiento){
	    this.nombre = nombre;
	    this.apellido = apellido;
	    this.dni = dni;
	    this.asiento = asiento;
	}

	var nuevoP = new Pasajero(name, apellido, dni, asiento);
	pasajeros.push(nuevoP);
	console.log(pasajeros);
	alert("Pasajero registrado"+ "\n"+"Nombre: " + nuevoP.nombre + "\n"+"Apellido: " + nuevoP.apellido + "\n"+ "DNI: "+ nuevoP.dni + "\n"+ "Asiento: "+ nuevoP.asiento);
	reinicia();
	//return true;
}

var searchButton = document.getElementById("btnBuscar");
searchButton.onclick = function (){
	var dniBuscar = document.getElementById("dniBuscar").value;
	dniBuscar = parseInt(dniBuscar);
	var encontrado;
	for(var i in pasajeros){
		if(dniBuscar == pasajeros[i].dni && pasajeros[i] != undefined){
			encontrado = pasajeros[i];				
			document.getElementById("nombre").value = encontrado.nombre;
			document.getElementById("apellido").value = encontrado.apellido;
			document.getElementById("dni").value = encontrado.dni;
			return true;
		}
	}
	console.log(encontrado);
	reinicia();
};

function mostrar(pasaj) {
    reinicia();
    var rpta = document.getElementById("resultado");
    var res="";

    var nam = "<strong>Nombre: </strong>" + pasaj.nombre + "<br>";
    var las = "<strong>Apellido: </strong>" + pasaj.apellido + "<br>";
    var i = "<strong>DNI: </strong>" + pasaj.dni + "<br>";
    var as = "<strong>Asiento: </strong>"+ pasaj.asiento;
    res += "<div class='lista' align='center'>"+ nam+ las + i+ as+"</div>";
    rpta.innerHTML += res;
};

function listar(){
	var res = [];
	for(var i of pasajeros){
		res += mostrar(i);
	}
	return res;
}

var cancelButton = document.getElementById("btnCancelar");
cancelButton.onclick = function (){
	var nombre = document.getElementById("nombre").value;

	for(var i in pasajeros){
		if(pasajeros[i].nombre == nombre){
			console.log(pasajeros[i]);
			pasajeros.splice(i,1);
			reinicia();
			global.style.backgroundColor = "transparent";
			//return true;
		}		
	}
};
