# # Guess a number excerize 1
# secretNumber = 5
# print("I am thinking of a number between 1 and 10")

# while True:
#     guess = int(input("what is your guess? "))

#     if guess == secretNumber:
#         print("you got it! ")
#         break
#     elif guess != secretNumber:
#         print("nope, Try again. ")


#Excersize 2

# secretNumber = 5
# while True:
#     guess = int(input("what's the number? "))
#     if guess == secretNumber:
#         print("you win!")
#         break
#     elif guess < secretNumber:
#         print("Too low, try again!")
#     elif guess > secretNumber:
#         print("too high, try again!")


#Step 3
import random
my_random_number = random.randint(1, 10) 
guessleft = 5


while True:
    print(f"You have {guessleft} guesses left")
    guess = int(input("what is the number"))
    if guess == my_random_number:
        print("you win!")
        break
    elif guess < my_random_number:
        print("too low, try again!")
        guessleft -= 1
    elif guess > my_random_number:
        print("too high, try again!")
        guessleft -= 1
    if guessleft == 0:
        print("You lose. Sorry.. ")








