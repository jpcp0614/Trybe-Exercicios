'''
Dado um array de doces (candies) e um valor inteiro _extra_candies,
onde candies[i] representa o número de doces que a i-ésimo criança tem.
Para cada criança, verifique se há uma maneira de distribuir os doces extras
entre as crianças de forma que ela possa ter o maior número de doces.
Observe que várias crianças podem ter o maior número de doces.
'''


def kid_with_candies(candies, extra_candies):
    max_candies = max(candies)

    return [candy + extra_candies >= max_candies for candy in candies]


def test_kid_with_candies():
    assert kid_with_candies([2, 3, 5, 1, 3], 3) == (
      [True, True, True, False, True]
    )
    assert kid_with_candies([4, 2, 1, 1, 2], 1) == (
      [True, False, False, False, False]
    )
