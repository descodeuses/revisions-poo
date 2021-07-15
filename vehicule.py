class Voiture():
    def __init__(self, nom, vitesse_max, kilometrage):
        self.nom = nom
        self.vitesse_max = vitesse_max
        self.kilometrage = kilometrage

# Les commandes verification tirminale
# ~/Bureau/HTML/Exercices/SQL/YannickVoiture$ python3.
# >>> from vehicule import Voiture
# >>> mycar = Voiture('tortue', 50, 2)
# >>> mycar.nom
# 'tortue'


    def nombrePassage(self, nombrePassager):
        return  f"la capacitée du {self.nom} est {nombrePassager}"

class Bus(Voiture):
    def nombrePassager(self, nombrePassager=50):
        return super().nombrePassager(nombrePassager)
# Les commandes tirminale
# cd/Bureau/HTML/Exercices/SQL/YannickVoiture$  python3
# >>> from vehicule import Voiture,Bus
# >>> monBus = Bus('busss',200,100)
# >>> monBus.nombrePassager()
# 'la capacitée du busss est 50'
