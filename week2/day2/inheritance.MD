# Inheritance

class Employee
    def __init__(self,name,department,role):
        self.name = name
        self.department = department
        self.role = role
    def talkAboutWork():
        print("Man mondays")


class SuperEmployee(Employee):
    def __init__(self,name,department,role):
        super().__init__(name,department,role)
        self.security = "top level"
    def leadAStandup():
        print("hey guys, lets start our standup. ")
    pass

rahmin = employee("rahmin", "Engineering Group", "staff")
rayleigh = employee("rayleigh", "Engineering Group", "Staff")
stacy = SuperEmployee("Stacy", "Engineering Group", "staff III")