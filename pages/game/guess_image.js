var images = [
	"../../assets/img/actor/q0.png",
	"../../assets/img/actor/r0.png",
	"../../assets/img/actor/q1.png",
	"../../assets/img/actor/r1.png",
	"../../assets/img/actor/q2.png",
	"../../assets/img/actor/r2.png",
	"../../assets/img/actor/q3.png",
	"../../assets/img/actor/r3.png",
	"../../assets/img/actor/q4.png",
	"../../assets/img/actor/r4.png",
	"../../assets/img/actor/q5.png",
	"../../assets/img/actor/r5.png",
	"../../assets/img/actor/q6.png",
	"../../assets/img/actor/r6.png",
	"../../assets/img/actor/q7.png",
	"../../assets/img/actor/r7.png",
	"../../assets/img/actor/q8.png",
	"../../assets/img/actor/r8.png",
	"../../assets/img/actor/q9.png",
	"../../assets/img/actor/r9.png",
	"../../assets/img/actor/q10.png",
	"../../assets/img/actor/r10.png",
	"../../assets/img/end.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
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
	}

/* 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	} */