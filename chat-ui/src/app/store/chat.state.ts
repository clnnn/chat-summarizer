import { Message } from '../models/message.model';

export interface ChatState {
  messages: Message[];
}

export interface ChatStateSlice {
  chat: ChatState;
}
