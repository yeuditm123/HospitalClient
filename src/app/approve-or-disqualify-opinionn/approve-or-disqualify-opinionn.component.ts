import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";

import { OpinionService } from "../opinion.service";
import { UsersService } from "../users.service";

import { Opinion } from "../opinion";
@Component({
  selector: "app-approve-or-disqualify-opinionn",
  templateUrl: "./approve-or-disqualify-opinionn.component.html",
  styleUrls: ["./approve-or-disqualify-opinionn.component.css"],
})
export class ApproveOrDisqualifyOpinionnComponent implements OnInit {
  open: boolean = false;
  openId: number = null;
  opinionArr: Opinion[] = [];
  pageEvent: PageEvent;
  pageIndex: number = 0;
  pageSize: number = 9;
  length: number = 0;
  constructor(
    private OpinionService: OpinionService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.func();
  }
  func() {
    const event = new PageEvent();
    event.pageIndex = this.pageIndex;
    event.length = this.length;
    event.pageSize = this.pageSize;
    this.getServerData(event);
  }
  getServerData(event?: PageEvent) {
    this.OpinionService.getallOpinion(
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
  DisqualifyOpinion(opinionId: number) {
    let opinion: Opinion = this.opinionArr.find(
      (x) => x.OpinionId == opinionId
    );
    opinion.IsConfirmed = false;
    this.userService
      .sendMail(opinion.Users.Email, opinion.Summary)
      .subscribe((res) => {
        if (res) {
          this.OpinionService.updateisConfirmedOfOpinion(opinion).subscribe(
            (res) => {
              if (res) {
                Swal.fire(
                  "Success",
                  "הסרת את חוות הדעת בהצלחה,ונשלח מייל עם הודעת פסילה למשתמש",
                  "success"
                );
                this.func();
              }
            },
            (err) => {
              Swal.fire("Error", "): !אופס..., משהו השתבש", "error");
            }
          );
        }
      });
  }
}
