import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatCardComponent } from './components/chat-card/chat-card.component';
import { MatIconModule } from '@angular/material/icon';
import { TypeBarComponent } from './components/type-bar/type-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ChatAreaComponent } from './components/chat-area/chat-area.component';
import { UsernameDialogComponent } from './components/username-dialog/username-dialog.component';
import { WebsocketService } from './services/websocket.service';
import { StoreModule } from '@ngrx/store';
import { chatReducer } from './store/chat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChatEffects } from './store/chat.effects';
import { ChatFacadeService } from './store/chat-facade.service';
import { FormsModule } from '@angular/forms';
import { SummarizationService } from './services/summarization.service';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { SummaryDialogComponent } from './components/summary-dialog/summary-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatCardComponent,
    TypeBarComponent,
    ChatAreaComponent,
    UsernameDialogComponent,
    SummaryDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    MatInputModule,
    MatSnackBarModule,
    StoreModule.forRoot({
      chat: chatReducer,
    }),
    EffectsModule.forRoot([ChatEffects]),
  ],
  providers: [WebsocketService, SummarizationService, ChatFacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
