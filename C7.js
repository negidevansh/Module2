// 5. ES6 Class 'CarCl'
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // 6. Getter 'speedUS'
  get speedUS() {
    return this.speed / 1.6;
  }

  // 7. Setter 'speedUS'
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  // 8. 'accelerate' Method
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is accelerating to ${this.speed} km/h`);
  }

  // 9. 'brake' Method
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is slowing down to ${this.speed} km/h`);
  }
}

// Create a new 'CarCl' object
const car3 = new CarCl("Ford", 120);
// EVCl class definition (child class of CarCl)
class EVCl extends CarCl {
  #charge; // Private property

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Method to charge the battery
  chargeBattery(charge) {
    this.#charge = charge;
    return this; // Allow chaining
  }

  // Overriding the brake method
  brake() {
    super.brake(); // Call the parent class's brake method
    console.log(`${this.make} charge decreased to ${this.#charge}%.`);
  }

  // Method to accelerate the car's speed and display charge status
  accelerate() {
    super.accelerate(); // Call the parent class's accelerate method
    console.log(`${this.make} charge decreased to ${(this.#charge -= 2)}%.`);
  }
}

// Create an EVCl object
const car1 = new EVCl("Rivian", 120, 23);

// Test accelerate, brake, and chargeBattery methods with chaining
car1.accelerate().accelerate().brake().chargeBattery(30).accelerate();
