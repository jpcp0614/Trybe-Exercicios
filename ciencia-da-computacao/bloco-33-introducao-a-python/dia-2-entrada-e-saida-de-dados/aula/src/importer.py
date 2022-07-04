import json


def import_data():
    FILE_PATH = 'data/video_games.json'

    try:
        with open(FILE_PATH, mode='r') as file:
            return json.load(file)
    except FileNotFoundError:
        raise FileNotFoundError('Arquivo não encontrado')
    except json.decoder.JSONDecodeError:
        raise ValueError('json com formato errado')
