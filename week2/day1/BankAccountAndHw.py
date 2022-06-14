## Class work + Homework





# class BankAccount:
#     def __init__(self, account_number):
#         self.account_number = account_number
#         self.balance = 0
#     def deposit(self, amount):
#         self.balance += amount
#     def withdraw(self, amount):
#         self.balance -= amount
#     def transfer_funds(self, transferFrom, transferTo, amount):
#         transferFrom.withdraw(amount)
#         transferTo.deposit(amount)
#     def __str__(self):
#         return f"{self.account_number}\n{self.balance}"

# checking_account = BankAccount("Checking")
# savings_account = BankAccount("Savings")

# checking_account.deposit(1000)
# checking_account.transfer_funds(checking_account, savings_account, 500)

# print(checking_account)
# print(savings_account)



## Homework To-Do list


class Item:
    def __init__(self):
        self.toDoList = []
    
    def viewItems(self):
        if self.toDoList:
            count = 1
            for i in self.toDoList:
                for k, v in i.items():
                    print(f'{count}. {k}: {v}')
                    count +=1
        else:
            print("You currently have nothing to do \n")
    def addItem(self):
        itemToAdd = input("""
        What would you like to add to the list? """)
        priority = input("""
            What is the priority of this task?
            1: High
            2: Normal
            3:Low\n
            """)
        if priority == "1":
            priority = "High"
        elif priority == "2":
            priority = "Normal"
        elif priority == "3":
            priority = "Low"
            
        toDoDict = {}
        toDoDict[itemToAdd] = priority
        self.toDoList.append(toDoDict)

    def removeItem(self):
        rahminToDo.viewItems()
        remove = int(input("""
            What do you want to remove?
            """))
        removeindex = remove - 1
        itemToRemove = self.toDoList[removeindex]
        del self.toDoList[removeindex]
        print(f"""
        {itemToRemove} Was removed from your list
        """)

    
rahminToDo = Item()

while True:
    rahminToDo.viewItems()
    menuOptions = input("""
        What Would you like to choose?: 
            1. Type '1' Add item
            2. Type '2' to remove item
            3. Type '3' to quit.\n
            """)
    if menuOptions == "1":
        rahminToDo.addItem()
    elif menuOptions == "2":
        rahminToDo.removeItem()
    elif menuOptions == "3":
        print("""
        see ya nerd haha omegalol!!!11!1!
        """)
        break
    else:
        print("""
        Please choose 1, 2, or 3
        """)






