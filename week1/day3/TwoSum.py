# Given an array of numbers and a target number, 
# look through the array and see if there 
# are two numbers that will add up to the target number.  
# If there is no solution, return a blank [], if there is a solution, 
# return those numbers in an array/list


from operator import index
from unittest import result


nums = [2, 7, 11, 15]
target = 18

def twoSums(nums, target):
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            result = nums[i]+nums[j]
            if result == target:
                return [i,j]
    return []

print(twoSums(nums,18))
