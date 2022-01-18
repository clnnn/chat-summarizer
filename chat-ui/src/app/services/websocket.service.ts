import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { notConnected } from '../store/chat.actions';
import { ChatState } from '../store/chat.state';

@Injectable()
export class WebsocketService {
  private webSocketSubject: WebSocketSubject<Action> | null = null;

  constructor(private store: Store<ChatState>) {}

  public connect(username: string): void {
    this.webSocketSubject = webSocket<Action>(
      `ws://localhost:4567/chat?username=${username}`
    );
    this.webSocketSubject.subscribe((action) => {
      this.store.dispatch(action);
    });
  }

  public send<T extends Action>(action: T): void {
    if (!this.webSocketSubject) {
      return;
    }
    this.webSocketSubject.next(action);
  }
}
