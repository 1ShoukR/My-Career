import math


# Assignment 1 - Write an app which asks users
#  for the input and then prints the factorial for that number.

# def userInputFactorial():
#     number = int(input("what would you like the number to be? "))
#     Factor = math.factorial(number)
#     print(Factor)
# userInputFactorial()


# Palindrome

# Create an app which detects if the input word is a palindrome or not.
# Palindromes are strings which when read from left to right are same as right to left


# def palindrome():
#      userWord = input("please input word you want to find ")
#      reverseWord = userWord[::-1]
#      if userWord.lower() == reverseWord.lower():
#          return print("Your word is a palindrome! ")
#      return print("this is not a palindrome are you trolling? ")
# palindrome()

# Prime or Not
#Take input from the user and find out if that number is prime or not.

# def primeOrNot():
#  userNumber = int(input("please input the number that you wish to see if it is prime or not. "))
#  if userNumber > 1:
#         for i in range(2,userNumber):
#             if (userNumber % i) == 0:
#                 print(userNumber, 'is not a prime number.')
#                 break
#             else:
#                 print(userNumber, 'is a prime number')
#         else:
#                 print("That is not a prime number")
# primeOrNot()