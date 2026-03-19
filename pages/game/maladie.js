var images = [
	"../../assets/img/escargophone/morgan.png",
    "../../assets/img/escargophone/doflamingo.png",
    "../../assets/img/escargophone/saturne.png",
    "../../assets/img/escargophone/vegapunk.png",
    "../../assets/img/escargophone/akainu.png",
    "../../assets/img/escargophone/pauli.png",
    "../../assets/img/escargophone/katakuri.png",
    "../../assets/img/escargophone/icebarg.png",
    "../../assets/img/escargophone/bonclay.png",
    "../../assets/img/escargophone/viola.png",
    "../../assets/img/escargophone/hawkins.png",
    "../../assets/img/escargophone/tama.png",
    "../../assets/img/escargophone/tamago.png",
    "../../assets/img/escargophone/monet.png",
    "../../assets/img/escargophone/kuma.png",
    "../../assets/img/escargophone/kalifa.png",
    "../../assets/img/escargophone/garp.png",
    "../../assets/img/escargophone/kaya.png",
    "../../assets/img/escargophone/bigmum.png",
    "../../assets/img/escargophone/bege.png",
    "../../assets/img/escargophone/jinbei.png",
    "../../assets/img/escargophone/riku.png",
    "../../assets/img/escargophone/sengoku.png",
    "../../assets/img/escargophone/imu.png",
    "../../assets/img/escargophone/ginny.png",
    "../../assets/img/escargophone/issho.png",
    "../../assets/img/escargophone/sandersonia.png",
    "../../assets/img/escargophone/lucci.png",
    "../../assets/img/escargophone/kinemon.png",
	"../../assets/img/end.png",
]

var reponses = [
	"Morgan",
    "Doflamingo",
    "Saturne",
    "Vegapunk",
    "Akainu",
    "Pauli",
    "Katakuri",
    "Icebarg",
    "Bonclay",
    "Viola",
    "Hawkins",
    "Tama",
    "Tamago",
    "Monet",
    "Kuma",
    "Kalifa",
    "Garp",
    "Kaya",
    "Bigmum",
    "Bege",
    "Jinbei",
    "Riku",
    "Sengoku",
    "Imu",
    "Ginny",
    "Fujitora",
    "Sandersonia",
    "Lucci",
    "Kinemon",
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