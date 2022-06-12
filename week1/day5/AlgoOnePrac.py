# // Write a function that takes in a string of lowercase letters
# // and returns the index of the string's first non-repeating character.
# // If the input string does not have any non-repeating characters,
# // your function should return -1.
# Optimal way = o(n)

import sys
import string


## Not Done yet!!

# letters = input("Please enter your character ")
# charCount = {}

# for letter in letters:
#     if letter not in charCount:
#         charCount[letter] = 0
#     charCount[letter] += 1
# for key in charCount:
#     if key in charCount[key]:
#         print(key)

# print(charCount)


# redShirtsSpeeds = [5, 5, 3, 9, 2]
# blueShirtsSpeeds = [3, 6, 7, 2, 1]
# blueAndRed = []
# fastestSpeed = 0

# def tandemBike(redShirtsSpeeds, blueShirtsSpeeds, fastestSpeed):
#     for i in range(len(redShirtsSpeeds)):
#         blueShirtsSpeeds = redShirtsSpeeds + blueShirtsSpeeds
#         blueAndRedTwo = sorted(blueAndRed)
#         blueAndRedTwo.reverse()
#     for i in range(len(redShirtsSpeeds)):
#         fastestSpeed = fastestSpeed + blueAndRedTwo[i]
#     print(fastestSpeed)
# tandemBike(redShirtsSpeeds, blueShirtsSpeeds, fastestSpeed)



def tandem(list1,list2,fastest):
    list1 = [1,2,3,4]
    list2 = [2,3,7,8]
        # [8,7,3,2]
    speed = []
    if fastest:
        list2.reverse()
    for i in range(len(list1)):
        # val = list1[i]
        # val2 = list2[i]
        if list1[i] > list2[i]:
            speed.append(list1[i])
        print(speed)
        if list1[i] == list2[i]:
            speed.append(list1[i])
        print()
        if list1[i] < list2[i]:
            speed.append(list2[i])
        print()
    return sum(speed)




