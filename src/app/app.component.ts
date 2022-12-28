import {
  Component,
  VERSION,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from './common.service';
import { CustomFormDialogComponent } from './dialog-data/custom-form-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  menuItem: MenuItem[] = [
    { name: 'dashboard', icon: 'home', link: '' },
    { name: 'all timesheet', icon: 'calendar_month', link: '' },
    { name: 'my timesheet', icon: 'schedule', link: '' },
    { name: 'my projects', icon: 'work_history', link: '' },
    { name: 'my profile', icon: 'groups', link: '' },
    { name: 'settings', icon: 'tune', link: '' },
  ];

  constructor(public commonService: CommonService, public dialog: MatDialog) {}

  openDialog() {
    this.commonService.dialogRef = this.dialog.open(CustomFormDialogComponent, {
      data: {
        animal: 'panda',
      },
      height: '15rem',
      width: '30rem',
    });
  }
}

export class MenuItem {
  name: string;
  icon: string;
  link: string;
  constructor() {}
}
