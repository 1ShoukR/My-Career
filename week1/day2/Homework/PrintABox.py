print("Here is a box made of squares. Write how big you want the box to be. ")

box = int(input("how big is the box?"))

for x in range(box):
    print("*"*(box))