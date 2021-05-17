import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  openForm(formChoice: string): void {
    if (formChoice == 'car') this.dialogService.openCarForm();
  }

  ngOnInit(): void {}
}
