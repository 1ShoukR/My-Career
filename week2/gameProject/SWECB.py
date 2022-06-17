from csv import list_dialects
from logging import logProcesses
from tkinter.messagebox import YES
import sys
from turtle import left, right
from time import sleep
import random
from typing import final
from pip import main





# Game Requirements: 
    # Dont make variables that you dont use (review after you are done)
    # Clean print system
    # Ability to replay the game (need to add this) (done)
    # Ability to exit the game (need to add this) (done)
    # Adding/Removing stuff from a list (need to add this)
    # One class at minimum
    # use while loops (This is done)
    # use a dictionary
    # loop and nested loop 
    # make break proof and make user input what i want

### PLAN FOR GAME: 
    # have four hallways
        # at hallway three, give the player an option to add something to their list
    # on the fourth and last hallway, have them fight Cad Baine, the notorious bounty hunter 


# WRITE.MY. ARTICLE. ON. THIS. PROJECT.


## for hallwayone, try the while loop given by Ethan (Works. Shoutout Ethan!!)

## Game Road Map

# mainMenu()
# cutScene()
# panel()
# PanelButtons()
# hallWayOne()
# hallWayTwo()
# armory
# WeaponsRackPanel
# cad bane boss fight (a class)


playerInventory = []

def mainMenu():
    sleep(2)
    print("""
        Star Wars: The Escape from Cad Baine
    """)
    sleep(2)
    print("""
        Welcome to the Main Menu!
    """)
    sleep(1)
    print("""
        This game was created by Rahmin Shoukoohi
    """)
    sleep(2)
    print("""
        Please choose the option you would like!
        1. Play game
        2. Quit game
        """)
    userChoice = input("""
        -------> """)
    if userChoice == "1":
        sleep(1)
        print("""
        *Game is starting*
        """)
        cutScene()
        sleep(2)
        # put a new function in here
    elif userChoice == "2":
        sleep(1)
        print("""
        Goodbye!
        """)
        sleep(2)
        exit(0)
def cutScene():
    sleep(2)
    print("""
        *You wake up in a daze.*
    """)
    sleep(2)
    print("""
        "Oh god what happened.. THE BATTLE! DID WE LOSE?
        I NEED TO FIND OUT NOW
        """)
    sleep(2)
    print("""
        *you try and move but realize your hands are cuffed up*
    """)
    sleep(2)
    print("""
        *As your vision starts to adjust, you realize you're in a cell*
    """)
    sleep(2)
    print("""
        *You feel your head throbbing*
        """)
    sleep(2)
    print("""
        'My head.. god it hurts'
    """)
    sleep(2)
    print("""
        *You hear a beep in your ear*
        """)
    sleep(1)
    print("""
        'what the?! They didn't check for my AI
    """)
    sleep(1)
    print("""
        * You slam your arms against the back wall and break the cuffs*
    """)
    sleep(1)
    aiOn = input("""
        'I need to turn the AI on in order for it to work'
        Do you want to initialize the AI? Type 'yes' or 'no' 
    
    """)
    while aiOn != "yes":
        sleep(1)
        aiOn = input("""
        You cannot move forward without initializing the AI. Please type yes. 
        """)
        sleep(1)
    if aiOn == 'yes':
        sleep(1)
        print("""
        *AI INITIALIZING*
        'Xannder. What happened..
        Where are we? Last I remember was..
        Oh my god... We're in an Imperial Jail Cell..
        Don't worry. I am accessing my database. 
        It's gonna take a minute since I was turned off..'
        """)
        sleep(1)
        panel()

    else:
        sleep(2)
        print("""
        You cannot move forward without initializing your AI
        """)
        sleep(2)
        input("""
        Do you want to initialize the AI? 
        """)
def panel():
    sleep(1)
    print("""
        Look through the cell bars. There should be a panel
        that controls this door. It should have 5 buttons
    """)
    sleep(1)
    print("""
        I sense it is on the right side of the 
        outside of the cell wall
    """)
    sleep(1)
    print("""
        Do you see a panel with 5 buttons?
        type 'yes' or 'no 
    """)
    playerView = input("""
        =====> 
    """)

    while playerView != 'yes':
        sleep(1)
        playerView = input("""
        it is on the left side of the doorframe!
        Once you see it, click the third button on that panel! 
        Do you see the panel with 5 buttons?
        """)

    if playerView == 'yes':
        sleep(1)
        print("""
        Great! Go ahead and click button 3. That should open up the cell door
        """)
        sleep(1)
        panelButtons()
