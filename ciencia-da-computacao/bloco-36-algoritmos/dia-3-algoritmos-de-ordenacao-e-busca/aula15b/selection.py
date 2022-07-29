# Complexidade: O(n^2)


def selection_sort(input_list):
    for i in range(len(input_list)):
        min_i = i

        for j in range(i + 1, len(input_list)):
            if input_list[j] < input_list[min_i]:
                min_i = j

        input_list[i], input_list[min_i] = input_list[min_i], input_list[i]

    return input_list
