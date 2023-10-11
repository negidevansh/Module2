//constructor function
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// 'accelerate' method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
};

// 'brake' method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
};

// 4
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Testing car1
console.log(`${car1.make} initial speed: ${car1.speed} km/h`);
car1.accelerate();
car1.accelerate;
