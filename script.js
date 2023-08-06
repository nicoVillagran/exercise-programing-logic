"user stric";
// --------------- Variables & DOM Elements.
const d = document;
let userString, msg;
msg = "este es el ejercicio: ";
// --------------- Functions.
const quitarAcentos = (c) => c.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const countCharacters = (c) => {
  let res;
  userString = c ? c : prompt("Enter your text!");
  if (!isNaN(userString)) res = "The data entered is not a string!";
  else res = userString.length;

  if (c) return res;
  else console.log(res);
};
const cutString = (c, n) => {
  let res;
  userString = c || prompt("Enter your text:");
  if (!isNaN(userString)) res = "The data entered is not a string!";
  else {
    n = n || prompt("Enter a number:");
    if (isNaN(n)) res = "The data entered is not a number!";
    else {
      res = "";
      for (let i = 0; i < n; i++) {
        res += userString[i];
      }
    }
  }

  if (c) return res;
  else console.log(res);
};
const splitString = (c, char) => {
  let parts,
    n = 0,
    item = "";
  userString = c || prompt("Enter your text:");
  if (!isNaN(userString)) parts = "The data entered is not a string!";
  else {
    char = char || prompt("Enter the char separator:");
    char = char || " ";
    parts = [];
    for (let i = 0; i < userString.length; i++) {
      if (userString[i] == char) {
        parts[n] = item;
        item = "";
        n++;
      } else item += userString[i];
      if (i >= userString.length - 1) parts[n] = item;
    }
  }
  if (c) return parts;
  else console.log(parts);
};
const repeatString = (c, repeat) => {
  let res = "";
  userString = c || prompt("Enter your text:");
  if (!isNaN(userString)) res = "The data entered is not a string!";
  else {
    repeat =
      repeat || prompt("How many times do you want to repeat your text?:");
    for (let i = 0; i < repeat; i++) {
      if (i + 1 == repeat) res += userString;
      else res += userString + ", ";
    }
  }

  if (c) return res;
  else console.log(res);
};
const reverseString = (c) => {
  let reverse = "",
    userString = c || prompt("Enter your text:");
  if (!userString) {
    console.error("You don't entered any text!");
    return;
  }
  for (let i = userString.length - 1; i >= 0; i--) reverse += userString[i];
  if (c) return reverse;
  else console.log(reverse);
};
const findString = (c, w) => {
  let n = 0,
    arrString,
    userString = c || prompt("Enter your text:");

  if (!userString) {
    console.error("you don't entered any text!");
    return;
  }
  arrString = userString.split(" ");
  w = w || prompt("Entered your word to find it in the text:");
  if (w) {
    for (const el of arrString) {
      if (w === el) n++;
    }
  } else {
    console.error("you don't entered any word!");
    return;
  }

  if (c) return n;
  else console.log(n);
};
const palindromo = (c) => {
  let userString = c || prompt("Enter your text!"),
    reverseString = "",
    response;

  userString = `${userString}`;
  for (let l = userString.length - 1; l >= 0; l--) {
    reverseString += userString[l];
  }

  userString = userString.toLowerCase();
  reverseString = reverseString.toLowerCase();

  response = userString === reverseString ? true : false;

  if (c) return response;
  else console.log(response);
};
const delPattern = (c, p) => {
  let userString = c || prompt("Enter your text!"),
    pattern = p || prompt("Enter the pattern to found:"),
    response = "",
    NF = false,
    removeString = "";

  if (!userString) {
    console.error("Any text was entered!");
    return;
  }
  for (let l = 0; l < userString.length; l++) {
    if (!pattern) {
      console.error("Any Pattern was entered!");
      return;
    }

    if (userString[l] === pattern[0]) {
      NF = true;
      for (const pl in pattern) {
        removeString += userString[l];
        if (pattern[pl] !== userString[l]) {
          response += removeString;
          console.warn("pattern is incompleted");
          return;
        }
        if (userString[l] !== pattern[pattern.length - 1]) l++;
        else console.info("Pattern was found!!");
      }
    } else {
      response += userString[l];
    }
  }

  if (!NF) console.error(`The pattern "${pattern}" wasn't found`);

  if (c) return response;
  else console.log(response);
};
const randomNum = (n1, n2) => {
  let firstN = n1 || parseInt(prompt("enter the number 1:")),
    lastN = n2 || parseInt(prompt("enter the number 2:")),
    response = 0,
    randNum;

  if (!(firstN && lastN)) {
    console.error("The num1 and num2 wasn't entered");
    return;
  }

  do {
    randNum = Math.floor(Math.random() * lastN);
  } while (!(randNum > firstN && randNum < lastN));

  response = randNum;

  if (n1 && n2) return response;
  else console.info(response);
};
const getFactory = (number) => {
  let n = number || parseInt(prompt("Enter a number: ")),
    response = 1;

  for (let i = n; i > 0; i--) {
    response = response * i;
  }

  return number ? response : console.log(response);
};
const isPrimeNumber = (number = undefined) => {
  let n = number == undefined ? parseFloat(prompt("Enter a number")) : number,
    response = 0,
    numD = 0,
    divisible = false;

  if (!n) return console.error("the number has not entered");

  if (typeof n !== "number")
    return console.error("the data entered is not a number");

  if (n <= 2)
    return console.error("the number cannot be 2, 1, 0 or a negative number");

  for (let op = 2; op < n; op++) {
    response = n % op;
    if (response === 0) {
      divisible = true;
      numD = op;
      break;
    }
  }
  response = !divisible
    ? "Yes, it's a prime number"
    : `No, It isn't a prime number, the number ${n} is divisible to ${numD}`;

  console.info(response);
};
const isPar = (number) => {
  let n = number === undefined ? prompt("Entered a number: ") : number,
    response = "",
    par = 0;

  if (!n)
    return console.warn(
      "no ingresaste ningun dato o el tipo de dato no es valido!"
    );
  if (typeof n !== "number") {
    if (!parseFloat(n)) return console.error("el tipo de dato no es un numero");
  }
  if (Math.sign(n) === -1)
    return console.error("el dato no puede ser un numero negativo");

  par = n % 2;

  response = par === 0 ? "el numero es par" : "el numero es impar";
  console.info(response);
};
const degreesConverter = (degrees, unit) => {
  const FORM_F = (n) => ((n - 32) * (5 / 9)).toFixed(2),
    FORM_C = (n) => (n * (9 / 5) + 32).toFixed(2);
  let dg = degrees === undefined ? prompt("Enter the degrees") : degrees,
    u =
      unit === undefined
        ? prompt("Choose an unit: 1. Celsius, 2. Fahrenheit")
        : unit,
    result = "";

  if (unit === undefined) {
    if (u !== "1" && u !== "2") return console.error("you didn't any option!!");
  }
  if (!dg && dg !== 0) return console.warn("you didn't enter any value");

  if (typeof dg !== "number") {
    if (!parseFloat(dg) && parseFloat(dg) !== 0) {
      console.error("The data entered isn't a number!");
      return false;
    }
    dg = parseFloat(dg);
  }

  if (u === "1" || u === "C") {
    result = `${dg} ºC is equal to ${FORM_C(dg)} ºF`;
  } else if (u === "2" || u === "F") {
    result = `${dg} ºF is equal to ${FORM_F(dg)} ºC`;
  } else {
    result = "no se pudo realizar la conversion";
  }

  console.info(result);
};
const binario = (number, base) => {
  let numCopy = 0,
    n = number === undefined ? prompt("Enter your number: ") : number,
    b = base === undefined ? prompt("Enter the base: ") : base;

  if (n === undefined || b === undefined)
    return console.warn("hubo un error, alguno de los args esta vacio");

  if (isNaN(n) || isNaN(b))
    return console.warn("alguno de los args no es un numero");
  else {
    n = parseFloat(n);
    b = parseFloat(b);
  }

  if (typeof n !== "number" || typeof b !== "number")
    return console.error("alguno de los args no es un numero");

  if (b !== 2 && b !== 10)
    return console.error("la base solo puede ser 2 o 10");

  numCopy = parseInt(n, b);
  console.log(`numero binario ${n} es igual a ${numCopy} de base 10`);
};
const discount = (mount, percentage) => {
  const FORM_P = (m, p) => (m * p) / 100;
  let m = mount === undefined ? prompt("Entered a number: ") : mount,
    p =
      percentage === undefined ? prompt("Enter the percentage: ") : percentage,
    response = "";

  if (!m || !p)
    return console.warn(
      "no ingresaste ningun dato o el tipo de dato no es valido!"
    );
  if (typeof m !== "number" || typeof p !== "number") {
    if (!parseFloat(m) || !parseFloat(p))
      return console.error("el tipo de dato no es un numero");
  }
  if (Math.sign(m) === -1 || Math.sign(p) === -1)
    return console.error("el dato no puede ser un numero negativo");

  response = `El precio despues del descuento de ${p}% es $${
    m - FORM_P(m, p)
  }.`;

  console.info(response);
};
const amountDays = (date = undefined) => {
  const currentYear = 2023;
  let d = date === undefined ? prompt("Entered your date: ") : date,
    dataWay = false,
    amount = 0;

  if (d === date) {
    dataWay = true;
    if (!d) {
      console.error("date does not exist!!");
      return;
    }
    if (typeof d !== "object") {
      console.error("data is not an object!!");
      return;
    }
  } else {
    if (isNaN(d)) {
      console.error("no me pasaste un numero!");
      return;
    } else {
      d = parseFloat(d);
    }
  }

  if (dataWay === true) {
    d = d.getFullYear();
  }
  amount = currentYear - d;
  console.log(`Pasaron ${amount} años desde ${d} hasta ${currentYear}`);
};

