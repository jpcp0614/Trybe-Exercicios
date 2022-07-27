# Complexidade constante: O(1)

def sum_array(numbers):
    sum = 0
    for i in numbers:
        sum += i
    return sum


print(sum_array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
