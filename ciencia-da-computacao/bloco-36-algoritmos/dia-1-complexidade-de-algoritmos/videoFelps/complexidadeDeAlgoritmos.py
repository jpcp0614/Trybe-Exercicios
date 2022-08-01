'''
import time


def check_sum(numbers, target):
    left_pointer = 0
    right_pointer = len(numbers) - 1

    while left_pointer < right_pointer:
        test_sum = numbers[left_pointer] + numbers[right_pointer]
        if test_sum == target:
            return print("soma encontrada!")
        if test_sum < target:
            left_pointer += 1
        else:
            right_pointer -= 1

    return False


def check_sum_quad(numbers, target):
    for index, num in enumerate(numbers):  # N = len(numbers)
        for num2 in numbers[index + 1:]:  # N
            if num + num2 == target:
                return print("soma encontrada!")
    return False


if __name__ == "__main__":
    # 5000 números
    five_thousand = list(range(0, 5000))
    # 10.000 números
    ten_thousand = list(range(0, 10000))
    # 20.000 números
    twenty_thousand = list(range(0, 20000))

    print('\n')
    start_time = time.time()
    check_sum(five_thousand, 9900)
    print(f"N -> 5 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(five_thousand, 9900)
    print(f"N² -> 5 mil: {(time.time() - start_time)} segundos")
    print('\n')
    start_time = time.time()
    check_sum(ten_thousand, 19000)
    print(f"N -> 10 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(ten_thousand, 19000)
    print(f"N² -> 10 mil: {(time.time() - start_time)} segundos")
    print('\n')
    start_time = time.time()
    check_sum(twenty_thousand, 39000)
    print(f"N -> 20 mil: {(time.time() - start_time)} segundos")
    start_time = time.time()
    check_sum_quad(twenty_thousand, 39000)
    print(f"N² -> 20 mil: {(time.time() - start_time)} segundos")
'''

one_thousand = list(range(0, 1000))


# FUNÇÕES
# Complexidade: O(1) -> contante
def get_first_number(input_list):
    return input_list[0]


# Complexidade: O(n) -> linear / O(1) -> espaço
def list_sum(input_list):
    sum = 0
    for number in input_list:
        sum += number
    return sum


# Complexidade: O(n) -> tempo / O(n) -> espaço >> Linear
def squared_list(input_list):
    new_list = list()
    for number in input_list:
        new_list.append(number ** 2)
    return new_list


# Complexidade: O(n^2) -> tempo >> Quadrática
def show_with_all(input_list):
    for x in input_list:  # O(n)
        for y in input_list:  # O(n)
            print(x, y)


# PRINTS
print(get_first_number(one_thousand))
print(list_sum(one_thousand))
print(squared_list(one_thousand))
show_with_all(one_thousand)
