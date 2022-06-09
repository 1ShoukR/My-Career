


array = [5, 1, 22, 25, 6, -1, 8, 10]

sequence = [1, 6, -1, 10]

def isValidSubsequence(array, sequence):
    for i in sequence:
        if i in array:
            continue
        else:
            return False
    return True
print(isValidSubsequence(array, sequence))