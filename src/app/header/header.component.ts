import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CurrentUserService } from "../current-user.service";

import { User } from "../user";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HEADERComponent implements OnInit {
  isValid: boolean = false;
  nameAdmin: string = "";
  constructor(
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}
  ngOnInit(): void {
    this.currentUserService.itemValue.subscribe((user) => {
      this.nameAdmin = "הי," + " " + user.UserName;
    });
  }
  removeUser(): void {
    sessionStorage.removeItem("user");
    this.nameAdmin = "";
    this.isValid = false;
  }
  isAdmin(): void {
    debugger;
    let user: any = sessionStorage.getItem("user");
    user = <User>JSON.parse(user);
    if (user != null) {
      if (user.IsAdmin == true) this.isValid = true;
      else {
        this.isValid = false;
      }
    }
  }
}
