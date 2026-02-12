
//for - in 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { //in for-in loop it will give the index of the array by default
    // console.log(key); //It will print the index of the array because for in loop is used to iterate over the keys of an object and in case of array keys are the index of the array.

    // console.log(programming[key]);
}

//Map
// const map = new Map()  // Basically we can't iterate over an Map
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //It will give nothing because we cannot iterate over a map using for in loop.
// }

