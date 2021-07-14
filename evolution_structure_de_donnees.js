console.log("premier niveau : structure de donnée basique : type primitif chaine, décimal, dans un type plus évolué : le tableau")

let banane = ["Banane", 12.4, "Onduras"]
let orange = ["Orange", 2.67, "Espagne"]

console.log(banane[0], "prix: ", banane[1])
console.log(orange[0], "prix: ", orange[1])

console.log("pour faciliter les manipulations, besoin de préciser l'abstraction : remplacement du tableau par un objet avec des attributs pour ranger les données")

class Fruits {

  constructor(nom, prix, origine) {
    this.nom = nom
    this.prix = prix
    this.origine = origine
  }

  affiche() {
    return ` dans l'objet ${this.nom} prix: ${this.prix}`
  }
}

let bananeObject = new Fruits("Banane", 12.4, "Onduras")
let orangeObject = new Fruits("Orange", 2.67, "Espagne")
let citronObject = new Fruits("Citron", 1.67, "Espagne")

console.log(bananeObject.affiche())
console.log(orangeObject.affiche())

console.log("Pour simplifier la manipulation, création d'un tableau qui permet de manipuler d'un coup tout les objets")

let fruits = [bananeObject, orangeObject, citronObject]

fruits.map((fruit) => {
  console.log(fruit.affiche())  
})

