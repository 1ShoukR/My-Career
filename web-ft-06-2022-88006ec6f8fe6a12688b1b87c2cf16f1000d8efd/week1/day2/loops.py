# Loops
# Loops are used to go through a specific amount of times
# and execute code every time it goes through it

# It iterates over something

# It iterates over list

# It can iterate over dicctionaries

# It can call something a bunch of times

# It can break your computer immediately forever and you will have ot restart

#  While loop does something WHILE this is true
# While (condition to evaluate):
data = [1,2,3,4,5,6,7,8,9]

num = 0
# print(len(data))
# while num < len(data):
#     print(data[num])
#     num+=1   
# Condition can be checked many times
fruits = ["🍎", "🍍", "🍌","🍎", "🍍", "🍌","🍎", "🍍", "🍌"]
names = ["student1", "student2", "student3"]
# for
# for singular in list
for fruit in fruits:
    if fruit == "🍌":
        pass
    else:
        print(fruit)

#     students = ["Olivia" , "Rahmin", "Blake", "Carlos","Amanda" , "Andrea" ,"Ethan", "Jason" , "Stacy" , "West"]



# ____(name)____'s favorite subject in school is ____(subject)____.
# name = input("What is your name?")
# subject = input("What is your subject?")

input("What was your bill")
input("What tip would you like to give? Put it in a percentage.")

def tipCalc(moola):
    print("this is your tip")
    print(moola)
    print(moola * 1.10)

tipCalc(100)
