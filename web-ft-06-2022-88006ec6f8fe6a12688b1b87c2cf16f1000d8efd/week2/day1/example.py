# Class example
# dimensions
    # windows
    # doors
    # flooring
    # name/type of room
    # contents
class Room:
    def __init__(self,dimensions,windows,doors,flooring,name,contents):
        self.dimensions = dimensions
        self.windows = windows
        self.doors = doors
        self.flooring = flooring
        self.name = name
        self.contents = contents
    def nameOfRoom(self):
        print(self.name)

    def lowerCaseRoomName(self):
        self.name = self.name.lower()
    def __str__(self):
        return f"""
        {self.name}
        {self.dimensions}
        {self.windows}
        {self.doors}
        {self.flooring}
        {self.contents}
        """
    
room1 = Room("12x12x15",2,2,"tile","The Streaming Room",["Mic", "Mouse", "PC"])
# print(room1.doors)
blakesRoom = Room("5x6x5",0,1,"stone","PRIson cell",["Empty Pot", "Pile of hay", "chains", "rat"])

print(room1)
# if room1.name == "The Streaming Room":
#     print("Yup, this is where we stream")

# for content in room1.contents:
#     print(content)

    