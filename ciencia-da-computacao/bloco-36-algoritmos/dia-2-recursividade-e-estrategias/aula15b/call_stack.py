def first(param):
    print(f"Primeira: {param}")
    f_result = second(param)
    return f_result


def second(param):
    print(f"Segunda: {param}")
    s_result = third(param)
    return s_result


def third(param):
    print(f"Terceira: {param}")
    return "Fim!"

# - - - - - - - - - - - - - - - - -


print(first("Fantástica Fábrica de Devs"))
