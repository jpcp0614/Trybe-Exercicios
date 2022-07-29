# Complexidade: O(n^2)


def insertion_sort(input_list):
    for index, value in enumerate(input_list):
        curr_position = index

        while curr_position > 0 and input_list[curr_position - 1] > value:
            input_list[curr_position] = input_list[curr_position - 1]
            curr_position -= 1

        input_list[curr_position] = value

    return input_list
