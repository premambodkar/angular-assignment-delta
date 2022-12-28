import {
  Component,
  VERSION,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

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
  @ViewChild('mat-drawer')
  matDrawer!: any;
}

export class MenuItem {
  name: string;
  icon: string;
  link: string;
  constructor() {}
}
