from tkinter.messagebox import YES
import sys

print("""Hello! My name is Sherry! 
I'll be your eyes and ears while you're inside the Empire's battlestation 

***************************************

""")
print("Looks like you guys are in cell block three.")


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
elif myAnswer == 2:
    print("""That button alerted high command.
They're sending troops to your cell block.. GGs bro... """)
elif myAnswer == 3:
    print("""That opened the door and shut the security cameras off!
Now I cannot draw the map of the layout on my secret spy tablet.
You'll need to guess which way to go before I upload the 
schematics of the base onto the tablet!

***************************************
""")
elif myAnswer == 4:
    print("""Oh god.. That button just alerted the bridge..
They are sending a task force squad to your cell..
I've been locked out of the system! I cannot help, I'm sorry..
They will execute you on site.. GGs bros go next""" )
elif myAnswer == 5:
    print("""This button literally did nothing.
Bro just click button 3 man don't make this difficult for yourself """)


def directionHallwaysOne():
        while True:
            myDirection = input("""Which way do you wanna go? 
 Left or Right? """)
directionHallwaysOne()











    






