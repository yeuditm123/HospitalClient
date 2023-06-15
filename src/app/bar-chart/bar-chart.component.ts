import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

import { DBService } from "../db.service";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  constructor(private hospitalService: DBService) {}

  play = false;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];
  rating7data: number[] = [];
  barChartData: ChartDataSets[];
  selectedTypeQuestion: number = 1;

  getLabel(): string {
    switch (this.selectedTypeQuestion[0]) {
      case 1:
        return "שביעות רצון כללית";
      case 2:
        return "יחס וכבוד למטופל";
      case 3:
        return "מתן מידע ובהירות הסברים";
      case 4:
        return "העצמת המטופל";
      case 5:
        return "יעילות";
      case 6:
        return "תנאי אישפוז";
      case 7:
        return "בטיחות המטופל";
      default:
        return "";
    }
  }

  selectQuestion() {
    this.hospitalService
      .GetRating7ofHospitals(this.selectedTypeQuestion)
      .subscribe((res) => {
        this.rating7data = res;
        this.play = true;
        this.barChartLabels = [
          "בלינסון",
          "מעייני הישועה",
          "איכילוב",
          "שיבא-תל השומר",
          "רמבם",
          "זיו",
          "פוריה",
          "העמק",
          "שערי צדק",
          "הדסה עין כרם",
          "משגב לדך",
          "המרכז הרפואי-סורוקה",
        ];
        this.barChartData = [
          {
            data: this.rating7data,
            label: this.getLabel(),
            backgroundColor: "#b72323",
            hoverBackgroundColor: "white",
            hoverBorderColor: "#ffdf79",
            borderColor: "black",
          },
        ];
      });
  }
  ngOnInit(): void {
    this.selectQuestion();
  }
}
