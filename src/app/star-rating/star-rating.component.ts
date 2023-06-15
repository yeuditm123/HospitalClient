import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.css"],
})
export class StarRatingComponent implements OnInit {
  @Input("rating") rating: number;
  @Input("starCount") starCount: number;
  @Input("color") color: string;
  @Input("isDisabled") isDisabled: boolean;
  @Output() ratingUpdated = new EventEmitter();

  snackBarDuration: number = 2000;
  ratingArr = [];

  constructor() {}

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating: number) {
    if (!this.isDisabled) {
      this.ratingUpdated.emit(rating);
    }
    return false;
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return "radio_button_checked";
    } else {
      return "radio_button_unchecked";
    }
  }
  getClass(index: number) {
    if (this.rating >= index + 1) {
      return "circle full";
    } else if (this.rating - (index + 1) > -1) {
      return "circle half";
    } else {
      return "circle";
    }
  }
}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn",
}
