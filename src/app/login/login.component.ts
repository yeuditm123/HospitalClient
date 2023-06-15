import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { UsersService } from "../users.service";
import { CurrentUserService } from "../current-user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  isLoggedin?: boolean;
  IsExist = true;
  hide = true;
  IsSettings: boolean = false;
  constructor(
    private fb: FormBuilder,
    private serviceUser: UsersService,
    private router: Router,
    private currentUserService: CurrentUserService
  ) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
    });
  }

  get email() {
    return this.LoginForm.get("email");
  }
  get password() {
    return this.LoginForm.get("password");
  }
  submitForm(): void {
    this.serviceUser.getUser(this.email.value, this.password.value).subscribe(
      (user) => {
        debugger;
        if (!user) Swal.fire("Warning", "שם משתשמש והסיסמא לא זוהו", "warning");
        else {
          this.currentUserService.currentUser = user;
          sessionStorage.setItem("user", JSON.stringify(user));
          Swal.fire({
            title: "",
            html: "!התחברת בהצלחה",
            icon: "success",
            width: 400,
            customClass: {
              title: "title-class",
              icon: "icon-class",
              confirmButton: "confirm-button-class",
              cancelButton: "cancel-button-class",
            },
            showCancelButton: true,
            confirmButtonText: "להוספת חוות דעת ",
            cancelButtonText: "דף הבית",
            cancelButtonColor: "#b73232",
            confirmButtonColor: "#b73232",
          }).then((result) => {
            if (result.value) {
              this.router.navigateByUrl("opinion");
            } else this.router.navigateByUrl("home");
          });
        }
      },
      (err) => {
        Swal.fire("Error", "): !אופס..., משהו השתבש", "error");
      }
    );
  }
}
