class Device {
    constructor (type, name, model, year){
        this.company = 'samsung',
        this.year = year
        this.type = type
        this.name = name
        this.model = model
    }

    getName(){
        console.log(`name of the ${this.type} is ${this.name}`)
    }
    putTheDeviceOnCharging(){
        console.log(`${this.name} is on charging now`)
    }
    turnOn(){
        console.log(`${this.name} is turned on`)
    }
    turnOff(){
        console.log(`${this.name} is turned off`)
    }
    getInfo(){
        console.log(`name of the ${this.type} is ${this.name}`)
        console.log(`${this.name} is on charging now`)
        console.log(`${this.name} is turned on`)
        console.log(`${this.name} is turned off`)
    }
}

class Computer extends Device{
    constructor(type, name, model, year){
        super(type, name, model, year);
        this.memory = 265
        this.display = 100
    }
}
class Phone extends Device{
    constructor (type, model, name, year) {
        super(type, name, model, year);
        this.color = 'red'
        this.memory = 265

    }
    answerPhone(){
        console.log(`Do you want to turn the answerPhone on ${this.name}`)
    }
}
const laptop = new Computer('laptop', 'Samsung', 'Pro', 2023);
laptop.getName()
laptop.putTheDeviceOnCharging()
laptop.turnOn()
laptop.turnOff()
const phone = new Phone('phone', 'Phone', 'XY', 2022);
phone.getName()
phone.putTheDeviceOnCharging()
phone.turnOn()
phone.turnOff()
phone.getInfo()