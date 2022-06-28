# Inheritance
class Employee:
    def __init__(self,name,department,role):
        self.name = name
        self.department = department
        self.role = role
    def talkAboutWork(self):
        print("Man, mondays, amiright?")

class SuperEmployee(Employee):
    def __init__(self,name,department,role,security):
        super().__init__(name,department,role)
        self.securityLevel = security

    def leadAStandup(self):
        print("Hey guys, let's start our standup.")
    def accessClientData(self):
        print("Print out all the client data in a report")
    

rahmin = Employee("rahmin","Engineering Group","staff")
rayleigh = Employee("rayleigh","Engineering Group","staff")
carlos = Employee("carlos","Engineering Group","staff")
amanda = Employee("amanda","Engineering Group","staff")

stacy = SuperEmployee("stacy", "Engineering Group", "staff III", "top level")
stacy.talkAboutWork()
carlos.talkAboutWork()
# carlos.leadAStandup()
print(stacy.securityLevel)

