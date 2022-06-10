from csv import list_dialects
from logging import logProcesses
from tkinter.messagebox import YES
import sys
from turtle import left, right
from time import sleep




# to do list: 
# use while loops 
# introduce list 
# use a dictionary
# loop and nested loop 
# make break proof and make user input what i want






def HallwayOne():
    print("You have two choices: Left or Right. Which way do you go? ")
    choice = input("---> ")
    if choice == 'right':
        print("Nice! You made it through")
    return("You've been captured! You will be executed immediately. GGs ")





print("""Hello! My name is Sherry! 
I'll be your eyes and ears while you're inside the Empire's battlestation 

***************************************

""")
sleep(3)
print("Looks like you guys are in cell block three.")
sleep(3)


def panel():

    return input("""Do you see a panel with 5 buttons? 
    (Yes/no) 
    
***************************************
    
    """)

if panel() == 'yes':
    print("""Great! 
Now click the third button on that panel. 
It should open the door!

***************************************

""")

else:
    print("""it is on the left side of the doorframe!
 Once you see it, click the third button on that panel! 
 
 ***************************************
 
 """)

    panel()



def panelButtons():
    while True:
        myAnswer = input("choose which button you want to press ")
        try:
            myAnswer = int(myAnswer)
            return myAnswer
        except:
            print("Just choose a number.. ")

myAnswer = panelButtons()

if int(myAnswer) == 1:
     print("You turned the incinerator on. GGs bro nt..")
     exit(0)
elif myAnswer == 2:
    print("""That button alerted high command.
They're sending troops to your cell block.. GGs bro... """)
    exit(0)
elif myAnswer == 3:
    print("""That opened the door and shut the security cameras off!
Now I cannot draw the map of the layout on my secret spy tablet.
You'll need to guess which way to go before I upload the 
schematics of the base onto the tablet!

***************************************
""")
    HallwayOne()
        
elif myAnswer == 4:
    print("""Oh god.. That button just alerted the bridge..
They are sending a task force squad to your cell..
I've been locked out of the system! I cannot help, I'm sorry..
They will execute you on site.. GGs bros go next""" )
    exit(0)
elif myAnswer == 5:
    print("""This button literally did nothing.
Bro just click button 3 man don't make this difficult for yourself """)
    exit(0)














    






