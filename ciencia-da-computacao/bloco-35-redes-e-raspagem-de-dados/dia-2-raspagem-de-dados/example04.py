import requests
from parsel import Selector


URL = 'https://books.toscrape.com/'


# response = requests.get(URL)
# print(response.status_code)  # ok
# print(response.text)
# selector = Selector(text=response.text)
# print(selector.css('img.thumbnail').getall()[0])  # primeira imagem


def requestUrl(URL):
    response = requests.get(URL)
    return Selector(text=response.text)


def selectsImgs(URL, thumbnail):
    response = requestUrl(URL)
    selector_css = response.css(f'img.{thumbnail}').getall()
    print('As imagens são:\n')
    for thumbnail in selector_css:
        print(f'{thumbnail}')


# selectsImgs(URL, 'thumbnail')


def selectDivContainer(URL, container):
    response = requestUrl(URL)
    # selector_css = response.css(f'div.{container}').get()
    selector_url = response.css(f'div.{container} a::attr(href)').get()
    # print('Div:\n')
    # print(f'{selector_url}')
    return selector_url


# selectDivContainer(URL, 'image_container')


def selectThumbnailTitle(URL, container, thumbnail):
    requestUrl(URL)
    thumb_url = selectDivContainer(URL, container)

    thumbnail_request = requests.get(URL + thumb_url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css(f'div.{thumbnail}').get()
    print(book_title)


# selectThumbnailTitle(URL, 'image_container', 'product_main h1')


def selectThumbnailTitleWithLoop(URL, img_container):
    response = requestUrl(URL)

    selector = response.css(f'div.{img_container} a::attr(href)').getall()
    for url in selector:
        thumbnail_request = requests.get(URL + url)
        thumbnail_selector = Selector(text=thumbnail_request.text)
        book_title = thumbnail_selector.css('div.product_main h1').get()
        print(book_title)


selectThumbnailTitleWithLoop(URL, 'image_container')
