//Création d'une classe Vehicule avec un constructeur ayant un attribute nom, vitesse_max et kilometrage 
class Vehicule {
    constructor(nom,vitesseMax, kilometrage) {
      this.nom = nom;
      this.vitesseMax = vitesseMax;
      this.kilometrage = kilometrage;
    }
  }

  const car = new Vehicule('Nisane', 200, 20500);
//Créer une class Bus qui hérite de la classe Véhicule
  class Bus1 extends Vehicule{
    chairCapacity(chair){
      return 'le nombre de chaises dans ce bus est :' + chair;
    }
  }
  let totoBus = new Bus1('toto', 180, 1200);
  console.log(totoBus.chairCapacity(50));
//Création d'une classe Vehicule ayant un attribute nom, vitesse_max et kilometrage 

//   function Vehicule2(nom,vitesseMax, kilometrage) {
//       this.nom = nom,
//       this.vitesseMax = vitesseMax,
//       this.kilometrage = kilometrage;
//   }

//   let nisane2 = new Vehicule2('LSLP', 200, 10500);
//   console.log(nisane2);


// function Bus() {
//     Vehicule2.call(this);
//     this.capacity = 50;
//     this.color = 'blue';
//   }

