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
    let ordenarMarro = [...colors];
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
    let copia = [...ordenarMarro];
    for(let i=0; i<2;i++) {
        ultimsDos+= copia.pop() + " ";
    }

    //4- Afegir turquesa
    arrayTurquesa = [...colors];
    arrayTurquesa.push("turquesa");

    //5- Eliminar verd
    senseVerd = [...arrayTurquesa];
    senseVerd = senseVerd.filter(elemento => elemento !== "verd");

    //mostrar por pagina web
    let div = document.createElement("div");
    let content = `<p>
                    <b>Tots els colors són menors que 'marró':</b> ${totsMenors}<br>
                    <b>Colors menors que 'marró':</b> ${menors}<br>
                    <b>Ultims 2 colors:</b> ${ultimsDos}<br>
                    <b>Després d'afegir 'turquesa':</b> ${arrayTurquesa.toString()}<br>
                    <b>Després d'eliminar 'verd':</b> ${senseVerd}<br>
                    </p>`;
    div.innerHTML = content;
    document.body.appendChild(div);
}

//funció per a findIndex. Retorna posició de "marró"
function menorsString(element) {
    return element == "marró";
}

//Exercici 2
function funcionsArray() {
    let div = document.getElementById("funciones");
    let txt = "";

    //returns an indexed element from an array
    let att = ["Banana", "Kiwi", "Orange", "Coco", "Apple"];
    txt += `<p><b>at() :</b> arreglo = [${att.toString()}] -> arreglo.at(2) -> ${att.at(2)} </p>`;
    
    //Joins arrays and returns an array with the joined arrays
    let arr1 = ["Manzana", "Pera", "Sandia"];
    let arr2 = ["Patata", "Tomate"];
    let arr3 = ["Agua"];
    let concatenar = arr1.concat(arr2, arr3);
    txt += `<p><b>concat() :</b> arr1 = [${arr1.toString()}]; arr2 = [${arr2.toString()}]; arr3 = [${arr3.toString()}]; -> todoJunto = arr1.concat(arr2, arr3) -> ${concatenar} </p>`;
    
    //Returns the function that created the Array object's prototype
    let constructor = ["Banana", "Orange", "Apple", "Mango"];
    let text = constructor.constructor;
    txt += `<p><b>constructor :</b> arreglo = [${constructor.toString()}] -> text = arreglo.constructor -> ${text}`;
    
    //Copies array elements within the array, to and from specified positions copyWithin(target,start,end) -> end es opcional, si no se proporciona, se copiarán hasta el final del array.
    let copiar = ["Blue", "Green", "Yellow"];
    txt += `<p><b>copyWithin() :</b> arreglo = [${copiar.toString()}] -> arreglo.copyWithin(2,0) -> ${copiar.copyWithin(2,0)}`;
    
    //Returns a key/value pair Array Iteration Object
    let entries = ["Maria", "Thomas", "Paula", "Marcos"];
    let arrayEntries = entries.entries();
    txt += `<p><b>entries() :</b> arreglo = [${entries.toString()}] -> resultado = arreglo.entries() -> ${Array.from(arrayEntries).toString()}`;

let entrie="";
    //Checks if every element in an array pass a test
    let cada = ["verd", "vermell", "groc", "blau"];
    txt += `<p><b>every():</b> arreglo = [${cada.toString()}] -> resultado = arrelgo.entries(elemento => elemento != "verde") -> ${cada.every(elemento => elemento != "verde")}`;

    //Fill the elements in an array with a static value
    let rellena = "";
    txt += `<p><b>fill() :</b> arreglo = [${entrie.toString()}]`;
    
    //Creates a new array with every element in an array that pass a test
    let filtra = "";
    txt += `<p><b>filter() :</b> arreglo = [${entrie.toString()}]`;

    //Returns the value of the first element in an array that pass a test
    txt += `<p><b>find() :</b> arreglo = [${entrie.toString()}]`;

    //Returns the index of the first element in an array that pass a test
    txt += `<p><b>findIndex() :</b> arreglo = [${entrie.toString()}]`;

    //Concatenates sub-array elements
    txt += `<p><b>flat() :</b> arreglo = [${entrie.toString()}]`;

    //Maps all array elements and creates a new flat array
    let plano = "";
    txt += `<p><b>flatMap() :</b> arreglo = [${entrie.toString()}]`;

    //Calls a function for each array element
    txt += `<p><b>forEach() :</b> arreglo = [${entrie.toString()}]`;

    //Creates an array from an object
    txt += `<p><b>from() :</b> arreglo = [${entrie.toString()}]`;

    //Check if an array contains the specified element
    txt += `<p><b>includes() :</b> arreglo = [${entrie.toString()}]`;

    //Search the array for an element and returns its position
    txt += `<p><b>indexOf() :</b> arreglo = [${entrie.toString()}]`;

    //Checks whether an object is an array
    txt += `<p><b>isArray() :</b> arreglo = [${entrie.toString()}]`;

    //Joins all elements of an array into a string
    let juntar = "";
    txt += `<p><b>join() :</b> arreglo = [${entrie.toString()}]`;

    //Returns a Array Iteration Object, containing the keys of the original array
    txt += `<p><b>keys():</b> arreglo = [${entrie.toString()}]`;
    //Search the array for an element, starting at the end, and returns its position
    txt += `<p><b>lastIndexOf() :</b> arreglo = [${entrie.toString()}]`;

    //Sets or returns the number of elements in an array
    txt += `<p><b>length :</b> arreglo = [${entrie.toString()}]`;
    
    //Creates a new array with the result of calling a function for each array element
    txt += `<p><b>map() :</b> arreglo = [${entrie.toString()}]`;
    
    //Removes the last element of an array, and returns that element
    txt += `<p><b>pop() :</b> arreglo = [${entrie.toString()}]`;
    
    //Allows you to add properties and methods to an Array object
    txt += `<p><b>prototype :</b> arreglo = [${entrie.toString()}]`;
    
    //Adds new elements to the end of an array, and returns the new length
    txt += `<p><b>push() :</b> arreglo = [${entrie.toString()}]`;
    
    //Reduce the values of an array to a single value (going left-to-right)
    txt += `<p><b>reduce() :</b> arreglo = [${entrie.toString()}]`;
    
    //Reduce the values of an array to a single value (going right-to-left)
    txt += `<p><b>reduceRight() :</b> arreglo = [${entrie.toString()}]`;
    
    //Reverses the order of the elements in an array
    txt += `<p><b>reverse() :</b> arreglo = [${entrie.toString()}]`;
    
    //Removes the first element of an array, and returns that element
    txt += `<p><b>shift() :</b> arreglo = [${entrie.toString()}]`;
    
    //Selects a part of an array, and returns the new array
    txt += `<p><b>slice() :</b> arreglo = [${entrie.toString()}]`;
    
    //Checks if any of the elements in an array pass a test
    txt += `<p><b>some() :</b> arreglo = [${entrie.toString()}]`;
    
    //Sorts the elements of an array
    txt += `<p><b>sort() :</b> arreglo = [${entrie.toString()}]`;
    
    //Adds/Removes elements from an array
    txt += `<p><b>splice() :</b> arreglo = [${entrie.toString()}]`;
    
    //Converts an array to a string, and returns the result
    txt += `<p><b>toString() :</b> arreglo = [${entrie.toString()}]`;
    
    //Adds new elements to the beginning of an array, and returns the new length
    txt += `<p><b>unshift() :</b> arreglo = [${entrie.toString()}]`;
    
    //Returns the primitive value of an array
    txt += `<p><b>valueOf() :</b> arreglo = [${entrie.toString()}]`;

    div.innerHTML = txt;
}