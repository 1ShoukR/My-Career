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




## for hallwayone, try the while loop given by Ethan






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
    print("""
    it is on the left side of the doorframe!
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
elif int(myAnswer) == 2:
    print("""
    That button alerted high command.
    They're sending troops to your cell block.. GGs bro... 
    """)
    exit(0)
elif int(myAnswer) == 3:
    print("""
    That opened the door and shut the security cameras off!
    Now I cannot draw the map of the layout on my secret spy tablet.
    You'll need to guess which way to go before I upload the 
    schematics of the base onto the tablet!

***************************************
""")      
elif int(myAnswer) == 4:
    print("""
    Oh god.. That button just alerted the bridge..
    They are sending a task force squad to your cell..
    I've been locked out of the system! I cannot help, I'm sorry..
    They will execute you on site.. GGs bros go next
    """ )
    exit(0)
elif int(myAnswer) == 5:
    print("""
    This button literally did nothing.
    Bro just click button 3 man don't make this difficult for yourself 
    """)
    exit(0)



def hallWayOne():
    print("You have two choices: Left or Right. Which way do you go? ")
    choice = input("---> ")
    if choice == 'right':
        print("""
        Phew that was a close one.."""
        )
        sleep(2)
        print("""
        The schematics of the base have been uploaded to my tablet
        """)
        sleep(2)
        print("""
        You're lucky.. Had you have turned left, a squad of stromtroopers would have
        captured you and 'taken care of you' 
        """)
        sleep(2)
        print("""
        Keep going forward. The armory is just ahead.
        Best to get you some blasters...
        """)
    else:
        sleep(2)
        print("""
        ......."""
        ) 
        sleep(2)
        print("You've been captured! You will be executed immediately. GGs ")
        exit(0)
hallWayOne()


#The while loop isnt working here
## Got it to work poggies


def armory():
    print("""
        Welcome to the armory
    """)
    sleep(2)
    print("""
        According to the schematics of the armory,
    """)
    sleep(1)
    print("""
        There should be a weapons rack towards the left side of the room.
    """)
    sleep(1)
    print("""
        Look to your left. Do you see the weapons rack?
    """)
    choice = input(" ----> ")
    while True:
        if choice == 'yes':
            print("""
        Great, Go to that weapons rack. 
        There should be a panel to release the weapons rack safety latch
        """)
            return choice
        else:
            sleep(2)
            print("""
            Keep looking! It is not on the right side of the room,
            or in front of you. It is to the left!
            """)
            choice = input(" ----> ")
armory()


#The while loop is not working for some reason
## Got it to work poggies


def weaponsRackPanel():
    while True:
        weaponsRack = input("Do you want to press the weapon rack safety release button? Please type yes or no: ")
        if weaponsRack.lower() == "yes":
            sleep(.5)
            print("""
                INTERCOM: 
                *Weapons door opening up*
                """)
            return weaponsRack
        elif weaponsRack.lower() == "no":
            print("""
            Please just say yess...
            """)
weaponsRackPanel()












def hallWayTwo():
    print("""
        Nice! You have aquired a blaster pistol from the weapons rack
        """)
    sleep(2)
    print("""
        There is another hallway coming up in front of you.
        Be careful. There is a barracks system attached right
        to this hallway. Enemies can come out whenever 
        """)
    sleep(2)
    print("""
        Oh no.. The door opened up..
        I see two heat signatures coming through the door,
        You have to be quick. You can either hide,
        or you can fight. If there are only two of them,
        and you take them out, you may be able to upgrade your weapon.
        """)
    playerAction = input("""
        Do you want to fight or hide?
        """)
    while playerAction != 'fight' and playerAction != 'hide':
        playerAction = input('Choose only hide or run, quickly!!')
    if playerAction == "fight":
        fightSceneOne()
        # Make another function for the "Fight" scene and invoke it here
    elif playerAction == "hide":
        print("""
            Get behind that pillar to the right!
            That is the only bit of cover I can see for you.
            """)
        hideSceneOne()
            # Make another function for the "Hide" scene and invoke it here

def fightSceneOne():
    print("""
    They have auto blasters! Be accurate and hit your shots!
        """)
    print("""
        *Two Stormtroopers round the hallway unaware of you*
        """)
    sleep(2)
    print("""
        Stormtrooper 1: 'Yo bro why was... Wait.. How did he get out?!
        """)
    sleep(1.5)
    print("""
    Stormtrooper 2: 'I'm not sure..
        He has a blaster! BLAST EM!
        """)
def hideSceneOne():
    print("""
    *Two stormtroopers round the hallway unaware of you*
        """)
    sleep(1.5)
    print("""
    Stormtrooper 1: 'Yo bro why was Darth Vader being all moody today'
        """)
    sleep(.5)
    print("""
        'Bro I have no clue whatsoever he just seemed like an absolute b**** toda..
        """)
    sleep(.5)
    print('''

        *You peek out of your hiding space and see both stormtroopers being force choked out of the blue*

        ''')

hallWayTwo()