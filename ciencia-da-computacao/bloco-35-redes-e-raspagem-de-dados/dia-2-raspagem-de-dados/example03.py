import requests
# import time


# for _ in range(15):
#     response = requests.get('https://www.cloudflare.com/rate-limit-test/')
#     print(response.status_code)
#     time.sleep(4)  # pode ser colocado um sleep de 4 segundos

# após 10 requisições, o servidor irá retornar 429 (Too Many Requests)

# response = requests.get('https://httpbin.org/delay/10')  # status 200
try:
    # gera um error (ReadTimeoutError)
    response = requests.get('https://httpbin.org/delay/10', timeout=2)
except requests.Timeout:  # com ReadTimeout também funcionou
    response = requests.get('https://httpbin.org/delay/10', timeout=15)
finally:
    print(response.status_code)
