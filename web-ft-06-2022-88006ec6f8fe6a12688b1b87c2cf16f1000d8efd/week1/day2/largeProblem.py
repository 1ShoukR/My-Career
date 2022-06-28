import random

def greeting():
    print("Welcome to my number guessing game")

def errorMessage():
    print("That is not my number")

def guessNumber():
    number = random.randint(1, 10)
    chances = 3
    while True:
        if(chances == 0):
            print(f"You ran out of chances, sorry! The Number was {number}")
            break
        print(f"You have {chances} chances left!")
        choice = int(input("Guess a number between 1 and 10\n"))
        if(choice > number):
            chances-=1
            errorMessage()
            print("Too high")
        if(choice < number):
            chances-=1
            errorMessage()
            print("Too low")
        if(choice == number):
            print(f"Hooray, you guessed the correct number of {number}")
            break
playAgain = ""
while (playAgain.lower() != "n"):
    guessNumber()
    playAgain = input("Want to play again?\n")