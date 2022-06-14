# Class example


from asyncio import windows_events
from unicodedata import name
## Examples with python classes

class Room:
    def __init__(self, dimensions, doors, windows, flooring, contents, name):
        self.dimensions = dimensions
        self.doors = doors
        self.windows = windows
        self.flooring = flooring
        self.contents = contents
        self.name = name
    def nameOfRoom(self):
        print(self.name)
    def lowerCaseRoomName(self):
        self.name = self.name.lower()
room1 = Room("12x12x15", 2, 2, "tile", ["mic", "mouse", "PC"])

# print(room1.dimensions)


# if room1.dimensions == "12x12x15":
#     print("ye you right fam")

# for content in room1.contents:
#     print(content)


blakesRoom = Room("5x6x5", 0, 1, "Stone flooring", ["empty pot", "pile of hay", "chains","rat"], "prison cell")
blakesRoom.nameOfRoom()