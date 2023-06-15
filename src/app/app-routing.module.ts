import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { HomeComponent } from "./home/home.component";
import { OpinionComponent } from "./opinion/opinion.component";
import { LoginGuardService } from "./login-guard.service";
import { FooterComponent } from "./footer/footer.component";
import { DepartmentDetailsCardComponent } from "./department-details-card/department-details-card.component";
import { UpdatingHospitalComponent } from "./Adding/updating-hospital/updating-hospital.component";
import { AddDepartmentComponent } from "./update/add-department/add-department.component";
import { ApproveOrDisqualifyOpinionnComponent } from "./approve-or-disqualify-opinionn/approve-or-disqualify-opinionn.component";
import { AboutComponent } from "./about/about.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  {
    path: "signUp",
    component: SignUpComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "opinion",
    canActivate: [LoginGuardService],
    component: OpinionComponent,
  },
  {
    path: "footer/:id",
    component: FooterComponent,
  },
  {
    path: "department/:id",
    component: DepartmentDetailsCardComponent,
  },
  {
    path: "updatingOrEditHospital",
    component: UpdatingHospitalComponent,
  },
  {
    path: "updatingOrEditDepartment",
    component: AddDepartmentComponent,
  },
  {
    path: "ApproveOrDisqualifyOpinion",
    component: ApproveOrDisqualifyOpinionnComponent,
  },
  {
    path: "About",
    component: AboutComponent,
  },
  {
    path: "Bar-chart",
    component: BarChartComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
