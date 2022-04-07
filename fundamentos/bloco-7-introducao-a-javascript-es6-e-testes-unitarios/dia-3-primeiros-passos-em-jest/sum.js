function sum(a,b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a +b;
}  console.log(sum(4,5));

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
console.log(myRemove([1, 2, 3, 4], "3"));

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
console.log(myFizzBuzz(15));
console.log(myFizzBuzz(21));
console.log(myFizzBuzz(5));
console.log(myFizzBuzz(2));
console.log(myFizzBuzz('3'));

// function encode(string) {
//   let trocaLetra = string.split("")
//   for (let i in trocaLetra){
//     if (trocaLetra[i] == "a") {
//       trocaLetra[i] = 1; 
//     } else if (trocaLetra[i] == "e") {
//       trocaLetra[i] = 2; 
//     } else if (trocaLetra[i] == "i") {
//       trocaLetra[i] = 3; 
//     } else if (trocaLetra[i] == "o") {
//       trocaLetra[i] = 4; 
//     } else if (trocaLetra[i] == "u") {
//       trocaLetra[i] = 5; 
//     }
//   } return trocaLetra.join("");
// } 
// function decode(string) {
//   let trocaLetra = string.split("")
//   for (let i in trocaLetra){
//     if (trocaLetra[i] == 1) {
//       trocaLetra[i] = "a"; 
//     } else if (trocaLetra[i] == 2) {
//       trocaLetra[i] = "e"; 
//     } else if (trocaLetra[i] == 3) {
//       trocaLetra[i] = "i"; 
//     } else if (trocaLetra[i] == 4) {
//       trocaLetra[i] = "o"; 
//     } else if (trocaLetra[i] == 5) {
//       trocaLetra[i] = "u"; 
//     }
//   } return trocaLetra.join("");
// }
// console.log(encode("hi there!"));

// encodeDecode.js
function mapString(objectMap, string) {
  const splitString = string.split('');
  const mappedArray = [];
  
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
return mappedArray.join('');
}

function encode(string) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

function decode(string) {
  const map = {
   1: 'a',
   2: 'e',
   3: 'i',
   4: 'o',
   5: 'u',
  };
  return mapString(map, string);
}

const functions = { encode, decode }; 

// techList.js

const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];
  
  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
};

// hydrate.js

// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'

const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
};

module.exports = {sum, functions, techList, hydrate}; 