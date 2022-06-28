

def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

# def factorial(n):
#     print(n)
#     res = 1
     
#     for i in range(2, n+1):
#         print(i, " this is i")
#         res *= i
#         print(res," this is res")
#     return res
 
# factorial(5)