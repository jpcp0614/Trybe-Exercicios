from challenge import check_sum
from timeit import timeit
import random


def main():
    print("Gerando entrada pequena")
    numbers = random.sample(range(1, 10000), 1000)
    numbers.sort()
    target = random.randint(1000, 10000)

    print("Iniciando entrada pequena")
    print(
      "> > > tempo entrada pequena: "  # 0.002664 -> 6.338e-05
      + str(timeit(lambda: check_sum(numbers, target), number=1))
    )

    print("Gerando entrada GRANDE")
    numbers = random.sample(range(1, 100000000), 10000000)
    numbers.sort()
    target = random.randint(1000, 1000000)

    print("Iniciando entrada GRANDE")
    print(
      "> > > tempo entrada GRANDE: "  # 22.6372 -> 3.6666
      + str(timeit(lambda: check_sum(numbers, target), number=1))
    )


main()
