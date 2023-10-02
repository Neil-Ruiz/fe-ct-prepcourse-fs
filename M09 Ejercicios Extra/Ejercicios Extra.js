/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var solution =[];
    for (propiedad in objeto) {
        var newArray =[];
        newArray.push (propiedad);
        newArray.push (objeto[propiedad]);
        solution.push (newArray);
    }
    return (solution);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringToArray = string.split("");
   stringToArray = stringToArray.sort();
   var letter = stringToArray[0]; //ok
   var counter = 0; //ok
   var solution = {};
   for (var i = 0; i <= stringToArray.length; i++) {
     if (stringToArray[i] === letter) {
       counter++;
     } else {
       solution[stringToArray[i - 1]] = counter;
       letter = stringToArray[i];
       counter = 1;
     }
   }
   return solution;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringToArray = string.split("");
   var stringUpper = string.toUpperCase();
   var arrayUpper = stringUpper.split("");
   var arrayStart = [];
   var arrayEnd = [];
   var newString;
   for (i = 0; i < stringToArray.length; i++) {
     if (stringToArray[i] === arrayUpper[i]) {
       arrayStart.push(stringToArray[i]);
     } else {
       arrayEnd.push(stringToArray[i]);
     }
   }
   newString = arrayStart.join("") + arrayEnd.join("");
   return ("Solución: ", newString);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrayWords = frase.split(" ");
   var arrayLetters = [];
   var invertedLetters = [];
   var letters;
   var invertedWords = [];
   var accumulatedWords = [];
   for (var i = 0; i < arrayWords.length; i++) {
     arrayLetters = arrayWords[i].split("");
     for (var j = 0; j < arrayLetters.length; j++) {
       invertedLetters.unshift(arrayLetters[j]);
       letters = j + 1;
     }
     if (letters === arrayLetters.length) {
       invertedWords = invertedLetters.join("");
       invertedLetters = [];
     }
     accumulatedWords.push(invertedWords);
   }
   var solution = accumulatedWords.join(" ");
   return (solution);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = String(numero);
   var numArray = [];
   var counter = 0;
   if (num.length < 2) {
     return("No es capicua");
   } else {
     numArray = num.split("");
   }
   for (var i = 0; i < numArray.length / 2; i++) {
     if (numArray[i] != numArray[num.length - (i + 1)]) {
       return ("No es capicua");
     } else {
       counter += 2;
     }
   }
   if (counter >= num.length) {
     return("Es capicua");
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arrayString = string.split ('');
    var solutionArray = [];
    for (i = 0 ; i<arrayString.length ; i++) {
        if(arrayString[i] === "a" || arrayString[i] === "b" || arrayString[i] === "c") {
            continue;
        } else [
            solutionArray.push (arrayString[i])
        ]
    }
    var stringSolution = solutionArray.join('');
    return (stringSolution);
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  var originalArray = arrayOfStrings;
  var lengths = [];
  var solutionArray = [];
  var deletePosition;
  var detectedElement;
  for (var i = 0; i < originalArray.length; i++) {
    lengths.push(originalArray[i].length);
  }
  lengths.sort();
  while (lengths.length > 0) {
    detectedElement = originalArray.find(function (i) {
      return i.length === lengths[0];
    });
    solutionArray.push(detectedElement);
    deletePosition = originalArray.findIndex(function (i) {
      return i.length === lengths[0];
    });
    originalArray.splice(deletePosition, 1);
    lengths.shift();
  }
  return solutionArray;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var set1 = array1;
  var set2 = array2;
  var intersection = [];
  for (var i = 0; i < set1.length; i++) {
    if (set2.includes(set1[i])) {
      intersection.push(set1[i]);
    }
  }
  return(intersection);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
