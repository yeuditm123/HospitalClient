import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class CurrentUserService {
  constructor() {}
  itemValue = new Subject<User>();

  set currentUser(user: User) {
    this.itemValue.next(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  }
  get currentUser() {
    debugger;
    return JSON.parse(sessionStorage.getItem("user"));
  }
}
