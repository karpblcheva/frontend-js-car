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
    return this.passengers.push(this.passenger);
  },
  land: function () {
    return this.passengers.pop();
  },
  // drive: function(){
  //   return 
  // },
};
car.put();
car.land();
console.log(car.put())
console.log(car.passengers)
