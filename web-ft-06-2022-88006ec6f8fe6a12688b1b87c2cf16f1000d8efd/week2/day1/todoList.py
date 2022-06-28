from copyreg import constructor


class Todolist:
    def __init__(self,nameOfList, tasks):
        self.nameOfList = nameOfList
        self.tasks = []

    def addTodo(self,todoItem):
        self.tasks.append(todoItem)
    
    def deleteTask(self,todoToChange):
        print("delete")

    def printTasks(self):
        for task in self.tasks:
            print(f"""
            {task}\n
            """)

