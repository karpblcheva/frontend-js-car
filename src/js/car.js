let car = {
  color: 'white',
  dours: 4,
  speed: 0,
  defaultSpeed: 60,
  maxSpeed: 100,
  seats: 4,
  passenger: true,
  passengers: [],
  put: function () {
    var push = this.passengers.push(this.passenger)
    if (push <= this.seats) {
      return push;
      }
    else {
      return this.passengers.pop();
      }
  },
  land: function () {
    return this.passengers.pop();
  },
  drive: function(newSpeed){
//     if(this.passengers = []) {
//       return this.speed; 
//     }
//     else { 
//       if (newSpeed <= this.maxSpeed) {
      return this.speed = newSpeed;
//       }
//       } 
  },
};

console.log(car.put())
console.log(car.passengers)
console.log(car.drive(80))
console.log(car.speed)
