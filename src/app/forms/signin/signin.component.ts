import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/auth.service';
import { UserService } from 'src/app/components/auth/user.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {}

  login(username: string, password: string) {
    this.authService.authenticate(username, password).subscribe((data: any) => {
      if (data.ok) {
        this.router.navigate(['/home']);
        this.userService.decodeAndNotify(data);
      }
    });
  }
}
