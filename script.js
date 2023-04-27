// function output(a, b) {
//     let c = (a + b) * 5;    
//     result = c > 20 ? c : c * 10;
//     return result;
// }

// console.log((output(2, 3)));



// let graphic = "";

// function gameGen(a, b) {
//     for(let i = 0; i < a; i++) {
//         graphic += new Array(b).fill("-").join(" ");
//         graphic += "\n";
//     }
//     console.log(graphic)
//     return graphic
// }

// console.log(gameGen(3, 3));




// // Only change code below this line
// function countdown(n){  
//     if(n > 5) {
//       return [];
//     } else {
//     const countArr = countdown(n + 1)
//     countArr.push(n)
//     return countArr
//   }
// console.log(countdown(5))
//   // Only change code above this line




function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      return [];
    } else {
      const rangeArr = rangeOfNumbers(startNum + 1, endNum);
      rangeArr.push(startNum);
      return rangeArr;
    }
  }
  
  //console.log(rangeOfNumbers(11, 21)); 
  
  let myArr = []
  function loop(x) {
    for(let i = 0; i < x; i++) {
        myArr.push(i)
    }
    return myArr
  }

  console.log(loop(5))