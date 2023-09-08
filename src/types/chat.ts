import { EmployeeDetail } from '../api/api';

export type MessageType = {
  senderId: number;
  receiverId: number;
  message: string;
  timestamp: { nanoseconds: number; seconds: number };
};

export type ActiveUserChat = {
  employee: EmployeeDetail;
  lastMessage: string;
  lastMessageTime: string;
};
