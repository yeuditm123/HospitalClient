import { PageEvent } from "@angular/material/paginator";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DBService } from "../db.service";
import { OpinionService } from "../opinion.service";
import { UsersService } from "../users.service";

import { Hospital } from "../hospital";
import { Department } from "../department";
import { Opinion } from "../opinion";
import { User } from "../user";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  public images = [];
  public imageSrc = "";
  public counter = 0;
  public panelOpenState = false;
  starColor: string = "primary";
  starCount: number = 5;
  rating: number = 1;
  openId: number = null;
  HospitalObj: Hospital = new Hospital();
  DepartmentArr: Department[] = [];
  OpinionArr: Opinion[] = [];
  userArr: User[] = [];
  imagesMultiFiles: File[];
  user: User;
  pageEvent: PageEvent;
  pageIndex: number = 1;
  pageSize: number = 10;
  length: number = 0;
  constructor(
    public HospitalService: DBService,
    private route: ActivatedRoute,
    private OpinionService: OpinionService,
    private userService: UsersService
  ) {
    this.route.paramMap.subscribe((res) => {
      if (Number(res.get("id"))) {
        this.HospitalService.GetHospitalById(Number(res.get("id"))).subscribe(
          (res) => {
            this.HospitalObj = res;
            const event = new PageEvent();
            event.pageSize = 10;
            event.length = 0;
            event.pageIndex = 1;
            this.getServerData(event);
            if (this.HospitalObj.HosImage) {
              this.images = this.HospitalObj.HosImage.split(",");
              this.imageSrc = this.images[0];
              setInterval(() => {
                this.toggleImg();
              }, 5000);
            }
            this.HospitalService.getDeprtmentbyHospitalId(
              this.HospitalObj.HospitalId
            ).subscribe((response) => {
              this.DepartmentArr = response;
            });
          }
        );
      }
    });
  }
  onRatingChanged(stars: number) {
    this.rating = stars;
  }

  openUrl(url: string) {
    if (url != "" && url != undefined) {
      window.open(url, "_blank");
    }
  }

  toggleImg() {
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
    } else {
      this.counter = this.counter + 1;
    }
  }

  ngOnInit(): void {}
  getServerData(event?: PageEvent) {
    this.OpinionService.getAllOpinionByHospital(
      this.HospitalObj.HospitalId,
      event.pageSize,
      event.pageIndex
    ).subscribe(
      (response) => {
        if (response) {
          this.OpinionArr = response.Opinions;
          this.length = response.Total;
        }
      },
      (error) => {
        // handle error
      }
    );
    return event;
  }
  onPreviousClick(): void {
    if (this.counter === 0) {
      this.counter = this.images.length - 1;
    } else {
      this.counter = this.counter - 1;
    }
  }
  onNextClick(): void {
    if (this.counter === this.images.length - 1) {
      this.counter = 0;
    } else {
      this.counter = this.counter + 1;
    }
  }
  text(id: number): string {
    return this.openId == null || this.openId != id ? "קרא עוד" : "הסתר";
  }
  openFunc(id: number) {
    if (this.openId == null || this.openId != id) this.openId = id;
    else this.openId = null;
  }
}
