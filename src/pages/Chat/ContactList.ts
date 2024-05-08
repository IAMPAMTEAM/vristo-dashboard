import IconChatbot1 from '@/assets/icons/IconChatbot1.png';
import IconChatbot2 from '@/assets/icons/IconChatbot2.png';
import IconChatbot3 from '@/assets/icons/IconChatbot3.png';

const ContactList = [
  {
    userId: 1,
    name: 'ChatBot1',
    path: IconChatbot1,
    time: '2:09 PM',
    preview: 'ChatBot1',
    messages: [
      {
        fromUserId: 0,
        toUserId: 1,
        text: 'ChatBot1',
      },
    ],
  },
  {
    userId: 2,
    name: 'ChatBot2',
    path: IconChatbot2,
    time: '8:09 AM',
    preview: 'ChatBot2',
    messages: [
      {
        fromUserId: 0,
        toUserId: 1,
        text: 'ChatBot2',
      },
    ],
  },
  {
    userId: 3,
    name: 'ChatBot3',
    path: IconChatbot3,
    time: '12:09 PM',
    preview: 'ChatBot3',
    messages: [
      {
        fromUserId: 0,
        toUserId: 1,
        text: 'ChatBot3',
      },
    ],
  },
];

export default ContactList;
