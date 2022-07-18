(.ambient_dia_2) ➜  dia-2-raspagem-de-dados git:(exercicios/bloco35) ✗ python3                        
Python 3.10.4 (main, Jun 29 2022, 12:14:53) [GCC 11.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import requests
>>> data = requests.get('https://www.betrybe.com/')
>>> data
<Response [200]>
>>> data.status_code
200
>>> data.headers
{'Date': 'Mon, 18 Jul 2022 12:52:20 GMT', 'Content-Type': 'text/html; charset=utf-8', 'Transfer-Encoding': 'chunked', 'Connection': 'keep-alive', 'vary': 'Accept-Encoding', 'x-powered-by': 'Next.js', 'CF-Cache-Status': 'DYNAMIC', 'Expect-CT': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"', 'Report-To': '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=DYnsVB0sM22EixdQPDHk74vCKsRK8UOY%2BrxoxzK0c21LSDkT6uEpP5kHs3jxHcnuCf5%2FN21RM6IkTMbfdtexnoGyyNGPToULES0ODIVv2uN1g9sEihd9e20vnLzFSPPtiyphAL3%2Fqhxm66HsLw%3D%3D"}],"group":"cf-nel","max_age":604800}', 'NEL': '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}', 'Strict-Transport-Security': 'max-age=15552000; includeSubDomains; preload', 'X-Content-Type-Options': 'nosniff', 'Server': 'cloudflare', 'CF-RAY': '72cb5a9b1996a6c7-GRU', 'Content-Encoding': 'gzip'}
>>> data.headers['Content-Type']
'text/html; charset=utf-8'
