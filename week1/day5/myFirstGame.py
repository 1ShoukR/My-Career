from csv import list_dialects
from logging import logProcesses
from tkinter.messagebox import YES
import sys
from turtle import left, right
from time import sleep

from pip import main




# Game Requirements: 
    # Dont make variables that you dont use (review after you are done)
    # Clean print system
    # Ability to replay the game (need to add this)
    # Ability to exit the game (need to add this)
    # Adding/Removing stuff from a list (need to add this)
    # One class at minimum
    # use while loops (This is done)
    # introduce list 
    # use a dictionary
    # loop and nested loop 
    # make break proof and make user input what i want

### PLAN FOR GAME: 
    # have four hallways
        # at hallway three, give the player an option to add something to their list
    # on the fourth and last hallway, have them fight Cad Baine, the notorious bounty hunter 



## for hallwayone, try the while loop given by Ethan



# print ("""Hello! My name is Sherry! 
# I'll be your eyes and ears while you're inside the Empire's battlestation 

# ***************************************

# """)
# sleep(3)
# print("Looks like you guys are in cell block three.")
# sleep(3)
playerInventory = []


def mainMenu():

    # sleep(2)
    print("Star Wars: The Escape from Cad Baine")
    # sleep(2)
    print("""
    Welcome to the Main Menu!
    """)
    print("""
    This game was created by Rahmin Shoukoohi
    """)
    # sleep(2)
    print("""
        Please choose the option you would like!
        1. Play game
        2. Quit game
        """)
    userChoice = input("""
        -------> """)
    if userChoice == "1":
        print("""
        *Game is starting*
        """)
        # sleep(2)
        # put a new function in here
    elif userChoice == "2":
        print("""
        Goodbye!
        """)
        # sleep(2)
        exit(0)
def panel():
    print("""
    you need the access panel. It should have 5 buttons
    """)
    playerView = input("""Do you see a panel with 5 buttons? 
    (Yes/no) 
    
    ***************************************
    
    """)

    while playerView != 'yes':
        playerView = input("""
        it is on the left side of the doorframe!
        Once you see it, click the third button on that panel! 
        Do you see the panel with 5 buttons?""")

    if playerView == 'yes':
        print("""
        Great! Go ahead and click button 3. That should open up the cell door
        """)
    elif playerView != 'yes':
        print("""
        You wanna be stuck here forever? LOOK HARDER!!
        """)
        input("""
        Do you see the panel with 5 buttons?
        (yes/no) 
        """)

def panelButtons():
    myAnswer = input("""
        choose which button you want to press 
        """)
    while myAnswer != "1" and myAnswer != "2" and myAnswer !="3" and myAnswer != "4" and myAnswer !="5":
            print("Just choose a number.. ")
            myAnswer = input("""
            choose which button you want to press 
            """)
    return myAnswer

def cutScene():
    # sleep(2)
    print("""
    *You wake up in a daze.*
    """)
    # sleep(2)
    print("""
    *you try and move but realize your hands are cuffed up*
    """)
    # sleep(2)
    print("""
    *As your vision starts to adjust, you realize you're in a cell*
    """)
    # sleep(2)
    print("""
    'My head.. god it hurts'
    """)
    # sleep(2)
    print("""
    'what the?! They didn't check for my AI
    """)
    aiOn = input("""
    'I need to turn the AI on in order for it to work'
    Do you want to initialize the AI? """)
    while aiOn != "yes":
        aiOn = input("""
        You cannot move forward without initializing the AI. Please type yes. 
        """)
    if aiOn == 'yes':
        # sleep(2)
        print("""
        *AI INITIALIZING*
        'Greetings. Thank you for initializing me.'
        """)
    elif aiOn != 'yes':
        # sleep(2)
        print("""
        You cannot move forward without initializing your AI
        """)
        # sleep(2)
        input("""
        Do you want to initialize the AI? 
        """)
def hallWayOne():
    print("You have two choices: Left or Right. Which way do you go? ")
    choice = input("---> ")
    if choice == 'right':
        print("""
        Phew that was a close one.."""
        )
        # sleep(2)
        print("""
        The schematics of the base have been uploaded to my tablet
        """)
        # sleep(2)
        print("""
        You're lucky.. Had you have turned left, a squad of stromtroopers would have
        captured you and 'taken care of you' 
        """)
        # sleep(2)
        print("""
        Keep going forward. The armory is just ahead.
        Best to get you some blasters...
        """)
    else:
        # sleep(2)
        print("""
        ......."""
        ) 
        # sleep(2)
        print("You've been captured! You will be executed immediately. GGs ")
        mainMenu()
