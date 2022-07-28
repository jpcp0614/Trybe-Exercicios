def iterative_factorial(n):
    factorial = 1
    while n > 0:
        factorial *= n
        n -= 1
    return factorial


print(iterative_factorial(5))
