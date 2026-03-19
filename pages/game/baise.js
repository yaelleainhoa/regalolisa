var images = [
	"../../assets/img/baise/alvidarlong.png",
	"../../assets/img/baise/sabotama.png",
	"../../assets/img/baise/belmeroronoazoro.png",
	"../../assets/img/baise/bartolomeocty.png",
	"../../assets/img/baise/bluenojiko.png",
	"../../assets/img/baise/otohimerry.png",
	"../../assets/img/baise/nikatlas.png",
	"../../assets/img/baise/bellamissallsunday.png",
	"../../assets/img/baise/monerfetarivivi.png",
	"../../assets/img/baise/pandamansherry.png",
	"../../assets/img/end.png",
]

var reponses = [
    "Alvidarlong",
    "Sabotama",
    "Belmeroronoa Zoro",
    "Bartolomeocty",
    "Bluenojiko",
    "Otohimerry",
    "Nikatlas",
    "Bellamiss All Sunday",
    "Monefertari Vivi",
    "Pandamansherry",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length-1)
		{
			id++;
			raz();
		}
		document.getElementById("solution").classList.add("btn") ;
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.style = "bold" ;
		document.getElementById("solution").classList.remove("btn") ;
	}