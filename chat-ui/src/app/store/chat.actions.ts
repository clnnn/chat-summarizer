import { createAction, props } from '@ngrx/store';

export enum ChatActionType {
  NOT_CONNECTED = 'NOT_CONNECTED',
  CONNECT_TO_CHAT = 'CONNECT_TO_CHAT',
  SEND_MESSAGE = 'SEND_MESSAGE',
  BROADCAST_MESSAGE = 'BROADCAST_MESSAGE',
  SUMMARIZE = 'SUMMARIZE',
}

export const connectToChat = createAction(
  ChatActionType.CONNECT_TO_CHAT,
  props<{ username: string }>()
);

export const notConnected = createAction(ChatActionType.NOT_CONNECTED);

export const sendMessage = createAction(
  ChatActionType.SEND_MESSAGE,
  props<{ message: string }>()
);

export const broadcastMessage = createAction(
  ChatActionType.BROADCAST_MESSAGE,
  props<{ sender: string; message: string; fromMe: boolean }>()
);

export const summarize = createAction(ChatActionType.SUMMARIZE);

