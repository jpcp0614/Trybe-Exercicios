'''
Em Python, é possível imprimir uma saída colorida.
Para isso, basta a string começar com um código da cor
antes e terminar com um código que indica o fim da formatação

ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")

'''

AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
RESET = "\033[0m"


class Log:
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(f"{AZUL}Iniciando a execução da função...\n{RESET}")
            return func(*args, **kwargs).upper()
        return wrapper

    @decorator
    def dispara_log(sef, message):
        return message


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f'{VERDE}{NEGRITO}{self.log.dispara_log(message)}{RESET}'


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f'{VERMELHO}{NEGRITO}{self.log.dispara_log(message)}{RESET}'


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        return f'{LARANJA}{NEGRITO}{self.log.dispara_log(message)}{RESET}'


logger = Log()
logger_success = LogSuccess(logger)
logger_warning = LogWarning(logger)
logger_error = LogError(logger)
# print(logger_success.dispara_log("O sistema está funcionando"))
# print(logger_warning.dispara_log("O sistema está lento"))
print(logger_error.dispara_log("O sistema está com erros"))
