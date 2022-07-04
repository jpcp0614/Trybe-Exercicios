# ENUMERATE

languages = ["Python", "Ruby", "JavaScript", "C++", "C"]

enumerate_prime = enumerate(languages)
print(list(enumerate_prime))

for index, language in enumerate(["Python", "JavaScript"]):
    print(f'{index}: {language}')