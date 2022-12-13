import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

const ROUTES = [
  {
    routerLink: 'home',
    icon: 'home',
    name: 'Home',
  },
  {
    routerLink: 'gym',
    icon: 'fitness_center',
    name: 'Gym List',
  },
  {
    routerLink: 'upcoming-classes',
    icon: 'upcoming',
    name: 'Upcoming',
  },
];

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  routeList = ROUTES;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
