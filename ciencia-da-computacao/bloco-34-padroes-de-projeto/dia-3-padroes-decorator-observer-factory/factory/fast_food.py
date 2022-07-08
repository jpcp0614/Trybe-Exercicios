from combo import Combo
from items import (
  ItemHamburger,
  ItemSorvete,
  ItemFritas,
  ItemRefrigerante,
)


class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboFeliz(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboGelado(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())


class ComboFritas(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())


if __name__ == "__main__":
    combo_escolhido = input(
        "Olá, qual seu pedido? [ComboTudo, ComboFeliz, ComboGelado]: "
    )

    # Para transformar uma string em código executável
    # basta usar o método eval()
    # Equivalente a chamar ComboTudo(), ComboFeliz(), ComboGelado()
    combo = eval(combo_escolhido)()

    print(f"\nCriando o combo {type(combo).__name__}.")
    print(f"Combo fabricado com os seguintes itens: {combo.exibe_itens()}")
