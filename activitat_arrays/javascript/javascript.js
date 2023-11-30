//Exercici 1
function arrayColors() {
    //declarar i inicialitzar
    let colors = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
    
    //variables que vamos a usar para printear
    let totsMenors = true;
    let menors = "";
    let ultimsDos="";
    let arrayTurquesa="";
    let senseVerd="";

    //1- si tots els colors són menors que 'marró' (colores < marró) A < B
    let ordenarMarro = colors;
    ordenarMarro.push("marró");
    ordenarMarro.sort(); //ordena alfabeticament
    if (ordenarMarro[ordenarMarro.length-1] != "marró") {
        // el ultimo debe ser marrón para que se cumpla colores < marró
        totsMenors = false;
    }

    //2- Colors menors que marró
    let posicioMarro = ordenarMarro.findIndex(menorsString);
    for(let i=0; i<posicioMarro; i++) {
        menors+= ordenarMarro[i] + " ";
    }

    //3- Darrers 2 colors
    let copia = ordenarMarro;
    for(let i=0; i<2;i++) {
        ultimsDos+= copia.pop() + " ";
    }

    //4- Afegir turquesa


    //5- Eliminar verd

    
    //mostrar por pagina web
    let div = document.createElement("div");
    let content = `<p>
                    Tots els colors són menors que 'marró': ${totsMenors}<br>
                    Colors menors que 'marró': ${menors}<br>
                    Ultims 2 colors: ${ultimsDos}<br>
                    Després d'afegir 'turquesa': ${arrayTurquesa}<br>
                    Després d'eliminar 'verd': ${senseVerd}<br>
                    </p>`;
    div.innerHTML = content;
    document.body.appendChild(div);
}

//funció per a findIndex. Retorna posició de "marró"
function menorsString(element) {
    return element == "marró";
}