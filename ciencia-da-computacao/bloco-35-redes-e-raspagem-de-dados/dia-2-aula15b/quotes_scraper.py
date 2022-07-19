import requests
# from parsel import Selector
import time


def fetch_html(url: str) -> str:
    time.sleep(1)  # espera um pouco pra fazer a próxima request
    try:
        res = requests.get(url, timeout=3)  # se demorar mais de 3s, quebra
        res.raise_for_status()
    except (requests.HTTPError, TimeoutError):
        return ""
    return res.text


def scrape_all_quotes() -> list[dict]:
    BASE_URL = 'https://quotes.toscrape.com/'
    quotes_html = fetch_html(BASE_URL)
    return quotes_html
