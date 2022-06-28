class User:
    def __init__(self,firstName,lastName):
        self.firstName = firstName
        self.lastName = lastName
        self.address = []

    def addAddress(self,address):
        self.address.append(address)
    
    def changeFirstName(self,newName):
        self.firstName = newName

class Address:
    def __init__(self,street,city,zip,state):
        self.street = street
        self.city = city
        self.zip = zip
        self.state = state
    
joe = User("Joe", "Frasier")
address = Address("123 main st", "tomball", "77777", "🤠 state")

print(joe.firstName)
joe.changeFirstName("Josephus")
print(joe.firstName)
# add a method so that we can add an adress to a user calling a method instead
