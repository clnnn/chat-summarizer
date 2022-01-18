import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs';
import { SummaryDialogComponent } from '../components/summary-dialog/summary-dialog.component';
import { SummarizationService } from '../services/summarization.service';
import { WebsocketService } from '../services/websocket.service';
import { connectToChat, sendMessage, summarize } from './chat.actions';
import { selectMessages } from './chat.selector';
import { ChatStateSlice } from './chat.state';

@Injectable()
export class ChatEffects {
  connect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(connectToChat),
        tap((action) => {
          this.webSocketService.connect(action.username);
        })
      ),
    {
      dispatch: false,
    }
  );

  sendMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(sendMessage),
        tap((action) => {
          this.webSocketService.send(action);
        })
      ),
    { dispatch: false }
  );

  summarize$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(summarize),
        map(() =>
          this.snackBar.open(
            'Processing summarization. Please wait...',
            undefined,
            {
              verticalPosition: 'top',
              horizontalPosition: 'center',
            }
          )
        ),
        concatLatestFrom(() => [this.store.select(selectMessages)]),
        switchMap(([snackBarRef, messages]) => {
          return this.summarizationService
            .summarize(messages)
            .pipe(tap(() => snackBarRef.dismiss()));
        }),
        tap((response) => {
          this.dialog.open(SummaryDialogComponent, {
            data: response,
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private store: Store<ChatStateSlice>,
    private actions$: Actions,
    private webSocketService: WebsocketService,
    private summarizationService: SummarizationService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
}
