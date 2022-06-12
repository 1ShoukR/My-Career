discOrders = []

def prepDiscRef ():
    name = input('What is the name?\n')
    speed = int(input("What do you want the disc speed to be?\n"))
    glide = int(input("What do you want the disc speed to be?\n"))
    turn = int(input("What do you want the disc speed to be?\n"))
    fade = int(input("What do you want the disc speed to be?\n"))
    


    name = {speed,glide,turn,fade}
    discOrders.append(name)
    print(discOrders)

prepDiscRef() 