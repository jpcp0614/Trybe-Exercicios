from datetime import datetime
import requests
from parsel import Selector
import time
import uuid


def fetch_html(url: str) -> str:
    time.sleep(1)  # espera um pouco pra fazer a próxima request
    try:
        res = requests.get(url, timeout=10)  # se demorar mais de 3s, quebra
        res.raise_for_status()
    except requests.HTTPError:
        return ""
    return res.text


def parse_quotes_html(html_content: str) -> list[dict]:
    selector = Selector(html_content)
    result = list()
    for quote in selector.css('div.col-md-8 > div.quote'):
        content = quote.css('span.text ::text').get()
        author = quote.css('span small.author ::text').get()
        tags = quote.css('div.tags a.tag ::text').getall()
        quote_data = {
          "id": uuid.uuid4().hex,
          "content": content,
          "author": author,
          "tags": tags,
          "scraped_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
          }
        result.append(quote_data)
    return result


def parse_next_url(html_content: str) -> str:
    selector = Selector(html_content)
    return selector.css('ul.pager li.next a ::attr(href)').get()


def scrape_all_quotes() -> list[dict]:
    BASE_URL = 'https://quotes.toscrape.com'
    next_url_path = '/'
    quotes_data = list()

    while next_url_path:
        print(f'pegou {next_url_path}')
        quotes_html = fetch_html(BASE_URL + next_url_path)
        quotes_data.extend(parse_quotes_html(quotes_html))
        next_url_path = parse_next_url(quotes_html)
        # if not next_url_path:
        #     break

    return quotes_data