def panelButtons():
    sleep(1)
    myAnswer = input("""
        choose which button you want to press 
        """)
    while myAnswer != "1" and myAnswer != "2" and myAnswer !="3" and myAnswer != "4" and myAnswer !="5":
            sleep(1)
            print("""
            Just choose a number..
            """)
            myAnswer = input("""
            choose which button you want to press 
            """)
    if int(myAnswer) == 1:
        print("""
            You turned the incinerator on. GGs bro nt..
        """)
        mainMenu()
    elif int(myAnswer) == 2:
        print("""
        That button alerted high command.
        They're sending troops to your cell block.. GGs bro... 
        """)
        mainMenu()
    elif int(myAnswer) == 3:
        sleep(2)
        print("""
        That opened the door and shut the security cameras off!
        Now I cannot draw the map of the layout on my secret spy tablet.
        You'll need to guess which way to go before I upload the 
        schematics of the base onto the tablet!
        """)
        sleep(2)
        hallWayOne()
    elif int(myAnswer) == 4:
        sleep(1)
        print("""
        The gas chamber has been activated!
        There is no excape.. GGs bro..
        """)
        mainMenu()
    elif int(myAnswer) == 5:
        sleep(1)
        print("""
        Just click button 3 bro it's really not that hard
        """)
        sleep(3)
        mainMenu()
def hallWayOne():
    sleep(1)
    print("""
        I am still in my initialization stage of my activation. I 
        don't have access to the schematics of the base yet.. 
        You're gonna have to be on your own until I get access to 
        the schematics, It looks like you have
        two choices, Left or Right. Which way do you go?
    """)
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
        hallWayTwo()
    else:
        sleep(2)
        print("""
        ......."""
        ) 
        sleep(2)
        print("""
        You've been captured! You will be executed immediately. GGs 
        """)
        mainMenu()
