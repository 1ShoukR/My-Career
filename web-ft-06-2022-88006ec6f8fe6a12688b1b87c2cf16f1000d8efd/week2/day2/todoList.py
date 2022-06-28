# todo list
# need to add a todo
# need to delete a todo
# need to view todos

class TodoList:
    # def init
    def __init__(self):
        self.todoListItems = []

    def viewTodos(self):
        counter = 1
        for todos in self.todoListItems:
            print(f"{counter} - {todos['nameOfTask']} - {todos['priority']}")
            counter += 1
    def addTodos(self):
        task = input("What do you want to add to your list?")
        priority = input("What is the priority of this task? high, med,low")
        completeTask = {"nameOfTask": task,
        "priority": priority}

        self.todoListItems.append(completeTask)
    def deleteTodos(self):
        self.viewTodos()
        itemToDel = input("What item would you like to delete? Enter the number of the item you wish to delete.\n")
        while itemToDel.isnumeric() == False: 
            print("Please enter in a number")
            itemToDel = input("What item would you like to delete? Enter the number of the item you wish to delete.\n")
        del self.todoListItems[int(itemToDel) - 1]
        self.viewTodos()
        

shoppingList = TodoList()


shoppingList.addTodos()
shoppingList.addTodos()
shoppingList.addTodos()
shoppingList.deleteTodos()

