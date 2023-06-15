import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { DBService } from "../db.service";
import { OpinionService } from "../opinion.service";
import { CurrentUserService } from "../current-user.service";

import { Hospital } from "../hospital";
import { Department } from "../department";
import { Opinion } from "../opinion";
import { User } from "../user";
import { UsersService } from "../users.service";

@Component({
  selector: "app-opinion",
  templateUrl: "./opinion.component.html",
  styleUrls: ["./opinion.component.css"],
})
export class OpinionComponent implements OnInit {
  newOpinion: Opinion;
  title: string = "arrow_back";
  prev: boolean = true;
  next: boolean = false;
  selectedHospital: number;
  selectedDepartment: number;
  LocalArr: Hospital[] = [];
  LocalArrDep: Department[] = [];
  starColor: string = "primary";
  starCount: number = 5;
  checked: boolean;
  constructor(
    private HospitalService: DBService,
    private OpinionService: OpinionService,
    private router: Router,
    private ServiceUser: UsersService
  ) {
    this.HospitalService.getHospitals().subscribe((response) => {
      this.LocalArr = <Hospital[]>response;
      //get the user id from sessionStorage
      let user: any = sessionStorage.getItem("user");
      user = <User>JSON.parse(user);
      this.newOpinion = new Opinion();
      if (user.userId !== undefined) {
        this.newOpinion.UserId = user.UserId;
      } else {
        this.ServiceUser.getUser(user.Email, user.UserPassword).subscribe(
          (user) => {
            this.newOpinion.UserId = user.UserId;
          }
        );
      }
    });
  }
  sendOpinion() {
    if (this.checked == true) {
      this.OpinionService.AddNewOpinion(this.newOpinion).subscribe(
        (res) => {
          if (res != null) {
            Swal.fire("Success", "חוות דעתך נקלטה בהצלחה!", "success").then(
              () => {
                this.router.navigateByUrl("footer/" + this.selectedHospital);
              }
            );
          }
        },
        (err) => {
          Swal.fire("Error", "): !אופס..., משהו השתבש", "error");
        }
      );
    }
  }
  ngOnInit(): void {}
  selectHospital() {
    this.HospitalService.getDeprtmentbyHospitalId(
      this.selectedHospital
    ).subscribe((response) => {
      this.LocalArrDep = <Department[]>response;
    });
  }
  selectDepartment() {
    this.newOpinion.DepartmentId = this.selectedDepartment;
  }
}
