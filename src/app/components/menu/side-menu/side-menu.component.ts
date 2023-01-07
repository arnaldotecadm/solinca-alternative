import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterContentChecked,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TokenService } from '../../auth/token.service';
import { UserService } from '../../auth/user.service';

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
    routerLink: 'modality',
    icon: 'sports_gymnastics',
    name: 'Modality List',
  },
  {
    routerLink: 'upcoming-classes',
    icon: 'upcoming',
    name: 'Upcoming',
  },
  {
    routerLink: 'history',
    icon: 'history',
    name: 'Histórico',
  },
];

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit, AfterContentChecked {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  routeList = ROUTES;
  token: any;
  userInfo: any;

  constructor(
    private observer: BreakpointObserver,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.userService.getUser().subscribe(() => this.loadUserInfo());
  }

  loadUserInfo() {
    this.token = this.tokenService.getToken();
    this.userInfo = null;
    const user = this.tokenService.getUserInfo();
    if (user) {
      this.userInfo = JSON.parse(user);
    }
  }

  ngAfterContentChecked() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches && this.sidenav) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        if (this.sidenav) {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      }
    });
  }

  logout() {
    this.userService.logout();
  }
}
