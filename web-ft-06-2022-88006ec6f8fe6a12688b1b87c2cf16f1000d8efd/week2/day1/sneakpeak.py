# listOfTasks = []

# def greeting():
#     print("Howdy")

# def addItem():
#     itemToAdd = input("What todo would you like to add?")
#     #
#     newTask = Item(itemToAdd)
#     listOfTasks.append(newTask)
#     for stuff in listOfTasks:
#         print(stuff.name)

# class Item:
#     def __init__(self,name):
#       self.name = name

# choice = ""
# while choice != "n":
#     greeting()
#     addItem()
#     choice = input("Wanna keep going? y/n")

listOfTasks = []

class Item:
    def __init__(self,name):
      self.name = name

    def printName(self):
        print(self.name)


def greeting():
    print("Howdy")

def addItem():
    itemToAdd = input("What todo would you like to add?")
    #
    newTask = Item(itemToAdd)
    listOfTasks.append(newTask)
    for stuff in listOfTasks:
        stuff.printName()

choice = ""
while choice != "n":
    greeting()
    addItem()
    choice = input("Wanna keep going? y/n")
