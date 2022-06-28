choiceList = """
    1. Attack
    2. Run
    3. Block
    4. Dip
"""

def action(choice):
    print(choiceList)
    message = "hehehehe"
    if choice == "1":
        print("You attacked the monster")
        return 
    if choice != "1" or choice != "2" or choice != "3" or choice != "4":
        print("Please make a choice of 1,2,3 or 4 only")
        return

# print(message)
# this won't work

print(choiceList)
choice = input("What action do you want to do")
action(choice)

def printSomething(value):
    print(value)
    return "this is a string"
print(printSomething)
variable = printSomething("blah")
print(variable)
print(printSomething("blah"))

def printNumbers(number):
    print(number)
    return "This is the return value"

copyOfPrintNumbers = printNumbers
returnValueOfNumbers = printNumbers(12)
print(copyOfPrintNumbers)
print(returnValueOfNumbers)



# def printAnotherThing(value):
#     print(value)

# value = printSomething("First value")
# print(value)
# value = "a different thing"
# printAnotherThing(value)

#Andrea
# def printStudentNameAndrea(listOfResponsibilities = [], string = '', thing = ''):
#     dob = '2002'
#     for item in listOfResponsibilities:
#         print(item)
#         print(dob)
#     return True

# printStudentNameAndrea([1,2,3], 'dog', 'cat')
# var = printStudentNameAndrea()
# print(printStudentNameAndrea)

# # West
# def printStudentNameWest(listOfResponsibilities = [], name = "", third = []):
#     dateOfBirth = "1989"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dateOfBirth)
#     return True
    
# printStudentNameWest([1, 2, 3], "West", [3, 4, 5])
# functionValueWest = printStudentNameWest([1, 2, 3], "West", [3, 4, 5])
# print(printStudentNameWest)
# #Ethan-Gula 
# # :Edef prthanintStudentName():

# # ef printStud
# # ntNam#() Blake Lein


# #Stacy
# def printStudentNameStacy(listOfResponsibilities = [], hello = "", number = 7):
#     dateOfBirth = "1991"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dateOfBirth)
#     return True

# printStudentNameStacy([1,2,3], "hi", 6)
# printAgain = printStudentNameStacy()
# print(printStudentNameStacy)


# #Amanda
# def printStudentNameAmanda(listOfResponsibilities = [], string = "", num = 3):
#     dateOfBirth = "1998"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dateOfBirth)
#     return True

# printStudentNameAmanda([2, 4], "wassup", 4)

# varPrint = printStudentNameAmanda()
# print(printStudentNameAmanda)
        
    
    
# #Jason
# def printStudentNameJason(listOfResponsibilities=[], string="", argument=0):
#     dob = "1981"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dob)        
#     return True
    
# printStudentNameJason([thing1], "thing2", 3)
# valuePrint = printStudentNameJason()
# print(printStudentNameJason)

# #Olivia 
# thing = "hi"
# def printStudentNameOlivia(listOfResponsibilities=[], string="", thing):
#     dateOfBirth = "1993"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dateOfBirth)
#     return False 
    
# printStudentNameOlivia([1], "hello", thing)

# variable1 = printStudentNameOlivia()

# print (printStudentNameOlivia)

#     #Rahmin
# def printStudentNameRahmin(listOfResponsibilities=[], string = "", argument3):
#     dateOfBirth = "1999"
#     for item in listOfResponsibilities:
#         print(item)
#         print(dateOfBirth)
#     return True
# printStudentNameRahmin([1, 2, 3, 4], "This is the birthday", argument3=)

# printedInfo = printStudentNameRahmin()
# print(printStudentNameRahmin)

def userInput():
    fname = input("what is your fname")
    lname = input("what is your lname")
    city = input("what is your city")
    hobbie = input("what is your hobbie")
    food = input("what is your food")

    print(fname,lname,city,hobbie,food)


