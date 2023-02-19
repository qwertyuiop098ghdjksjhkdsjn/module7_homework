//Родительская функция
// Функция конструктор для устройств
function Device(year){
    this.company = 'samsung',
    this.year = year
}

// Функция конструктор для компьютеров
function Computer(type, name, model, year){
    this.type = type,
    this.name = name,
    this.model = model,
    this.year = year
}


// Функция конструктор для телефонов
function Phone(type, model, name, year){
    this.type = type,
    this.model = model,
    this.name = name, 
    this.year = year 
}

//Делегирующая связь
Phone.prototype = new Device();
Computer.prototype = new Device();



Device.prototype.getName = function(){
    console.log(`name of the ${this.type} is ${this.name}`)
}

Device.prototype.putTheDeviceOnCharging = function(){
    console.log(`${this.name} is on charging now`)
}

Device.prototype.turnOn = function(){
    console.log(`${this.name} is turned on`)
}

Device.prototype.turnOff = function(){
    console.log(`${this.name} is turned off`)
}

// Создание устройств
const laptop = new Computer('laptop', 'Samsung', 'Pro', 2023);
const phone = new Phone('phone', 'Phone', 'XY', 2022);


// Добавление собственных свойств
laptop.memory = 265;
laptop.display = 100;

phone.color = 'red';
phone.memory = 265;

// Добавление собственных методов
phone.answerPhone = function(){
    console.log(`Do you want to turn the answerPhone on ${this.name}`)
};


// Проверка собственных методов, записанных в prototype
laptop.putTheDeviceOnCharging()


// Проверка собственных методов
phone.getName()

console.log(laptop);
console.log(phone);