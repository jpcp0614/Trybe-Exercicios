# Complexidade: O(n^2)


def bubble_sort(input_list):
    has_swapped = True
    num_of_iterations = 0

    while has_swapped:
        has_swapped = False

        for i in range(len(input_list) - num_of_iterations - 1):
            if input_list[i] > input_list[i + 1]:
                input_list[i], input_list[i + 1] = (
                  input_list[i + 1], input_list[i]
                )
                has_swapped = True

        num_of_iterations += 1

    return input_list
