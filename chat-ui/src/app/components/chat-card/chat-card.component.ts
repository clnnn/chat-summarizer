import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatCardComponent {
  @Input()
  public messages: Message[] | null = null;

  @Output()
  public onSendMessage = new EventEmitter<string>();

  @Output()
  public onSummarize = new EventEmitter<void>();

  public sendMessage(message: string): void {
    this.onSendMessage.emit(message);
  }

  public summarize(): void {
    this.onSummarize.emit();
  }
}
