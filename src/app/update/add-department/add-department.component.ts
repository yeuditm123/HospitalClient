import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";

import { DBService } from "../../db.service";
import { DepartmentService } from "../../department.service";

import { Hospital } from "../../hospital";
import { Department } from "../../department";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-department",
  templateUrl: "./add-department.component.html",
  styleUrls: ["./add-department.component.css"],
})
export class AddDepartmentComponent implements OnInit {
  selectedHospital: string = "";
  selectedHospitalName: string = "";
  arrHos: Hospital[] = [];
  departmentOriginal: Department[] = [];
  public displayedColumns = [
    "Delete",
    "Cancel",
    "Edit",
    "Tel",
    "VisitTime",
    "IsConfirmed",
    "DepartmentManagerName",
    "FullName",
  ];
  @ViewChild(MatTable) table: MatTable<any>;
  public dataSource = new MatTableDataSource<Department>();
  constructor(
    private hospitalService: DBService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.hospitalService.GetAllData().subscribe((res) => {
      this.arrHos = res;
      this.selectedHospital = this.arrHos[0].HospitalId.toString();
      this.selectedHospitalName = this.arrHos[0].HospitalName;

      this.selectHospital();
    });
  }
  refreshTable(): void {
    this.table.renderRows();
  }
  selectHospital() {
    this.selectedHospitalName = this.arrHos.find(
      (x) => x.HospitalId.toString() == this.selectedHospital
    ).HospitalName;
    this.hospitalService
      .getDeprtmentbyHospitalId(Number(this.selectedHospital))
      .subscribe((res) => {
        this.dataSource.data = res;
        this.departmentOriginal = res.map((x) => Object.assign({}, x));
      });
  }
  addNewDepartment() {
    if (!this.dataSource.data.find((x) => x.DepartmentId == 0)) {
      const newDep = new Department(
        0,
        Number(this.selectedHospital),
        null,
        "",
        "",
        "",
        true,
        false,
        "",
        ""
      );
      newDep.ISEDITED = true;
      this.dataSource.data.splice(0, 0, newDep);
      this.refreshTable();
    }
  }
  redirectToUpdate(depId: number) {
    let department: Department = this.dataSource.data.find(
      (x) => x.DepartmentId == depId
    );
    if (depId == 0) {
      this.departmentService.addNewDepartment(department).subscribe((res) => {
        alert("addtion");
      });
    } else {
      this.departmentService
        .updateDepartment(department)
        .subscribe((res) => {});
    }
    this.refreshTable();
  }
  redirectToCancel(depId: number) {
    if (depId == 0) {
      let index = this.dataSource.data.findIndex(
        (x) => x.DepartmentId == depId
      );
      this.dataSource.data.splice(index, 1);
    } else {
      let department: Department = this.departmentOriginal.find(
        (d) => d.DepartmentId == depId
      );
      let indexDep = this.dataSource.data.findIndex(
        (i) => i.DepartmentId == depId
      );
      this.dataSource.data[indexDep] = Object.assign({}, department);
      this.dataSource.data[indexDep].ISEDITED = false;
    }
    this.refreshTable();
  }
  redirectToDelete(depId: number) {
    Swal.fire({
      title: "?האם אתה בטוח",
      html: "האם אתה בטוח שברצונך למחוק?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "למחיקה",
      cancelButtonText: "לביטול",
    }).then((result) => {
      if (result.value) {
        let deleteDp: Department = this.dataSource.data.find(
          (x) => x.DepartmentId == depId
        );
        deleteDp.IsConfirmed = false;
        this.departmentService
          .updateDepartment(deleteDp)
          .subscribe((res) => {});
      }
    });
    this.selectHospital();
  }
}
