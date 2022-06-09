# Square the numbers in this list
from os import remove
from tarfile import LENGTH_NAME
from unicodedata import name


numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]

# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]

# Add new item to list after a specified item
# list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]

# Replace list's item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]

# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]

#1


# for item in numbers:
 #   print(item**2)


#2

# for i in list1:
#   if i == "":
#       list1.remove("")
# print(list1)





# Add new item to list after a specified item
# list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# output = [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]

# #3 
# list2[2][2].append(7000)
# print(list2)



name = "rahmin Shoukoohi"
dictionary = {"key": "value"}

for thing in dictionary:
    print()
for letter in name:
    print(letter, end="")

