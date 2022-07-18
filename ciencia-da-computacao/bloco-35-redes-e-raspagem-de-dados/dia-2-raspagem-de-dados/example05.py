# from example04 import requestUrl
import requests
from parsel import Selector


URL = 'https://books.toscrape.com/'


def selectThumbnailTitleWithLoop():
    response = requests.get("http://books.toscrape.com/")
    selector = Selector(text=response.text)

    for product in selector.css('.product_pod'):
        title = product.css('h3 a::attr(title)').get()
        price = product.css('.price_color::text').get()
        print(f'{title} - {price}')


selectThumbnailTitleWithLoop()
