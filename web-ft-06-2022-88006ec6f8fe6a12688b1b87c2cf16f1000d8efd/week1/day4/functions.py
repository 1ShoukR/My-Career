listOfStuff = ["House", "Car", "Backyard"]
listOfCarSTuff = ["Headliner", "Steering Wheel", "Clutch"]
listOfClothes = ["Shirt", "Pants", "Shoes" ,"Socks"]

def printList(listOfThings):
    for stuff in listOfThings:
        print(stuff + " Wow")

# printList(listOfStuff)      
# printList(listOfCarSTuff)      
# printList(listOfClothes)      
def lineBreaks():
    lineBreak = """
    ************************************
    """
    return print(lineBreak)
def gameStart():
    print("Greeting, welcome to my text adventure game!")
    name = input("What is your name?\n")
    print(f"Welcome {name}!")

lineBreaks()

def attack():
    print("I hit the monster 😠")
    
while True:
    choice = ""
    gameStart()
    choice = input("Want to keep playing? y/n")
    move = input("What do you want to do? 1. Attack 2. Run")
    lineBreaks()
    if move == "1":
        attack()
    if choice == "n":
        break
