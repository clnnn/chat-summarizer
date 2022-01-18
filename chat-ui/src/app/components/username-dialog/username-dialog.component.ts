import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-username-dialog',
  templateUrl: './username-dialog.component.html',
  styleUrls: ['./username-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsernameDialogComponent{
  constructor(public dialogRef: MatDialogRef<UsernameDialogComponent>) {}
}
