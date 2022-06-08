import random
from tkinter.messagebox import NO, YES

coin = ["Heads","Tails"]

flip = random.choice(coin)

flipCoin = input("Would you like to flip the coin? Type yes to see what ya get! ")




if flipCoin == YES:
    print("You flipped the coin! The coin has landed on " + flip)
else:
    print("You flipped the coin!The coin has landed on " + flip)



    


    