def hallWayTwo():
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
        or you can fight. Choose wisely though, you have no weapons
        and they are coming out of their own barracks., They will
        be armed!
        """)
    sleep(2)
    playerAction = input("""
        Do you want to fight or hide?
        """)
    sleep(1)
    while playerAction != 'fight' and playerAction != 'hide':
        sleep(1)
        playerAction = input('Choose only hide or fight, quickly!!')
        sleep(1)
    if playerAction == "fight":
        sleep(1)
        print("""
        *Two Stormtroopers round the hallway unaware of you*
        
        Stormtrooper 1: 'Yo bro why was... 
        Wait.. How did he get out?!
        Stormtrooper 2: 'I'm not sure..
        He has a blaster! BLAST EM!
        """)
        sleep(2)
        print("""
            You have been blasted to oblivion
            """)
        sleep(1)
        mainMenu()
    if playerAction == "hide":
        sleep(2)
        print("""
        *Two Stormtroopers round the hallway unaware of you*
        
        Stormtrooper 1: 'Yo bro why was the meatloaf that color..
        stormtrooper 2: 'Idk bro.. but I feel a storm brewing in my tummy..'
        both at the same time: 'OH GOD MY TUMMY'
        *Both storm troopers run to the bathroom
        """)
        sleep(1)
        print("""
        "Damn. Who woulda thought meatloaf would save your life..
        Get in that room thay they just came in from. It Shows up
        as the armory on the schematics! Let's see if we can 
        get you a blaster.
        """)
        sleep(1)
        armory()
def armory():
    sleep(1)
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
    while choice != "yes":
            sleep(1)
            print("""
            It should be to your left! Look harder. The buttons are red 
            """)
            sleep(1)
            choice = input("""
            Do you see the weapons rack? 
            """)
    if choice == 'yes':
        sleep(1)
        print("""
        Great! Go towards the weapons rack
        and click the button to open it!
        """)
        weaponsRackPanel()
def weaponsRackPanel():
    sleep(1)
    while True:
        weaponsRack = input("Do you want to press the weapon rack safety release button? Please type yes or no: ")
        if weaponsRack.lower() == "yes":
            sleep(.5)
            print("""
                INTERCOM: 
                *Weapons door opening up*
                """)
            sleep(1)
            addWeaponFromWeaponsRack()
            break
        elif weaponsRack.lower() == "no":
            sleep(1)
            print("""
            Please just say yes...
            """)
def addWeaponFromWeaponsRack():
    sleep(1)
    print("""
    Nice! You found a blaster rifle!
    Would you like to add it to your inventory?
    """)
    while True:
        addToInv = input(" -----> ")
        if addToInv == "yes":
            playerInventory.append("Blaster Rifle")
            sleep(1)
            print(f"""Your inventory has been updated! Here is your new list
            
            {playerInventory}
            """)
            sleep(1)
            print("""
            Perfect. We are now armed. I feel like we will
            need to use it pretty soon...
            """)
            finalHallWay()
            return addToInv
        elif addToInv != "yes":
            sleep(1)
            print("""
            You don't got a choice buddy.
            PICK. UP. THE. BLASTER. RIFLE. NOW
            """)
def finalHallWay():
    sleep(1)
    print("""
    Now that you are armed, lets head to the docking bay
    to secure you a ship and get the hell outta here.
    My schematics say that the docking bay has one ship currently.
    Lets go ahead and head there right now. 
    """)
    playerDirection = input("""There are two directions.
        Choose either 'left' or 'right' 
        """)
    sleep(1)
    if playerDirection.lower() == 'left':
        sleep(.5)
        print(""" This is a dead end. Turn around.
        """)
        turnAround = input("""
        Turn around? 
        type yes or no """)
        while turnAround != "yes" and turnAround != "no":
            sleep(.5)
            input("""
            invalid option.
            """)
        if turnAround == "yes":
            sleep(.5)
            print("""
            turning around
            """)
            finalHallWay()
        elif turnAround == "no":
            print("""
            So you just wanna be stuck here?
            Unacceptable.
            """)
            finalHallWay()
    if playerDirection.lower() == 'right':
        sleep(1)
        print("""
        There it is! A straight shot to the docking bay!
        LET'S GET OUTTA HERE!!
        """)
        dockingBay()
def dockingBay():
    sleep(1)
    print("""
    There it is! The docking bay!
    """)
    sleep(1)
    print("""
    Wait.. I am detecting a singular heat signature coming in.
    """)
    sleep(1)
    print("""
    No.. it can't be..
    """)
    sleep(1)
    print("""
    *Mysterious figure steps out of the single ship*
    """)
    sleep(1)
    print("""
    'Oh but it is. It is I, CAD BANE, the infamous
    bounty hunter!'
    """)
    sleep(1)
    print("""
    oh my he refers to himself as the best..
    **whispers 'guess he hasn't heard about Boba Fett then'**
    """)
    sleep(1)
    print("""'Oh but I am familiary with Boba Fett.
    Yes that is right, I left your AI within you
    because I bugged it to hear all of your communications
    between you two.'
    """)
    sleep(1)
    print("""'The empire has promised me a pretty penny for your head.
    This was just a fun game that I like playing with my prey.'
    """)
    sleep(1)
    print("""'Now, you must die.'
    """)
    sleep(1)
    print("""
    It's time to use the blaster rifle..
    """)
    finalBoss()
def finalBoss():
    class Character():
        def __init__(self, name, damage, health):
            self.name = name
            self.damage = damage
            self.health = health
        def do_damage(self, enemy):
            damage = self.damage
            enemy.health = enemy.health - damage
            if damage == 0:
                sleep(1)
                print("""""
                    He avoided your attack!""" , (enemy.name, self.name))
            else:
                sleep(1)
                print("%s hurts %s!" % (self.name, enemy.name))
            return enemy.health <= 0
    class enemy():
        def __init__(self, name, damage, health):
            self.name = name
            self.damage = damage
            self.health = health
    cadBain = enemy("Cad Baine", 10, 100)
    playerName = Character("Xannder Reed", 15, 100)
    while playerName.health > 0 and cadBain.health > 0:
        sleep(1)
        print("""
            Cad Bane is about to attack
            Do you wanna fight back or defend? 
            please enter 1 for fight, and 2 for defend. 
        """)
        playerAction = input("===> ")
        if playerAction != "1" and playerAction!= "2":
            print("""
            Wrong input!
            """)
            continue
        elif playerAction == "1":
            playerName.do_damage(cadBain)
            sleep(1)
            print("""
            This is your health: """ 
            + str(playerName.health) )
            sleep(1)
            print("""
                This is Cad Bane's health: 
                """ + str(cadBain.health) )
        elif playerAction == "2":
            sleep(1)
            print("""
            You have defended youself!
            """)
            playerName.health -= cadBain.damage
            print("""""
            This is your health: """ 
            + str(playerName.health) )
            print("""This is Cad Bane's health: 
                """ + str(cadBain.health) )
    if cadBain.health <= 0:
        sleep(1)
        print("""
        You defeated Cad Bane! Get on his
        ship and get out of here fast!
        """)
        sleep(1)
        print("""
        GGs bro! Thanks for playing my game :)
            -Rahmin Shoukoohi
        """)
        mainMenu()
    else: 
        print(1)
        print("""
        Cad Bane has murdered you nt bro hit the range
        """)
        mainMenu()

mainMenu()