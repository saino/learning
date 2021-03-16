class Event{
    constructor(){
        this.liseners = [];
    }
    subscrible(lisener){
        this.liseners.push(lisener);
    }
    trigger(){
        this.liseners.forEach((lisener)=>{
            lisener.update.call(this);
        })
    }
}
const person1 = {
    update(){
        console.log("我是小明",this);
    }
}
const person2 = {
    dd: "tt",
    update:()=>{
        console.log("我是小红",this);
    }
}
const myEvent = new Event();
myEvent.subscrible(person1);
myEvent.subscrible(person2);
myEvent.trigger();