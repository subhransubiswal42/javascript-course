// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Subhransu",
    "full name": "Subhransu Biswal",
    [mySym]: "myKey1",// This is the way to add a symbol as a key in an object //Means this is correct way to add a symbol as a key in an object
    age: 19,
    location: "Bhubaneswar",
    email: "subhransu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "sinu@gamil.com"
// console.log(JsUser["email"]);


// Object.freeze(JsUser) // This will freeze the object and we cannot change any value of the object after this line
JsUser.email = "rahul@gmail.com" // This will not change the email value because the object is frozen
// console.log(JsUser["email"]); // This will print the previous changed email value because the object is frozen

// console.log(JsUser);// This will print the whole object with all the key-value pairs



//------------------------------ Ex of Functions as values in objects------------------------------

JsUser.greeting = function(){
     console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
     console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // It will print [Function (anonymous)] 
console.log(JsUser.greetingTwo());
