import { createSelector } from '@ngrx/store';
import { ChatState, ChatStateSlice } from './chat.state';

export const selectChat = (state: ChatStateSlice) => state.chat;

export const selectMessages = createSelector(
  selectChat,
  (state: ChatState) => state.messages ?? []
);
