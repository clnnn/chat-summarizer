import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { UsernameDialogComponent } from 'src/app/components/username-dialog/username-dialog.component';
import { Message } from 'src/app/models/message.model';
import { ChatFacadeService } from 'src/app/store/chat-facade.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPageComponent implements OnInit {
  public messages$: Observable<Message[]> | null = null;

  constructor(public dialog: MatDialog, private facade: ChatFacadeService) {}

  ngOnInit(): void {
    this.messages$ = this.facade.getMessages();

    const dialogRef = this.dialog.open(UsernameDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((username: string) => {
      this.facade.connectToChat(username);
    });
  }

  public sendMessage(message: string): void {
    this.facade.sendMessage(message);
  }

  public summarize(): void {
    this.facade.summarizeChat();
  }
}
