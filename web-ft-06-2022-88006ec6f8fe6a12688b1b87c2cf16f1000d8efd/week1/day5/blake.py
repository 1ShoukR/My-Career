toDoList = []


def welcomeMessage():
    message = """
Press 1 to add task
Press 2 to delete task
Press 3 to view all tasks
Press q to quit
   |\---/| *Meow
   | ,_, |
    \_`_/-..----.
 ___/ `   ' ,""+ \
(__...'   __\    |`.___.';
  (_,...'(_,.`__)/'.....+
    """

    return print(message)


def addfunction():
    # how do we add to a list
    toDoDictionary = {}
    taskToAdd = input("What task would you like to add?")
    priorityOfTask = input("What priority is this? high, medium, low?")

    # how do we add a "title" key and a "priority" value
    toDoDictionary["title"] = taskToAdd
    toDoDictionary["priority"] = priorityOfTask
    toDoList.append(toDoDictionary)

    return print("I added * %s * to your list of things to do" % taskToAdd)


def viewfunction():
    count = 1
    print("Here are your todos")
    print("==========================")
    for task in toDoList:
        print(" %d. %s = %s " % (count, task["title"], task["priority"]))
        count += 1
    print("==========================")
    return print("Here ya go")


def delfunction():
    print("Here is your todos")
    viewfunction()
    taskToDelete = int(input(
        "What task would you like to delete (choose the index)\n"))
    # toDoList.pop(taskToDelete - 1)
    taskToDeleteIndex = taskToDelete - 1
    taskThatIsGettingDeleted = toDoList[taskToDeleteIndex]
    del toDoList[taskToDeleteIndex]
    return print("I deleted %s off your list" % taskThatIsGettingDeleted)


def determineTask(userChoice):
    whatTheyChose = ""

    if(userChoice == "1"):
        whatTheyChose = addfunction()
    elif(userChoice == "2"):
        whatTheyChose = delfunction()
    elif(userChoice == "3"):
        whatTheyChose = viewfunction()
    # elif(userChoice == "q"):

    else:
        print("Bad key ")

    whatTheyChose = choice
    return whatTheyChose


choice = ""
while(choice != "q"):
    welcomeMessage()
    userChoices = input("What would you like to do?")
    outcome = determineTask(userChoices)
    choice = outcome