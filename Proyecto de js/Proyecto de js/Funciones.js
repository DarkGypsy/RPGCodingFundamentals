  //Juego de los dados
export function juegoDado(player , enemy) {
    var victorias = 0;
    var derrotas = 0;
    var juego = true;
    var pregunta
    var dados
    function numeroAzar(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
        do {
            pregunta = prompt("\n¿Cual es el numero que saldra?");
            dados = numeroAzar(1 , 6)
            console.log("\n" + enemy.nombre + " lanza el dado y sale " + dados)
        if (parseInt(pregunta) == dados) {
            victorias ++; 
        } else {
            derrotas ++
        } 
        console.log(player.name + ": "+ victorias + "\n" + enemy.nombre + ": " + derrotas );
        
            if (victorias === 3) {
                console.log("\n¡Ganas!")
                juego = false
            } else if (derrotas === 3) {
                console.log("\n¡Pierdes!")
                juego = false
            } else {
                
            }
        } while (juego == true);  
    }

//Combate

export function combate (player , enemy) {
    var dadoheroe 
    var dadoenemy 
    var dadoatk
    function numeroAzar(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    do {
        dadoheroe = numeroAzar(player.accion[0] , player.accion[1]);
        dadoenemy = numeroAzar(enemy.accion[0] , enemy.accion[1]);
        console.log(player.name + " lanza el dado y sale " + dadoheroe);
        console.log(enemy.nombre + " lanza el dado y sale " + dadoenemy);
        alert("");
        if (dadoheroe > dadoenemy) {
          console.log("%c" + player.name + " se prepara para atacar...", "color: green;");
          dadoatk = numeroAzar(player.atk[0] , player.atk[1]);
          console.log("%cHas hecho: " + dadoatk + " de daño", "color: green;") ;
          enemy.hp = enemy.hp - dadoatk; 
          alert(enemy.nombre + " HP: " + enemy.hp);

        }else if (dadoheroe < dadoenemy) {
            console.log("%c" + enemy.nombre + " se prepara para atacar..." , "color: red;");
            dadoatk = numeroAzar(enemy.atk[0] , enemy.atk[1]);
            console.log("%c" + enemy.nombre + " te ha hecho: " + dadoatk + " de daño" , "color: red;")
            player.hp = player.hp - dadoatk;
            alert(player.name + " HP: " + player.hp);

        }

        if (player.hp <= 0) {
            player.muerto = true;
            console.log(player.name + " ha caido en combate...");
        }

        if (enemy.hp <= 0) {
            enemy.muerto = true;
            console.log(player.name + " gana el combate");

            player.exp = player.exp + enemy.exp;
            player.oro = player.oro + enemy.oro
            alert("Recibes exp: " + enemy.exp + " oro: " + enemy.oro);
            if (player.exp >= 100){
                alert(player.name + " ha subido de nivel");
                player.lvl = player.lvl + 1 ;
                player.accion[0] = player.accion[0] + 1;
                player.accion[1] = player.accion[1] + 1
                player.atk[0] =                 player.atk[0] + 1;
                player.atk[1] =                 player.atk[1] + 1;
                
                player.hp =                 player.hp + 10;

                player.exp = 0;


            };

        };
        
    } while (player.muerto === false && enemy.muerto === false);
    enemy.hp = 15;
    enemy.muerto = false
}


