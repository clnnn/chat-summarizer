import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type-bar',
  templateUrl: './type-bar.component.html',
  styleUrls: ['./type-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TypeBarComponent {
  public text = "";
  
  @Output()
  public onSend = new EventEmitter<string>();

  public onKeydown(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key === 'Enter') {
      this.text += '\n';
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  public sendMessage(): void {
    if (this.text === "") {
      return;
    }
    
    this.onSend.emit(this.text);
    this.text = "";
  }

}
