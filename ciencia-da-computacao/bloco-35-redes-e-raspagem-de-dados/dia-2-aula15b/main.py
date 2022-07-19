from fastapi import FastAPI
from quotes_scraper import scrape_all_quotes

app = FastAPI()

'''
all_quotes = [
  {
    "author": "Elis Regina",
    "content": "É o mistério profundo",
    "tags": ["mistério", "profundo"],
  },
  {
    "author": "Tom Jobim",
    "content": "É o queira ou não queira",
    "tags": ["queira"],
  },
]
'''

all_quotes = scrape_all_quotes()


@app.get("/")
def get_quotes():
    return all_quotes


# Para rodar o comando da API
'''
uvicorn main:app --reload
'''
