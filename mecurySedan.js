//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js').Vehicle

//this shows how to call from this module...

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

    }
    loadPassenger(Number){
        return Number
    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    scheduledService(){
        if (this.mileage>30000) {
            this.scheduleService = true
            return this.scheduleService;

    }}}
let A28MercurySedan = new Car("Mercury","A28","1965","Blue",35000)
A28MercurySedan.start()
A28MercurySedan.loadPassenger()
A28MercurySedan.stop()
A28MercurySedan.scheduledService()
console.log(A28MercurySedan)





