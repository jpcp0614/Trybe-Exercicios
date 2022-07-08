from social_network import Perfil
from notifications import (
  NotificadorMensagem,
  NotificadorPushNotification,
  NotificadorEmail,
  )


if __name__ == "__main__":
    seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    seguidores_push_notification = ["Carlos"]
    seguidores_email = ["Claudia", "Marcia"]

    meuPerfil = Perfil()
    NotificadorMensagem(meuPerfil, seguidores_mensagem)
    NotificadorPushNotification(meuPerfil, seguidores_push_notification)
    NotificadorEmail(meuPerfil, seguidores_email)

    meuPerfil.adicionar_post("Olá universo da programação!")

    meuPerfil.remover_sistema_de_notificacao(
      NotificadorEmail(meuPerfil, seguidores_email))

    print(meuPerfil.get_sistema_de_notificacao())
