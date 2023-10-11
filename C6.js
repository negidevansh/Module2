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

// Test 'accelerate' and 'brake' methods, and the getter and setter
car3.accelerate(); // Output: Ford is accelerating to 130 km/h
car3.accelerate(); // Output: Ford is accelerating to 140 km/h
car3.brake(); // Output: Ford is slowing down to 135 km/h
console.log(car3.speedUS); // Output: 84.375 (Converted speed in mi/h)
car3.speedUS = 50; // Set speed in mi/h
console.log(car3.speed); // Output: 80 (Converted speed in km/h)
