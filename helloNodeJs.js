// adding modules
const util = require("util");
const events = require("events");

// define constractor(blue print)
class fruits{
    constructor(name){
        this.name = name;
    }
}

// add EventEmitter features to fruits
util.inherits(fruits, events.EventEmitter)

// creat some fruit
let apple = new fruits("appale");
let banana = new fruits("banana");
let fr = [apple, banana]

//adding resid event
fr.forEach((fruit) =>{
    fruit.on("resid", ()=>{
        // call back function code
        console.log(fruit.name + " resid :)")
    })
})

// emit event
apple.emit("resid")