def armory():
    print("""
        Welcome to the armory
    """)
    # sleep(2)
    print("""
        According to the schematics of the armory,
    """)
    # sleep(1)
    print("""
        There should be a weapons rack towards the left side of the room.
    """)
    # sleep(1)
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
            # sleep(2)
            print("""
            Keep looking! It is not on the right side of the room,
            or in front of you. It is to the left!
            """)
            choice = input(" ----> ")
def weaponsRackPanel():
    while True:
        weaponsRack = input("Do you want to press the weapon rack safety release button? Please type yes or no: ")
        if weaponsRack.lower() == "yes":
            # sleep(.5)
            print("""
                INTERCOM: 
                *Weapons door opening up*
                """)
            return weaponsRack
        elif weaponsRack.lower() == "no":
            print("""
            Please just say yess...
            """)
def hallWayTwo():
    print("""
        Nice! You have aquired a blaster pistol from the weapons rack
        """)
    # sleep(2)
    print("""
        There is another hallway coming up in front of you.
        Be careful. There is a barracks system attached right
        to this hallway. Enemies can come out whenever 
        """)
    # sleep(2)
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
        print("""
        *Two Stormtroopers round the hallway unaware of you*
        
        Stormtrooper 1: 'Yo bro why was... 
        Wait.. How did he get out?!
        Stormtrooper 2: 'I'm not sure..
        He has a blaster! BLAST EM!
        YOU HAVE DIED
        """)
        mainMenu()
        # Make another function for the "Fight" scene and invoke it here
    elif playerAction == "hide":
        print("""
            Get behind that pillar to the right!
            That is the only bit of cover I can see for you.
            """)
        print("""
            *Two Stormtroopers round the hallway unaware of you*
            Stormtrooper 1: 'Yo bro why was the meatloaf that color..'
            Stormtrooper 2: 'I dont know bro.. I was looking at it too..'
            Both stormtroopers: *stomach starts rumbling*
            Stormtrooper 1: 'You would think they'd put toilets in these suits..'
            *** Both run to the bathroom ** 
            """)
        print("""
        Perfect! Looks like that meatloaf saved your life..
        I can see from the schematics on my tablet that the room
        the stormtroopers came out from was the 'armory'!
        lets go in there and see if we can get you some weapons!
        """)
def addWeaponFromWeaponsRack():
    print("""
    Nice! You found a blaster rifle!
    Would you like to add it to your inventory?
    """)
    addToInv = input(" -----> ")
    if addToInv == "yes":
        playerInventory.append("Blaster Rifle")
        print(f"""Your inventory has been updated! Here is your new list
        
        {playerInventory}""")
    

# This is what I am working on now



mainMenu()
cutScene()
panel()

# hallWayTwo()
# wertawerawerwerageqwrgwer
# Need to fix above while loop
## Got the above while loop to work. Shoutout Ethan he is the goat!


# panel()

# myAnswer = int(input("What button do you wanna press? "))
myAnswer = panelButtons()

if int(myAnswer) == 1:
    print("You turned the incinerator on. GGs bro nt..")
    mainMenu()
elif int(myAnswer) == 2:
    print("""
    That button alerted high command.
    They're sending troops to your cell block.. GGs bro... 
    """)
    mainMenu()
elif int(myAnswer) == 3:
    print("""
    That opened the door and shut the security cameras off!
    Now I cannot draw the map of the layout on my secret spy tablet.
    You'll need to guess which way to go before I upload the 
    schematics of the base onto the tablet!

    ***************************************
""")      
    hallWayOne()
    hallWayTwo()
    armory()
    weaponsRackPanel()
    addWeaponFromWeaponsRack()





elif int(myAnswer) == 4:
    print("""
    Oh god.. That button just alerted the bridge..
    They are sending a task force squad to your cell..
    I've been locked out of the system! I cannot help, I'm sorry..
    They will execute you on site.. GGs bros go next
    """ )
    mainMenu()
elif int(myAnswer) == 5:
    print("""
    This button literally did nothing.
    Bro just click button 3 man don't make this difficult for yourself 
    """)
    mainMenu()





#The while loop isnt working here
## Got it to work poggies






#The while loop is not working for some reason
## Got it to work poggies

# Make another function for the "Hide" scene and invoke it here
