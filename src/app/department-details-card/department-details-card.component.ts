import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageEvent } from "@angular/material/paginator";

import { DepartmentService } from "../department.service";
import { OpinionService } from "../opinion.service";

import { Department } from "../department";
import { Opinion } from "../opinion";

@Component({
  selector: "app-department-details-card",
  templateUrl: "./department-details-card.component.html",
  styleUrls: ["./department-details-card.component.css"],
})
export class DepartmentDetailsCardComponent implements OnInit {
  open: boolean = false;
  openId: number = null;
  starColor: string = "primary";
  starCount: number = 5;
  rating: number = 1;
  departmentObj: Department = new Department();
  opinionArr: Opinion[] = [];
  pageEvent: PageEvent;
  pageIndex: number = 1;
  pageSize: number = 10;
  length: number = 0;
  constructor(
    private DepartmentService: DepartmentService,
    private ActivatedRoute: ActivatedRoute,
    private OpinionService: OpinionService
  ) {}
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((res) => {
      if (Number(res.get("id"))) {
        this.DepartmentService.getDepartmentbyId(
          Number(res.get("id"))
        ).subscribe((response) => {
          this.departmentObj = <Department>response;
          const event = new PageEvent();
          event.pageSize = 10;
          event.length = 0;
          event.pageIndex = 1;
          this.getServerData(event);
        });
      }
    });
  }
  getServerData(event?: PageEvent) {
    this.OpinionService.getAllOpinionByDepartmentId(
      this.departmentObj.DepartmentId,
      event.pageSize,
      event.pageIndex
    ).subscribe(
      (response) => {
        if (response) {
          this.opinionArr = response.Opinions;
          this.length = response.Total;
        }
      },
      (error) => {
        // handle error
      }
    );
    return event;
  }
  text(id: number): string {
    return this.openId == null || this.openId != id ? "קרא עוד" : "הסתר";
  }
  openFunc(id: number) {
    if (this.openId == null || this.openId != id) this.openId = id;
    else this.openId = null;
  }
}
