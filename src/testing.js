// function checkScope() {
//     var i = 'function scope';
//     if (true) {
//       i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }

// function objectArray(arr) {
//   let newArray = [], newObj = {};

//   arr.forEach(el => {
//     for(let i = 0; i < (el['last_name']); i++) {
//         newObj['first_name'] = el.first_name;
//         newObj['last_name'] = el.last_name;
//         newArray.push(newObj)
//         newObj = {}
//       }
//     })
//     return newArray
// }



// console.log(objectArray([{first_name: "Daniel", last_name: "Smith"}, {first_name: "Michael", last_name: "Brown"}]))


// const objectArray = arr => arr.reduce((a, b) =>{
//   for(let i = 0; i <  blur.last_name; i++) {
//     arr.push({...b, last_name: last_name})
//   }
//   return a
// }, [])


// NOTE - const obj = {first_name: "Dom", last_name: "Townshend"}

// let {first_name: "Dom", last_name: "Townshend"} = obj

// const str = `({first_name: "Dom", last_name: last = "Townshend"} = {first_name: "Dom", last_name: "Townshend"}).toString()`

// console.log(first_name)

// write function that will revers a string by word

// console.log(reverseString("Hello World")) -> "World Hello"

// function reverseWord(str) {
//   return str.split(" ").reverse().join(" ")
// }

// console.log(reverseWord("Hello World"))

// create a function that switches the key value of an object

// objfunc({"name": "Dom"}) -> {"Dom": "name"}

function objfunc(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key]
  ))
  // let newObj = {}
  // for(let key in obj) {
  //   newObj[obj[key]] = key
  // }
  // return newObj
}

console.log(objfunc({"name": "Dom"}))