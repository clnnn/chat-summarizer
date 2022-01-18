import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { connectToChat, sendMessage, summarize } from './chat.actions';
import { selectMessages } from './chat.selector';
import { ChatState, ChatStateSlice } from './chat.state';

@Injectable()
export class ChatFacadeService {
  constructor(private store: Store<ChatStateSlice>) {}

  public connectToChat(username: string): void {
    this.store.dispatch(connectToChat({ username: username }));
  }

  public sendMessage(message: string): void {
    this.store.dispatch(sendMessage({message: message}));
  }

  public getMessages(): Observable<Message[]> {
    return this.store.select(selectMessages);
  }

  public summarizeChat(): void {
    this.store.dispatch(summarize());
  }
}
