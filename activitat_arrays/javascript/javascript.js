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
    let div = document.getElementById("funciones");
    let content = `<p>
                    <b>Tots els colors són menors que 'marró':</b> ${totsMenors}<br>
                    <b>Colors menors que 'marró':</b> ${menors}<br>
                    <b>Ultims 2 colors:</b> ${ultimsDos}<br>
                    <b>Després d'afegir 'turquesa':</b> ${arrayTurquesa.toString()}<br>
                    <b>Després d'eliminar 'verd':</b> ${senseVerd}<br>
                    </p>`;
    div.innerHTML = content;
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

    //Checks if every element in an array pass a test
    let cada = ["verd", "vermell", "groc", "blau"];
    txt += `<p><b>every():</b> arreglo = [${cada.toString()}] -> resultado = arrelgo.entries(elemento => elemento != "verde") -> ${cada.every(elemento => elemento != "verde")}`;

    //Fill the elements in an array with a static value
    let rellena = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>fill() :</b> arreglo = [${rellena.toString()}] -> arreglo.fill("kiwi") -> ${rellena.fill("kiwi").toString()}`;
    
    //Creates a new array with every element in an array that pass a test
    let filtra = [32, 12, 33, 16, 40];
    txt += `<p><b>filter() :</b> arreglo = [${filtra.toString()}] -> resultado = arreglo.filter(elemento => elemento >= 18) -> ${filtra.filter(elemento => elemento >= 18)}`;

    //Returns the value of the first element in an array that pass a test
    let busca = [32, 12, 33, 16, 40];
    txt += `<p><b>find() :</b> arreglo = [${busca.toString()}] -> arreglo.find(elemento => elemento >= 18) -> ${busca.find(elemento => elemento >= 18)}`;

    //Returns the index of the first element in an array that pass a test
    let indice = [32, 12, 33, 16, 40];
    txt += `<p><b>findIndex() :</b> arreglo = [${indice.toString()}] -> arreglo.findIndex(elemento => elemento >= 18) -> ${indice.findIndex(elemento => elemento >= 18)}`;

    //Concatenates sub-array elements
    let concat = [[1,2],[3,4],[5,6]];
    txt += `<p><b>flat() :</b> arreglo = [${concat.toString()}] -> newArr = arreglo.flat() -> ${concat.flat()}`;

    //Maps all array elements and creates a new flat array
    let plano = [1, 2, 3, 4, 5,6];
    txt += `<p><b>flatMap() :</b> arreglo = [${plano.toString()}] -> newArr = arreglo.flatMap((elem) => elem*2) -> newArr = ${plano.flatMap((elem) => elem*2)}`;

    //Calls a function for each array element
    let foreach = ["apple", "orange", "cherry"];
    let texto = "<br>";
    foreach.forEach(miFuncion)
    txt += `<p><b>forEach() :</b> arreglo = [${foreach.toString()}] -> let txt = ""; arreglo.forEach(myFunction); function myFunction(item, index) { txt += index + ": " + item;} -> txt = ${texto} `;
    
    function miFuncion(item, index) {
        texto += `${index} : ${item}<br>`;
    }

    //Creates an array from an object
    let obj = "ABCDEFG";
    txt += `<p><b>from() :</b> arreglo = [${obj.toString()}] -> newArr = Array.from(txt) -> ${Array.from(obj)}`;

    //Check if an array contains the specified element
    let arrIncludes = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>includes() :</b> arreglo = [${arrIncludes.toString()}] -> arreglo.includes("Mango") -> ${arrIncludes.includes("Mango")}`;

    //Search the array for an element and returns its position
    let arrIndexOf = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>indexOf() :</b> arreglo = [${arrIndexOf.toString()}] -> index = arreglo.indexOf("Apple") -> index = ${arrIndexOf.indexOf("Apple")}`;

    //Checks whether an object is an array
    let checkear = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>isArray() :</b> arreglo = [${checkear.toString()}] -> esArray = Array.isArray(arreglo) -> esArray = ${Array.isArray(checkear)}`;

    //Joins all elements of an array into a string
    let juntar = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>join() :</b> arreglo = [${juntar.toString()}] -> txt = arreglo.join(" and ") -> txt = ${juntar.join(" and ")}`;

    //Returns a Array Iteration Object, containing the keys of the original array
    let iterar = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>keys():</b> arreglo = [${iterar.toString()}] -> key = Array.from(fruits.keys());
     -> key = ${Array.from(iterar.keys())}`;

    //Search the array for an element, starting at the end, and returns its position
    let buscaIndex = ["Apple", "Orange", "Apple", "Mango", "Orange"];
    txt += `<p><b>lastIndexOf() :</b> arreglo = [${buscaIndex.toString()}] -> arreglo.lastIndexOf("Orange") -> ${buscaIndex.lastIndexOf("Orange")}`;

    //Sets or returns the number of elements in an array
    let largo = ["Maria", "Thomas", "Paula", "Marcos"];
    txt += `<p><b>length :</b> arreglo = [${largo.toString()}] -> arreglo.length -> ${largo.length}`;
    
    //Creates a new array with the result of calling a function for each array element
    let mapp = [65, 44, 12, 4];
    txt += `<p><b>map() :</b> arreglo = [${mapp.toString()}] -> newArr = arreglo.map(funcionMultiplicaPorDiez) -> ${mapp.map(myFunction)}`;

    function myFunction(num) {
        return num * 10;
    }
    
    //Removes the last element of an array, and returns that element
    let popea = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>pop() :</b> arreglo = [${popea.toString()}] -> arreglo.pop() -> ${popea.pop()}`;
    
    //Allows you to add properties and methods to an Array object
    let frutas = ["Banana", "Orange", "Apple", "Mango"];
    Array.prototype.myUcase = function() {
        for (let i = 0; i < this.length; i++) {
          this[i] = this[i].toUpperCase();
        }
    };
    let nuevo = [...frutas];
    nuevo.myUcase();
    txt += `<p><b>prototype :</b> arreglo = [${frutas.toString()}] -> Array.prototype.miUpperCase = function() { /.../ }; arreglo.miUpperCase(); arreglo == -> ${nuevo}`;
    
    //Adds new elements to the end of an array, and returns the new length
    let pushear = ["Banana", "Orange", "Apple", "Mango"];
    let resulta = [...pushear];
    resulta.push("Coco");
    txt += `<p><b>push() :</b> arreglo = [${pushear.toString()}] -> arreglo.push("Coco") -> arreglo => ${resulta.toString()}`;
    
    //Reduce the values of an array to a single value (going left-to-right)
    let reducir = [1, 2, 3, 4, 5];
    const sum = reducir.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    txt += `<p><b>reduce() :</b> arreglo = [${reducir.toString()}] -> resultado = arreglo.reduce((accumulator, currentValue) => accumulator + currentValue, 0) -> resultado == ${sum}`;
    
    //Reduce the values of an array to a single value (going right-to-left)
    let words = ["¡", "Hola", "mundo", "!"];
    let saludo = words.reduceRight((accumulator, currentValue) => accumulator + " " + currentValue);
    txt += `<p><b>reduceRight() :</b> arreglo = [${words.toString()}] -> resultado = arreglo.reduceRight((accumulator, currentValue) => accumulator + " " + currentValue); -> resultado == ${saludo}`;
    
    //Reverses the order of the elements in an array
    let reverso = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>reverse() :</b> arreglo = [${reverso.toString()}] -> arreglo.reverse() -> ${reverso.reverse()}`;
    
    //Removes the first element of an array, and returns that element
    let eliminaPrimer = ["Banana", "Orange", "Apple", "Mango"];
    let res = [...eliminaPrimer]; 
    res = eliminaPrimer.shift();
    txt += `<p><b>shift() :</b> arreglo = [${eliminaPrimer.toString()}] -> arreglo.shift() => ${eliminaPrimer.shift()} PERO SI HACEMOS: result = arreglo.shift(); result == ${res}`;
    
    //Selects a part of an array, and returns the new array .slice(star,end)
    let parte = ["Banana", "Orange", "Lemon", "Apple", "Mango"];    
    txt += `<p><b>slice() :</b> arreglo = [${parte.toString()}] -> arreglo.slice(1,3) -> ${parte.slice(1,3)}`;
    
    //Checks if any of the elements in an array pass a test returns TRUE or FALSE
    let numeros = [1, 2, 3, 4, 5];
    let esPar = numeros.some(num => num % 2 === 0);
    txt += `<p><b>some() :</b> arreglo = [${numeros.toString()}] -> evenNum = arreglo.some(num => num % 2 === 0) -> evenNum == ${esPar}`;
    
    //Sorts the elements of an array, default sorts by alfabet
    let frutitas = ["Banana", "Orange", "Apple", "Mango"];
    txt += `<p><b>sort() :</b> arreglo = [${frutitas.toString()}] -> arreglo.sort() -> ${frutitas.sort()}`;
    
    //Adds/Removes elements from an array, overrites the original array
    let colores = ["red", "green", "blue", "yellow"];
    let despues = [...colores];
    despues.splice(2,0,"purple");
    txt += `<p><b>splice() :</b> arreglo = [${colores.toString()}] -> arreglo.splice(2,0,"purple") -> arreglo => ${despues}`;
    
    //Converts an array to a string, and returns the result
    let salu =  [1, 2, 3, 4, 5];
    txt += `<p><b>toString() :</b> arreglo = [${salu.toString()}] -> arreglo.toString() -> ${salu.toString()}`;
    
    //Adds new elements to the beginning of an array, and returns the new length
    let fruts = ["Banana", "Orange", "Apple", "Mango"];
    let copi = [...fruts];
    copi.unshift("Lemon", "Pineapple");
    txt += `<p><b>unshift() :</b> arreglo = [${fruts.toString()}] -> arreglo.unshift("Lemon", "Pineapple") -> ${copi}`;
    
    //Returns the primitive value of an array
    let fru = ["Banana", "Orange", "Apple", "Mango"];
    let nu = fru.valueOf();
    txt += `<p><b>valueOf() :</b> arreglo = [${fru.toString()}] -> newArr = arreglo.valueOf() -> newArr => [${nu}]`;

    div.innerHTML = txt;
}