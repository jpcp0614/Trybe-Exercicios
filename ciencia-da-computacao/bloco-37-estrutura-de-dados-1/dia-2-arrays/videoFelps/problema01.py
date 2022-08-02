'''
Dado um array de números, verificar se o array possui elemento duplicado.
A função deve retornar True se algum valor aparece pelo menos duas vezes
no array e False caso todos os elementos sejam distintos
'''


def contains_duplicate(nums):
    nums.sort()

    for index in range(len(nums) - 1):
        if nums[index] == nums[index + 1]:
            return True

    return False


def test_contains_duplicate():
    assert contains_duplicate([1, 2, 3, 4, 5]) is False
    assert contains_duplicate([1, 5, 3, 4, 2, 5]) is True
    assert contains_duplicate([1, 2, 3, 12, 13, 14, 15]) is False
    assert contains_duplicate([1, 2, 3, 3, 13, 14, 15, 3]) is True
