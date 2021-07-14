function Vehicles(name, kilometer, maxSpeed){
  this.name = name;
  this.kilometer = kilometer;
  this.maxSpeed = maxSpeed;
};
const moto = new Vehicles('Toto', 300, 150);



class Vehicle {
  constructor(name, kilometer, maxSpeed) {
    this.name = name;
    this.kilometer = kilometer;
    this.maxSpeed = maxSpeed;
  }
}

class Bus extends Vehicle {
  constructor(name, kilometer, maxSpeed) {
    super(name, kilometer, maxSpeed); // appelle le constructeur parent avec le paramètre
  }
  sites(siege) {
    if(siege == null){
      siege = 75;
    }
    return (`${siege} sièges sont disponibles`);
  }

}
const buss = new Bus('Toto', 300, 150);
console.log(buss.sites(15));



