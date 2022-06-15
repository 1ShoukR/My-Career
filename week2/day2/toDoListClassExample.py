## Todo list
# need to add a todo
# need to delete a todo 
# need to view todos



class TodoList:
    def __init__(self):
        self.todoListItems = []

    def viewTodos(self):
        print(self.todoListItems)
        counter = 1
        for todos in self.todoListItems:
            print(f"{counter} - {todos}")
            counter += 1
    def addTodos(self,todoItem):
        self.todoListItems.append(todoItem)
    def deletedTodos(self):
        self.viewTodos()
        itemToDel = input("What item would you like to delete? enter the number of the item you wish to delete. ")
        while itemToDel.isnumeric() == False:
            print("Please enter in a number.")
            itemToDel = input("What item would you like to delete? enter the number of the item you wish to delete. ")
        del self.todoListItems[int(itemToDel) - 1]
        self.viewTodos()




shoppingList = TodoList()

shoppingList.addTodos("mow the yard")
shoppingList.addTodos("wash the dishes")
shoppingList.addTodos("walk the dog")
shoppingList.viewTodos()

