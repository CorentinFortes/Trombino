import { Mail } from '../../components/MailWidget/MailWidget';

export const tmpMail: Mail[] = [
  {
    title: 'Applications',
    content:
      'Salut je voulais avoir des informations sur l’application pour savoir quelles nouvelles fonctionnalités nous pourrions implémenter pour le prochain sprint',
    sender: 'Adam',
    read: false,
    time: '11:03',
    date: '09-07-2023',
  },
  {
    title: 'Réunion',
    content:
      'Bonjour je vous envoie ce mail pour vous informer que la réunion de ce soir est annulée. Nous la reporterons à la semaine prochaine. Merci de votre compréhension',
    sender: 'Corentin',
    read: true,
    time: '10:07',
    date: '09-06-2023',
  },
];
