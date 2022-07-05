class Grafico:
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self, tipo_de_grafico):
        if tipo_de_grafico == "GraficoBarras":
            self.__desenharGraficoBarras()

        if tipo_de_grafico == "GraficoRadar":
            self.__desenharGraficoRadar()

        if tipo_de_grafico == "GraficoPizza":
            self.__desenharGraficoPizza()

    def __desenharGraficoBarras(self):
        print("Lógica para gráfico de barras")

    def __desenharGraficoRadar(self):
        print("Lógica para gráfico radar")

    def __desenharGraficoPizza(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = Grafico([1, 2])
grafico_1.desenhar("GraficoRadar")
