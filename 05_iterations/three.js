//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);   
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //It will update the value of IN key because keys in map are unique

// console.log(map);

for (const [key, value] of map) {  //Affter writing [] we can directly get the key and value of the map
    // console.log(key, ':-', value);
    
}


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);  // It will give error because we cannot iterate over an object using for of loop.
}
