import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/components/auth/token.service';
import { UserService } from 'src/app/components/auth/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userInfo: any;
  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadUserInfo();
    this.userService.getUser().subscribe(() => this.loadUserInfo());
  }

  loadUserInfo() {
    this.userInfo = null;
    const user = this.tokenService.getUserInfo();
    if (user) {
      this.userInfo = JSON.parse(user);
    }
  }
}
