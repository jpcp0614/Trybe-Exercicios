class MediaPlayer():
    def __init__(self, player):
        self.__player = player

    def execute(self):
        self.__player.play()


class AudioPlayer():
    def play(self):
        print('Play audio')


class VideoPlayer():
    def play_mp4(self):
        print('Play MP4')
