// Création de la class Vehicles avec trois paramètres
function Vehicles(name, kilometer, maxSpeed){
  this.name = name;
  this.kilometer = kilometer;
  this.maxSpeed = maxSpeed;
};
const moto = new Vehicles('Toto', 300, 150);


// Création de la class avec le constructeur 
class Vehicle {
  constructor(name, kilometer, maxSpeed) {
    this.name = name;
    this.kilometer = kilometer;
    this.maxSpeed = maxSpeed;
  }
}
// La nouvelle class Bus qui hérites des paramètres de la class Vehicle
class Bus extends Vehicle {
  constructor(name, kilometer, maxSpeed) {
    super(name, kilometer, maxSpeed); // appelle le constructeur parent avec le paramètre
  }
// Une nouvelle fonction qui est propre au Bus
  sites(siege) {
  // la valeur par defaut est 75 si ce n'est pas préciser dans les paramètres
    if(siege == null){
      siege = 75;
    }
    return (`${siege} sièges sont disponibles`);
  }

}
const buss = new Bus('Toto', 300, 150);
console.log(buss.sites(15));



