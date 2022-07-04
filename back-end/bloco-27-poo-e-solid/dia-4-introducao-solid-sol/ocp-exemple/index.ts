// export default function progressNotification(
//   message: string,
//   notificationType: string,
// ): void {
//   switch (notificationType) {
//     case 'Email':
//       console.log('Email: ', message);
//       break;
//     case 'Phone':
//       console.log('Phone: ', message);
//       break;
//     case 'Console':
//       console.log('Console: ', message);
//       break;
//     default:
//       console.log('Terminou');
//   }
// }

type Notification = {
  type: string,
  send: (message: string) => void
}

const emailNotification: Notification = {
  type: 'Email',
  send: (message) => {
    console.log('Email:', message);
  },
};

const phoneNotification: Notification = {
  type: 'Phone',
  send: (message) => {
    console.log('Phone:', message);
  },
};

const consoleNotification: Notification = {
  type: 'Console',
  send: (message) => {
    console.log('Console:', message);
  },
};

const notifications: Notification[] = [
  emailNotification, phoneNotification, consoleNotification,
];


export function progressNotification(
  message: string,
  type_: string = 'Console',
  notificationsArray: Notification[] = notifications
): void {
  notificationsArray.forEach(notification => {
    if (notification.type === type_) {
      notification.send(message);
    }
  })
};