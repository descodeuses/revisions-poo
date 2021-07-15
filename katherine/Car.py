class Vehicle(object):
    """docstring for Vehicle."""

    def __init__(self, name, maximum_speed, mileage):
        # super(Vehicle, self).__init__()
        self.name = name
        self.maximum_speed = maximum_speed
        self.mileage = mileage

    def seats_available(self, seats):
        return f"The seating capacity of a {self.name} is {seats} passengers"

class Bus(Vehicle):
    def seats_available(self, seats=120):
        # super est lié à l'héritage - par rapport au parent class Vehicule - allows us to access Vehicule then seats_available
        return super().seats_available(seats)


"""
import Car
myDodge = Car.Vehicle('Charger', 325, 1245)
print(myDodge.name)
print(myDodge.maximum_speed)
print(myDodge.mileage)
"""

"""
from Car import Bus,Vehicle
myBus = Bus('BigBus', 135, 15689)
print(myBus.name)
BigBus
print(myBus.maximum_speed)
135
print(myBus.mileage)
15689
print(myBus.seats_available)
# bound method and memory allocated
<bound method Bus.seats_available of <Car.Bus object at 0x7f5604757d30>>
print(myBus.seats_available())
The seating capacity of a BigBus is 120 passengers
"""
