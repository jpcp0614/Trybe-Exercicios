import requests
from parsel import Selector
import time


def fetch_html(url: str) -> str:
    time.sleep(1)  # espera um pouco pra fazer a próxima request
    try:
        res = requests.get(url, timeout=3)  # se demorar mais de 3s, quebra
        res.raise_for_status()
    except (requests.HTTPError, TimeoutError):
        return ""
    return res.text


def parse_quotes_html(html_content: str) -> list[dict]:
    selector = Selector(html_content)
    result = list()
    for quote in selector.css('div.col-md-8 > div.quote'):
        content = quote.css('span.text ::text').get()
        author = quote.css('span small.author ::text').get()
        tags = quote.css('div.tags a.tag ::text').getall()
        quote_data = {"content": content, "author": author, "tags": tags}
        result.append(quote_data)
    return result


def scrape_all_quotes() -> list[dict]:
    BASE_URL = 'https://quotes.toscrape.com/'
    quotes_html = fetch_html(BASE_URL)
    quotes_data = parse_quotes_html(quotes_html)

    return quotes_data
