function mostrar_icono(){
	var elemento;
	elemento = document.getElementById('icono'); elemento.removeClassName("oculto"); elemento.addClassName("visto"); elemento.addClassName("mostrar-icono");
}

function ocultar_icono(){
	var elemento;
	elemento = document.getElementById('icono'); elemento.removeClassName("visto"); elemento.removeClassName("mostrar-icono"); elemento.addClassName("oculto");
}

function habilitar_editar(campo){
	var elemento;
	elemento = document.getElementById('div-mostrar'); elemento.removeClassName("visto"); elemento.addClassName("oculto");
	elemento = document.getElementById('div-editar'); elemento.removeClassName("oculto"); elemento.addClassName("visto");
	campo.focus();
}

function deshabilitar_editar(){
	var elemento;
	elemento = document.getElementById('div-mostrar'); elemento.removeClassName("oculto"); elemento.addClassName("visto");
	elemento = document.getElementById('div-editar'); elemento.removeClassName("visto"); elemento.addClassName("oculto");
}