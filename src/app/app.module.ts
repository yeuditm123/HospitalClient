import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HEADERComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { OpinionComponent } from "./opinion/opinion.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { SlideshowModule } from "ng-simple-slideshow";
import { ChartsModule } from "ng2-charts";
import { StarRatingComponent } from "./star-rating/star-rating.component";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CarouselComponent } from "./carousel/carousel.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { AgmCoreModule } from "@agm/core";
import { NgxPaginationModule } from "ngx-pagination";
import { DepartmentDetailsCardComponent } from "./department-details-card/department-details-card.component";
import { UpdatingHospitalComponent } from "./Adding/updating-hospital/updating-hospital.component";
import { AddDepartmentComponent } from "./update/add-department/add-department.component";
import { ApproveOrDisqualifyOpinionnComponent } from "./approve-or-disqualify-opinionn/approve-or-disqualify-opinionn.component";
import { AboutComponent } from "./about/about.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    FooterComponent,
    OpinionComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    StarRatingComponent,
    CarouselComponent,
    DepartmentDetailsCardComponent,
    UpdatingHospitalComponent,
    AddDepartmentComponent,
    ApproveOrDisqualifyOpinionnComponent,
    AboutComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    SlideshowModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    IvyCarouselModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCkipGY_VwhpPD-MX0_BlHwSm1HPC8u4xA",
      libraries: ["places"],
    }),
  ],

  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
