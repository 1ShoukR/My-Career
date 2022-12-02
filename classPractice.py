
role = input("What is your desired role? entry, support, awper, lurker? ")
favorite_gun = input("WHat is your favorite gun? ")
full_armor = input("enter 'full' for full armor, and 'half' for half armor. ")
region = input("Enter your favorite region ")
favorite_team = input("Enter your favorite team ")



class Player:
    def __init__(self, role = None, favorite_gun = None, full_armor = None):
        # if self.role != "entry" or "support" or "awper" or "lurker":
        #     print("That is not an available roll")
        # else:
        #     self.role = role
        # if self.favorite_gun != "ak-47" or "m4a1s" or "m4a4":
        #     print("Invalid gun")
        # else: 
        #     self.favorite_gun = favorite_gun 
        # if self.full_armor != "half" or "full":
        #     print("Invalid entry")
        # else:
        #     self.full_armor = full_armor
        self.role = role
        self.favorite_gun = favorite_gun
        self.full_armor = full_armor
    # def __str__(self):
    #     return f"Created Player: {self.role}, {self.favorite_gun}, {self.full_armor}"


class Team(Player):
    def __innit__(self, region, favorite_team):
        super().__init__()
        self.region = region
        self.favorite_team = favorite_team
    def __str__(self):
        return f"Created Player: {self.role}, {self.favorite_gun}, {self.full_armor}, {self.region}, {self.favorite_team}"



shoukr = Team(role, favorite_gun, full_armor)


print(shoukr)
