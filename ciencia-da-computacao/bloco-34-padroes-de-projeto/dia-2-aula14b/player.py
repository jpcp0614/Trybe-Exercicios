from abc import ABC, abstractmethod


# classe Target
class Target(ABC):
    @abstractmethod
    def play(self):
        raise NotImplementedError


class MediaPlayer():
    def __init__(self, player):
        self.__player = player

    def execute(self):
        self.__player.play()


class AudioPlayer(Target):
    def play(self):
        print('Play audio')


class VideoAdapter(Target):
    def __init__(self, adaptee):
        self.__adaptee = adaptee

    def play(self):
        self.__adaptee.play_mp4()


class VideoPlayer():
    def play_mp4(self):
        print('Play MP4')


MediaPlayer(AudioPlayer()).execute()  # 'Play audio'

audio = AudioPlayer()
meu_player = MediaPlayer(audio)
meu_player.execute()

# 'VideoPlayer' object has no attribute 'play'
# MediaPlayer(VideoPlayer()).execute()

MediaPlayer(VideoAdapter(VideoPlayer())).execute()  # 'Play MP4'
