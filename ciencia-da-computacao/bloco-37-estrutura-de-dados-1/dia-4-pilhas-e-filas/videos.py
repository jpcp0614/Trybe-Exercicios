from rich import print
import traceback
import sys


def load_video(video_path):
    print('Carregando vídeo do caminho:', video_path)
    traceback.print_stack(file=sys.stdout)
    return 'fake vídeo'


def process_video(video_path):
    print('Carregando vídeo...')
    loaded_video = load_video(video_path)
    print('O vídeo foi carregado', loaded_video)


process_video('path/to/my/video')
