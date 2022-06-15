# You have two parents
## make three classes: parent, child, and sibling


class parent:
    def __init__(self, firstName, lastName, annoyanceLevel):
        self.firstName = firstName
        self.lastName = lastName
        self.annoyanceLevel = annoyanceLevel



class child(parent):
    def __init__(self, firstName, lastName, annoyanceLevel, playsVideoGames):
        super().__init__(firstName, lastName, annoyanceLevel)
        self.playsVideoGames = playsVideoGames




class sibling(parent):
    def __init__(self, firstName, lastName, annoyanceLevel, isNotAsCoolAsMe):
        super().__init__(firstName, lastName, annoyanceLevel)
        self.isNotAsCoolAsMe = isNotAsCoolAsMe


dad = parent("Masoud", "Shoukoohi", "over 9000")

rahmin = child("Rahmin", "Shoukoohi", "I AM NOT ANNOYING", "ye i game here and there")

rod = sibling("Rod", "Shoukoohi", "he breaks the annoyance scale", "nah he is nowhere as cool as me")

print(rod.isNotAsCoolAsMe)
print(rahmin.annoyanceLevel)