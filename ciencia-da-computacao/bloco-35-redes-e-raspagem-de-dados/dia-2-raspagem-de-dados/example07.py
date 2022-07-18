from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"
NEXT_PAGE = 'page-1.html'


# Vamos testar com a primeira página
def bookPage():
    response = requests.get(URL_BASE + NEXT_PAGE)
    return Selector(text=response.text)


# Recupera o atributo href do primeiro elemento que combine com o seletor
def bookUrl(product):
    book_page = product.css("h3 a::attr(href)").get()
    return book_page


def descriptionBook(product):
    productBook = bookUrl(product)
    response = requests.get(URL_BASE + productBook)  # página de descrição
    detail_selector = Selector(text=response.text)
    description = detail_selector.css(
      '#product_description ~ p::text').get()
    return description


def selectAllBooksInPages(URL, NEXT_PAGE):
    while NEXT_PAGE:
        response = requests.get(URL + NEXT_PAGE)
        selector = Selector(text=response.text)

        for product in selector.css('.product_pod'):
            title = product.css('h3 a::attr(title)').get()
            price = product.css('.price_color::text').get()
            print(f'{title} - {price}')

            print(descriptionBook(product))


selectAllBooksInPages(URL_BASE, NEXT_PAGE)
