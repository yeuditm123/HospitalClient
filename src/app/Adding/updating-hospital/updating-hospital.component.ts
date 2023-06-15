import Swal from "sweetalert2";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatTable } from "@angular/material/table";

import { DBService } from "../../db.service";

import { Hospital } from "../../hospital";

@Component({
  selector: "app-updating-hospital",
  templateUrl: "./updating-hospital.component.html",
  styleUrls: ["./updating-hospital.component.css"],
})
export class UpdatingHospitalComponent implements OnInit {
  public displayedColumns = [
    "Delete",
    "Cancel",
    "Edit",
    "HosImage",
    "Tel",
    "HospitalAddress",
    "IsConfirmed",
    "HospitalName",
  ];
  @ViewChild(MatTable) table: MatTable<any>;
  public dataSource = new MatTableDataSource<Hospital>();
  hospitalsOriginal: Hospital[] = [];
  imagesMultiFiles: File[];

  constructor(private hospitalService: DBService) {}
  ngOnInit() {
    this.getAllHospitals();
  }
  public getAllHospitals = () => {
    this.hospitalService.GetAllData().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.data.forEach((element, index) => {
        if (element.HosImage != null)
          this.dataSource.data[index].images = element.HosImage.split(",");
      });
      this.hospitalsOriginal = res.map((x) => Object.assign({}, x));
    });
  };

  //refresh table
  refresh(): void {
    this.table.renderRows();
  }

  redirectToUpdate(hosId: number): void {
    let hosObj: Hospital = this.dataSource.data.find(
      (h) => h.HospitalId == hosId
    );
    if (hosObj.HospitalId != 0) {
      this.hospitalService.updateHospital(hosObj).subscribe((res) => {
        for (let index = 0; index < this.imagesMultiFiles.length; index++) {
          this.hospitalService
            .uploadImage(this.imagesMultiFiles[index], res.HospitalId)
            .subscribe((x) => {});
        }
      });
    } else {
      this.hospitalService.addnewHospital(hosObj).subscribe((res) => {
        for (let index = 0; index < this.imagesMultiFiles.length; index++) {
          this.hospitalService
            .uploadImage(this.imagesMultiFiles[index], res.HospitalId)
            .subscribe((x) => {});
        }
      });
    }
  }
  //add line in the table of hospital object
  addNewlineHospital() {
    if (!this.dataSource.data.find((x) => x.HospitalId == 0)) {
      const newHos = new Hospital(0, "", "", true, null, null, null);
      newHos.ISEDITED = true;
      this.dataSource.data.splice(0, 0, newHos);
      this.refresh();
    }
  }
  //cancel the line was changed
  redirectToCancel(hosId: number) {
    if (hosId == 0) {
      let removeNewHosIndex = this.dataSource.data.findIndex(
        (x) => x.HospitalId == hosId
      );
      this.dataSource.data.splice(removeNewHosIndex, 1);
    } else {
      let index = this.dataSource.data.findIndex((h) => h.HospitalId == hosId);
      let hospital: Hospital = this.hospitalsOriginal.find(
        (x) => x.HospitalId == hosId
      );
      this.dataSource.data[index] = Object.assign({}, hospital);
      this.dataSource.data[index].ISEDITED = false;
    }
    this.refresh();
  }
  //delete line
  redirectToDelete(hosId: number) {
    Swal.fire({
      title: "?האם אתה בטוח",
      html: "האם אתה בטוח שברצונך למחוק?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "למחיקה",
      cancelButtonText: "לביטול",
    }).then((result) => {
      if (result.value) {
        let hosObj: Hospital = this.dataSource.data.find(
          (h) => h.HospitalId == hosId
        );
        hosObj.IsConfirmed = false;
        this.hospitalService.updateHospital(hosObj).subscribe((res) => {
          if (res) {
            this.refresh();
          }
        });
      }
    });
  }
  onSelectFiles(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.imagesMultiFiles = event.target.files;
    }
  }
}
