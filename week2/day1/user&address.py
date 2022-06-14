from codecs import StreamWriter
from email.headerregistry import Address


# class user:
#     def __init__(self, firstName, lastName, address):
#         self.firstName = firstName
#         self.lastName = lastName
#         self.address = address
#     def firstNameOfUser(self):
#         print(self.firstName)
#     def lastNameOfUser(self):
#         print(self.lastName)
#     def address(self):
#         print(self.address)
#     def userAddressAdd(self, newAddress):
#         self.address.append(newAddress)


# class address:
#     def __init__(self, streetName, houseNumber, city):
#         self.streetName = streetName
#         self.houseNumber = houseNumber
#         self.city = city



# atlanta = address("johnson ferry rd", "141", "marietta")
# rahmin = user("Rahmin", "Shoukoohi", address)

# rahmin.userAddressAdd(newAddress)


# print(rahmin.address[0])

## This is a working copy

class User:
    def __init__(self,firstName,lastName):
        self.firstName = firstName
        self.lastName = lastName
        self.address = []
        
    def addAddress(self,address):
        self.address.append(address)
    def changeFirstName(self, newName):
        self.newName = "rahminLOLOL"

class Address:
    def __init__(self,street,city,zip,state):
        self.street = street
        self.city = city
        self.zip = zip
        self.state = state
    
joe = User("Joe", "Frasier")
address = Address("123 main st", "tomball", "77777", "🤠 state")

print(joe.address)
joe.addAddress(address)
print(joe.address)
# add a method so that we can add an adress to a user calling a method instead
