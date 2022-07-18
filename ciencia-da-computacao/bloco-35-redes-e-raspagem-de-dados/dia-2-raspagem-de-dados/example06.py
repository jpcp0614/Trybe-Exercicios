import requests
from parsel import Selector


URL = "http://books.toscrape.com/catalogue"
NEXT_PAGE = 'page-1.html'


def selectAllBooksInPages(URL, NEXT_PAGE):

    while NEXT_PAGE:
        response = requests.get(URL + NEXT_PAGE)
        selector = Selector(text=response.text)

        for book in selector.css('.product_pod'):
            title = book.css('h3 a::attr(title)').get()
            price = book.css('.price_color::text').get()
            print(f'{title} - {price}')


selectAllBooksInPages(URL, NEXT_PAGE)
