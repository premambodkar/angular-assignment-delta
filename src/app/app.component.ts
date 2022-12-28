import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItem: MenuItem[] = [
    { name: 'dashboard', icon: 'home', link: '' },
    { name: 'all timesheet', icon: 'home', link: '' },
    { name: 'my timesheet', icon: 'home', link: '' },
    { name: 'my projects', icon: 'home', link: '' },
    { name: 'my profile', icon: 'home', link: '' },
    { name: 'settings', icon: 'home', link: '' },
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
