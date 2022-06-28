
# Function
# 1. Function name
# 2. Function Arguments (sometimes)
# 3. Function Body
print()

# Syntax in python for a function
# def
# functionName
# ():
# indent
def sayHi():
    print("Hi")
    print("this is the body")

# Run a function, function name open and close ()
# sayHi()

# Variables
# Variable name
teacher = "Joe"
isHoustonCold = False
isItDaytime = True
# Variable types
# String ""
# "house"
# "1"
# "true"
# ""
# "print()"

# Boolean true/false
# IS IT TRUTHY
# True
# IS IT FALSY
# False

# Integers
number = 1
bigNumber = 100000

# Floats
floatNumber = 3.2
jankyFloat = 3.2e213

# List/Arrays
students = [
    "Jason", "Stacy", "West", "Carlos", "Amanda"
]

jobs = ["dev", "teacher", "nurse", "musician", "gamer"]
print(jobs[0])
# print("This is the student")
# print(students[1])
# Access a list by using what is called the index of the list

# Dictionary/Object
number = 1
randomData = {
    "yourNumber": number,
    "key": "value",
    "key": "value",
    "age": "old",
    "number": 1,
    "hot": True,
    "students": ["Carlos", "Olivia"], 
    "sorry": [
        {"name": 
        {"name": 
        {"name": 
        ["1"]
        }
        }
        }
        ]
}
# print the number 1
print(randomData["students"][0])
print(randomData["sorry"][0]["name"]["name"]["name"][0])



data = {
    "president": {
        "name": "Zaphod Beeblebrox",
        "species": "Betelgeusian",
        "location": ["South America"]
    }
}
# print the name
print(data["president"]["name"])
# print the location
print(data["president"]["location"][0])