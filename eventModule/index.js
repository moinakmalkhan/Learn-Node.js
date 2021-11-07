import EventEmitter from "events";

class MyEventEmmiter extends EventEmitter{

}
const emitter = new MyEventEmmiter();

// Register an event 
emitter.on("eventName",function(){
    console.log("eventName is occured !!")
})

emitter.once("eventNameOnlyOneTime",function(){
    console.log("eventNameOnlyOneTime is occured !!")
})

// Trigger event
emitter.emit("eventName")
emitter.emit("eventName")
emitter.emit("eventNameOnlyOneTime")
emitter.emit("eventNameOnlyOneTime")
emitter.emit("eventNameOnlyOneTime")