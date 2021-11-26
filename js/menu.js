
window.onload = function () {
	var ico = document.getElementById('icon');
	ico.addEventListener("click",cambia);
}

window.onresize = function () {
	var otroAncho = window.innerWidth;
	
	var menuImg = "https://rutilaxd.github.io/rutilaxd.seguridadrk.io//images/menu.svg";
	var ico = document.getElementById('icon');
	var header = document.getElementsByClassName('header')[0];
	var menu = document.getElementsByClassName('menu')[0];

	if(otroAncho<850){
		console.log("asd");
		ico.addEventListener("click",cambia);
	}else{
		header.style = "";
		menu.style = "";
		ico.src = menuImg;		
	}
}

function cambia() {
	var ico = document.getElementById('icon');
	var header = document.getElementsByClassName('header')[0];
	var menu = document.getElementsByClassName('menu')[0];

	var actual = ico.src;
	var menuImg = "https://rutilaxd.github.io/rutilaxd.seguridadrk.io/images/menu.svg";
	var closeImg = "https://rutilaxd.github.io/rutilaxd.seguridadrk.io/images/close.png";

	if (actual === menuImg) {
		header.style.paddingBottom = "1em";
		menu.style.display = "block";
		ico.src = closeImg;
	}else{
		header.style.paddingBottom = "2em";
		menu.style.display = "none";
		ico.src = menuImg;
	}
}
