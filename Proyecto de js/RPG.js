console.log("%c\nSolo otro RPG de texto\n(demo) \n", "color: blue; text-size: large;");

alert("Para empezar pulsa: ");

console.log("\nSir. Hector: ¡Saludos! Mi estimado aventurero");

var nombre = prompt("¿Podrías decirme tu nombre?");
const stats = {
	name: nombre ,
	accion : [1 , 6] ,
	atk : [1 , 3] ,
	def : 2 ,
	hp : 10 ,
	lvl: 1 ,
	exp: 1 ,
	muerto : false ,
	oro : 0,
};
var contexto = "";
var caminos = "";
var desicion = false;
var desicion2= false;
var dificultad = false;
var mensaje
const inventario = [];


import { enemigo } from "./Bestiario.js";

import { juegoDado , combate} from "./Funciones.js";

if (nombre == "DarkGypsy") {
	stats.atk[0] = stats.atk[0]+ 1;
	stats.atk[1] = stats.atk[1]+ 2;
	stats.accion[0] = stats.accion[0] + 1;
};

console.log("Sir. Hector: No me refería a ti sino al sujeto detrás del teclado... Da igual. Un gusto en conocerte " + nombre + "." + " Te diré que no será una aventura facil... sin una interfaz grafica tendras que experimentar con una serie de comandos a tu disposicion." + "\nLamentablemente no podré estar contigo ni con el sujeto que está detrás del teclado para guiarlos, será algo que tendrán que hacer solos... En fin mucha suerte " + nombre + " y Sir. Teclado");

