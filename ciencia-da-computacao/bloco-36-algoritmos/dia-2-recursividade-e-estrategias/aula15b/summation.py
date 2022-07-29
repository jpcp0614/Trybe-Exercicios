def summation(n):
    if n == 0:
        return 0
    else:
        return n + summation(n-1)


def test_summation():
    assert summation(5) == 15
    assert summation(6) == 21
    assert summation(7) == 28
    assert summation(8) == 36
    assert summation(100) == 5050
