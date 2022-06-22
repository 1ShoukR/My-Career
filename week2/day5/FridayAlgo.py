
# Write a function that takes in a non-empty 
# array of integers and returns an 
# array of the same length, 
# where each element in the o
# utput array is equal to the product of 
# every other number in the input array


#### Need to practice this over the weekend. 
#### Practice this + more algorithims on saturday

###### EVERY SINGLE ALGORITHIM GIVEN WITH AN ARRAY 
# SHOUL BE ORGANZIED FROM RIGHT TO LEFT 

# o(n Squared) Solution

numbers = [5, 1, 4, 2]


def arrayOfNumbers(numbers):
    product = [1 for _ in range(len(numbers))]
    for i in range(len(numbers)):
        runningProduct = 1
        for j in range(len(numbers)):
            if i != j:
                runningProduct *= numbers[j]
        
    product[i] = runningProduct
    return product


# o(n) Solution







