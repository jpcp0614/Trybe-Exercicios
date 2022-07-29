# Complexidade de tempo: O(n * log n)
# Teorema Mestre: define complexidade de algoritmos recursivos


def merge_sort(input_list: list):
    if len(input_list) <= 1:
        return input_list

    mid = len(input_list) // 2
    left, right = merge_sort(input_list[:mid]), merge_sort(input_list[mid:])
    return merge(left, right, input_list.copy())


def merge(left: list, right: list, merged: list):
    left_cursor, right_cursor = 0, 0

    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return merged
