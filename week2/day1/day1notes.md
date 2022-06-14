# Classes and how to use them 
- a simple complext dictionary
- in reality, a class is very complexe
- there is too much to know from this class
    - we will do this in this cohort
        - creating a class = instantiatin 
        - 
# example

user ={
    "name": "Rahmin"
}
print(user["name"])

//

user["name"] = "amanda"


rahmin = new Person()
rahmin.speak()
// "whats up"

amanda = new person()
amanda.speak()
// "hello" 


# To make a class, use the keyword "Class"
## This is barebones for a class, pretty useless in current stage
class User:
    pass

## Now we define the class with a constreuctor and then add specific thinsg to it that helps us with out program
### THe constructor is the blueprint of this specific class only. 

class User:
    name
    height
    weight
    siblings
    greeting
    def__init__(self):
        self.name = "Amanda"
        self.height = "7.3ft"
        self.weight = "None of your business"
        self.greeting = "Hey guys"
rahmin = user()

print(rahmin.name)

# The code up top uses dot notation. It will print out "amanda"



EXAMPLE 2


class User:
    name
    height
    weight
    siblings
    greeting
    def__init__(self,name):
        self.name = name
        self.height = "7.3ft"
        self.weight = "None of your business"
        self.greeting = "Hey guys"
rahmin = user()
Olivia = User("olivia")


print(Olivia.name)
print(rahmin.name)