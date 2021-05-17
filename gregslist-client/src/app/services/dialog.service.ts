import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCarComponent } from '../components/dialogs/dialog-car/dialog-car.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openCarForm(): void {
    const dialogRef = this.dialog.open(DialogCarComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    console.log('hello!');
  }
}
