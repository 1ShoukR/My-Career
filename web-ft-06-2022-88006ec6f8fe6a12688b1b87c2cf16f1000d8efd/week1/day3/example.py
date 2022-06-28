# Square the numbers in this list
numbers = [1, 2, 3, 4, 5, 6, 7]
# Output [1, 4, 9, 16, 25, 36, 49]

# Remove all empty strings in this list
list1 = ["Mike", "", "Emma", "Kelly", "", "Brad"]
# output ["Mike", "Emma", "Kelly", "Brad"]

# Add new item to list after a specified item
list2 = [10, 20, [300, 400, [5000, 6000], 500], 30, 40]
# output [10, 20, [300, 400, [5000, 6000, 7000], 500], 30, 40]
list2[2][2].append(7000)

# Replace list’s item with new value if found
list3 = [5, 10, 15, 20, 25, 50, 20]
# output [5, 10, 15, 200, 25, 50, 20]

# Remove all occurrences of a specific item from a list.
list4 = [5, 20, 15, 20, 25, 50, 20]
# output [5, 15, 25, 50]

def remove(list,val):
    return [i for i in list if i!= val]

for i in list4:
    if i == 20:
        list4.remove(i)
print(list4)
# res = remove(list4, 20)
# print(res)

# name = "Joe Frasier"
# dictionary = {"key": "value"}

# for thing in dictionary:
#     print(dictionary[thing])
# [-8,-6,1,2,3,5,6,12]