console.log(nombre + ": " + "Veo dos caminos, uno a la derecha y uno a la izquierda, seguro el camino de la derecha es el mas facil, por experiencia se que por la izquierda las cosas serán dificiles");

 
do {
	caminos = prompt("¿Que camino debería de tomar?");
 
	switch (caminos) {
		case "izquierda":

		console.log("Caminas por lo que parece un sendero muy bonito, mientras te adentras mas y mas en el sendero comienzas a ver sequía, muerte y hambruna por todos lados... en la distancia vez a alguien saludandote...");

		dificultad = true;

		 do { 
	mensaje = prompt(nombre + ": " + "¿Debería de saludarlo?");

		switch (mensaje) {
		case "si":
		
		console.log("Mientras saludabas amablemente al sujeto bajaste la guardia y un bandido te asesinó por la espalda para robarte todo...");
		
		console.log("\n%c GAME OVER", "color: red;")
		
		alert("\nProbablemente tu das la hora en la calle...");
		
		desicion = true;
		
		break;
		case "no":
		
		console.log(nombre + " Se da cuenta que un bandido intentaba atacarlo por la espalda");
		
		alert(nombre + ": " + "¡Preparate para el combate!");
		
		desicion = true;
		 combate(stats , enemigo.bandido );

		 if (stats.muerto == true) {
			console.log("\n%c GAME OVER", "color: red;")
		
			alert("\nDeberías ir por el camino derecho, es el camino mas facil");
			
			break;
		 }
		 alert("Recoges la armadura del bandido");
		 stats.accion[1] = stats.accion[1] + 1;
		 stats.accion[0] = stats.accion[0] + 1;

		console.log("Cuando volteas el sujeto que te saludaba ya no estaba, decides recorrer lo que parece un pueblo destrozado por la delincuencia");


		alert(nombre + ": " + "Parece que acá no queda nada que hacer...");

		alert("Te sientas a descansar");
		stats.hp = stats.hp + 10;

		console.log("A lo lejos puedes ver como se acercan unos caballeros registrando el pueblo, cuando te das cuenta hay un que te está mirando y grita: ");

		alert("¡Encontré un bandido!");
		
		combate(stats , enemigo.caballero);
		if (stats.muerto == true) {
			console.log("\n%c GAME OVER", "color: red;")
		
			alert("\nHasta los grandes heroes se quiebran en el camino de la desolación...");
			
			break;
		 }

		 alert("¡Otro caballero te ataca!");
		 
		 combate(stats , enemigo.caballero);

		 if (stats.muerto == true) {
			console.log("\n%c GAME OVER", "color: red;")
		
			alert("\nHasta los grandes heroes se quiebran en el camino de la desolación...");
			
			break;
		 }

		 console.log("¿?: Jamas pensé que terminarían las cosas de esta manera...");

		 alert("Escuchas una voz muy familiar acercandose y el sonido de una espada desenvainandose...");

		 console.log("\nSir. Hector: No se como has logrado vencer a tantas personas sin usar una espada... Pero no puedo perdonar el que acabaras con tantos compañeros... Como soy un orgulloso caballero te consederé una pelea lo mas igualada posible.");

		 alert("Sir Hector te ha dado una espada")

		stats.atk[0] = stats.atk[0]+ 1;
		stats.atk[1] = stats.atk[1]+ 3;

		combate(stats , enemigo.hector);

		if (stats.muerto == true) {
			console.log("\n%c GAME OVER", "color: red;")
		
			alert("\nTan cerca y tan lejos del final...");
			
			break;
		 }
		 alert("Gracias por jugar esta demo, espero que haya sido de tu agrado")
		break;
		default:
			
		console.log(nombre + ": " + "Por favor dime una respuesta valida");	
		}
		
	}while(desicion == false);
		break;
		case "derecha":
		
		contexto = console.log("Caminas por un sendero muy tranquilo, ves animales del bosque jugando, arboles frutales y un riachuelo...");
		
		dificultad = true;
		do {

			caminos = prompt(nombre + ": " + "¿Debería de ir al riachuelo? En el riacuelo podrás encontrar el tutorial");

			switch (caminos) {
				case "si":
					
				desicion = true;

				console.log("Mientras te acercas al riachuelo ves a un anciano durmiendo");

					do {

						mensaje = prompt(nombre + ": " + "¿Que debería de hacer?");

						switch (mensaje) {
							case "robar":
								
							contexto = prompt(nombre + ": " + "¿Estas seguro que deberiamos de robar a un anciano?");

								switch (contexto) {
									case "si":
										
									desicion2 = true

									console.log("Comienzas a registrar al anciano... cuando de pronto ¡se despierta y te apuñala!");

									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\n¿Que clase de ser perverso y perturbado eres?");
									
									break;
								
									default:
										console.log("Mejor pensemoslo dos veces...");
										break;
								}
								break;
						
							case "despertarlo":
								desicion2 = true;

								console.log("Anciano: Mmm... Que horrible muchacho. ¿Por que despiertas a un pobre anciano?");

								console.log("Probablemente no pudiste resistirte al ver a este maestro de armas... Te enseñaré las cosas basicas de este mundo...¡PREPARATE MUCHACHO!");

								alert(nombre + ": No tiene que gritarme señor (Debes adivinar el numero del dado que saldrá)");

								juegoDado(stats , enemigo.anciano);

								console.log("Anciano: Así funcionan los combates acá, los contrincantes lanzan un dado y el que tenga el numero mayor atacará ¿Que te parece si te enseño en un combate de verdad?");

								console.log(nombre + ": No lo se anciano, se puede lastimar..." );

								alert("Anciano: ¡PREPARATEEE!");
								
								alert(nombre + ": No entiendo porque a este viejito le gusta gritar...");

								combate(stats , enemigo.anciano);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nJeJeJe te mató un viejito...");
										break
									};

								console.log("\nAnciano: Hace mucho que no peleaba, he decidido regalarte una espada para que puedas hacer mas daño\n");

								stats.atk[0] = stats.atk[0]+ 1;

								stats.atk[1] = stats.atk[1]+ 3;

								alert(nombre + " recibe una espada y aumenta su rango de daño");

								console.log("\nAnciano: Ahora te llevaré conmigo al castillo\n");

								console.log("Caminas con el anciado cuando ves que 2 bandidos aparecen.\n");
								
								alert(nombre + ": Si son hombres vengan de 1 en 1");

								combate(stats , enemigo.bandido);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nNo tuviste tanta suerte...");
									break
								};

								alert(nombre + " Comienza a sentirse cansado\n")

								combate(stats , enemigo.bandido);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nNo es buena idea pelear contra 2");
									break
								};

								console.log("\nDescansas tras las peleas mientras el anciado vigila.\n");

								stats.hp = stats.hp + 5;

								alert("\nVes que 2 bandidos mas se acercan");

								combate(stats, enemigo.bandido);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nMejor suerte la proxima");
									break
								};

								alert("\nParece que esto no tiene fin...")

								combate(stats, enemigo.bandido);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nNo es buena idea pelear contra 2");
									break
								};
								alert("Recoges la armadura del bandido");
		 						stats.accion[1] = stats.accion[1] + 1;
		 						stats.accion[0] = stats.accion[0] + 1;

								 console.log("\nCuando por fin comienzas a ver las paredes del castillo un caballero te confunde con un enemigo por tu vestimenta");

								 alert(nombre + ": Cometes un grave error...");

								 combate(stats , enemigo.caballero);

								 if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nNo te rindas casi lo logras...");
									break
								};

								 console.log("Tras vencer al caballero ves que vienen otros corriendo en tu dirección y uno se detiene para luchar contigo mientras los otros huyen\n");

								combate(stats , enemigo.caballero);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\n¡Vamos un poco mas!");
									break
								};

								console.log("\nCuando te das cuenta un caballero te derriba y sigue corriendo mientras grita que serás carnada")

								 alert("Te levantas y te das cuenta que un ogro te está mirando...\n¡Preparate!");

								 combate(stats , enemigo.ogro);

								 if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nEstuviste muy cerca");
									break
								};

								console.log("Sir Hector: Saludos estimados amigos, yo seré su jefe final en esta demo");

								alert("Sir. Hector: ¡En guardia!")

								combate(stats , enemigo.hector);

								if (stats.muerto == true) {
									console.log("\n%c GAME OVER", "color: red;")
		
									alert("\nSir Hector: Vamos intentalo otra vez");
									break
								};

								alert("Gracias por jugar esta demo, espero que haya sido de tu agrado. Ya puedes pre ordenar el juego en Steam")

								break
							default:

								console.log(nombre + ": " + "No entiendo como " + mensaje + " Podria funcionar en este momento...");

								break;
						}
					} while (desicion2 == false);
					

					break;
				case "no":
					
					desicion = true;

					alert("Te has saltado el turorial...");
					
					console.log("Cuando decides tomar otro camino ves a un anciano que está a punto de ser atacado por un bandio...");
					
					alert(nombre + ": Lo siento pero no puedo dejarte esta desicion a ti. " + nombre + " ataca al bandido...");

					combate(stats , enemigo.bandido);

					if (stats.muerto == true) {
						console.log("\n%c GAME OVER", "color: red;")
					
						alert("\nIntenta cumpliendo con el tutorial");
						
						break;
					 }
					 alert("Recoges la armadura del bandido");
					 stats.accion[1] = stats.accion[1] + 1;
					 stats.accion[0] = stats.accion[0] + 1;

					 console.log("Anciano: Muchas gracias muchacho, lo unico que tengo es esta espada que te servirá para pelear mejor.")

					 alert("El anciano te ha dado una espada")

					 stats.atk[0] = stats.atk[0]+ 1;
					 stats.atk[1] = stats.atk[1]+ 3;

					 console.log("Descansa, luego te ayudaré a entrenar y por ultimo te llevaré ante el Rey");

					 alert("Te sientas a descansar");
					 stats.hp = stats.hp + 10;

					 alert("Te despiertas y ves al anciano preparandose para golpearte con el baston")

					 combate(stats , enemigo.anciano);

					 console.log("\nAnciano: Que muchacho tan lleno de energia, vamos camino al castillo.");
					 
					 console.log("\nEvidentemente era una excusa del anciano para que lo protegieras durante todo el camino...\n");

					 alert("");

					 console.log("Cuando vas llegando al castillo ves varios caballeros corriendo...\n Uno de ellos te tropieza y cuando levantas la mirada");

					 alert("Un ogro viene hacia a ti ¡Preparate!");

					 combate(stats , enemigo.ogro);

					 if (stats.muerto == true) {
						console.log("\n%c GAME OVER", "color: red;")
					
						alert("\nTan cerca y tan lejos del final...");
						
						break;
					 }
					 alert("Gracias por jugar esta demo, espero que haya sido de tu agrado, ahora puedes pre comprarlo en Steam")

				break;
				default:

				console.log(nombre + ": " + "Por favor dime si o no.");

					break;
			}
		} while (desicion == false);
		break
		default:

			console.log(nombre + ": " + "Por favor dame una dirección.");
			
			break;
	}
	

} while (dificultad == false);