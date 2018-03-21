//VARIABLES
var arregloImg = new Array(20);
var imgTags = document.getElementsByTagName('img');
var imagenes = ["img\1.png", "img\2.png", "img\3.png", "img\4.png", "img\5.png", "img\6.png", "img\7.png", "img\8.png"];
var posicionAleatoria;
var numMaximoRepetido = 2;

//FUNCIONES

/*
	Funcion para controlar la visibilidad de las imagenes
*/
function visibilidad(){
	if(document.getElementById("laima").style.visibility== ""){
		document.getElementById("laima").style.visibility="hidden"; 

	}else {
		document.getElementById("laima").style.visibility=""; 
	}
}


/*
	Funcion que obtine numeros aleatorios con el fin de obtener cualquier imagen del arreglo
*/
function numeroAleatorio(max, min) {
  var aleatorio = Math.floor(Math.random() * (max - min + 1) - min);
  return aleatorio;
}

/*
	Funcion que ordena las imagenes aleatorias obtenidas
*/
function rotarImagen() {
  for (var i = 0; i < imagenes.length; i++) {
    for(var j = 0; j < numMaximoRepetido; j++){
      posicionAleatoria = numeroAleatorio(imgTags.length - 1, 0);
      while(imgTags[posicionAleatoria].src != ""){
        posicionAleatoria = numeroAleatorio(imgTags.length - 1, 0);
      }
      imgTags[posicionAleatoria].src = imagenes[i];
    }
  }
}


//EVENTOS

window.onload = rotarImagen;