// ---------------- Listeners.
d.addEventListener("click", (e) => {
  let el = e.target;
  if (el.matches("#btn-countChar")) countCharacters();
  else if (el.matches("#btn-cutString")) cutString();
  else if (el.matches("#btn-splitString")) splitString();
  else if (el.matches("#btn-repeatString")) repeatString();
  else if (el.matches("#btn-reverseString")) reverseString();
  else if (el.matches("#btn-findString")) findString();
  else if (el.matches("#btn-palindromo")) palindromo();
  else if (el.matches("#btn-delPattern")) delPattern();
  else if (el.matches("#btn-randomNum")) randomNum();
  else if (el.matches("#btn-getFactory")) getFactory();
  else if (el.matches("#btn-isPrimeNumber")) isPrimeNumber();
  else if (el.matches("#btn-isPar")) isPar();
  else if (el.matches("#btn-degreesConverter")) degreesConverter();
  else if (el.matches("#btn-binario")) binario();
  else if (el.matches("#btn-discount")) discount();
  else if (el.matches("#btn-amountDays")) amountDays();
  else if (el.matches("#btn-binary")) binario();
});
// Code ...
// binario(100);
// binario({}, []);
// binario("90", 20);
// binario(200, 3);
// binario(100, 2);

/*
x 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
x 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
x 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
x 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
x 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
x 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
x 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
x 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
x 9) Programa una función que obtenga un numero aleatorio entre 501 y 600
x 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  
x 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120
x 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true 
x 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar 
x 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F 
----------------------------------------------------------------------------------------------------------------------------------------------------------------------



x 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 
x 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 

x 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) 
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero 
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero 

21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] 
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] 
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} 
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 

27) Programa una clase llamada Pelicula.
   La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
     - Todos los datos del objeto son obligatorios.
     - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
     - Valida que el título no rebase los 100 caracteres.
     - Valida que el director no rebase los 50 caracteres.
     - Valida que el año de estreno sea un número entero de 4 dígitos.
     - Valida que el país o paises sea introducidos en forma de arreglo.
     - Valida que los géneros sean introducidos en forma de arreglo.
     - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
     - Crea un método estático que devuelva los géneros aceptados*.
     - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
     - Crea un método que devuelva toda la ficha técnica de la película.
     - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

   * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
