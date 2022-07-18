from parsel import Selector
import requests

URL = (
  "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")

response = requests.get(URL)
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
