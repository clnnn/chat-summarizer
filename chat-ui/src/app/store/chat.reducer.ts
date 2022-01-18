import { Action, createReducer, on } from '@ngrx/store';
import { broadcastMessage } from './chat.actions';
import { ChatState } from './chat.state';

const initialState: ChatState = {
  messages: [],
};

const _chatReducer = createReducer(
  initialState,
  on(broadcastMessage, (state, { sender, message, fromMe }) => {
    return {
      ...state,
      messages: [
        ...state.messages,
        {
          sender: sender,
          message: message,
          fromMe: fromMe,
        },
      ],
    };
  })
);

export function chatReducer(state: ChatState | undefined, action: Action) {
  return _chatReducer(state, action);
}
