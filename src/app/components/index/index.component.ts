import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserProfile } from 'src/app/data/user.profile';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  logOut() {
    this.authservice.logOut();
    this.userProfile = undefined;
  }
  userProfile?: UserProfile;

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.userProfile = this.authservice.getCurrentUser();
  }
}
