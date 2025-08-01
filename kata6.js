// FizzBuzz
function fizzBuzz(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) 
    {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) 
    {
      answer.push("Fizz");
    } else if (i % 5 === 0) 
    {
      answer.push("Buzz");
    } else 
    {
      answer.push(i.toString());
    }
  }
  return answer;
}

// console.log(fizzBuzz(3));
// // retourne ["1", "2", "Fizz"]
// console.log(fizzBuzz(5));
// // retourne ["1", "2", "Fizz", "4", "Buzz"]
// console.log(fizzBuzz(15));
// retourne 
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]


// Two Sum
// Tu as une liste de nombres appelée `number` (par exemple : `[2, 7, 11, 15]`) et un nombre cible appelé `target` (par exemple : `9`).
//Écris une function `twoSum()` qui permet de retrouver deux nombres dans la liste qui, une fois additionnés, donnent exactement le total `target`

function twoSum(number, target) {
  const map = new Map();
  // On parcourt chaque nombre dans la liste
  for (let i = 0; i < number.length; i++) 
  {
    // On calcule le nombre restant nécessaire pour atteindre le target
    const nombreRestant = target - number[i];
    if (map.has(nombreRestant)) 
    // Si le nombre restant est dans la map, on retourne les indices
    {
      return [map.get(nombreRestant), i];
    }
    map.set(number[i], i);
  }
  return [];
}

// Exemple 1
// const numbers = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(numbers, target));
// retourne [0, 1]
// Explication : 2 (à l’indice 0) + 7 (à l’indice 1) = 9

// Exemple 2
const numbers = [3, 2, 4]
const target = 6
console.log(twoSum(numbers, target));
// // retourne [1, 2]

// // Exemple 3
// const numbers = [3, 3]
// const target = 6
// console.log(twoSum(numbers, target));
// // retourne [0, 1]