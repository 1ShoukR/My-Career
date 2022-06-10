def action(choice):
    if choice == "1":
        print("You attacked the monster")
        return
    if choice != "1" or choice != "2" or choice != "3" or choice != "4":
        print("Please make a choice of 1, 2, 3, or 4 only")
        return

choiceList = """"
    1. attack
    2. run 
    3. block
    4. dip
"""
print(choiceList)
Choice = input("what action do you want to do? ")
action(Choice)