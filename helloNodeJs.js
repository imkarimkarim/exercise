const util = require("util");
const events = require("events");

class fruits{
    constructor(name){
        this.name = name;
    }
}

// add EventEmitter features to fruits
util.inherits(fruits, events.EventEmitter)

let apple = new fruits("appale");
let banana = new fruits("banana");
let fr = [apple, banana]

// adding resid event
fr.forEach((fruit) =>{
    fruit.on("resid", ()=>{
        // call back function code
        console.log(fruit.name + " resid :)")
    })
})

apple.emit("resid")
