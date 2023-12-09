import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getInfo() {
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    })
  }
}
