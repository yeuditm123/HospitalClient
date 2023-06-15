import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Hospital } from "./hospital";
import { Department } from "./department";

@Injectable({
  providedIn: "root",
})
export class DBService {
  arr: Hospital[];
  constructor(private http: HttpClient) {}
  getHospitals(): Observable<any> {
    return this.http.get<any>(
      "http://localhost:60876/api/Hospital/GetHospitals"
    );
  }
  getDeprtmentbyHospitalId(selectedHospital: number): Observable<Department[]> {
    return this.http.get<Department[]>(
      `http://localhost:60876/api/Hospital/GetDepartmentByHospitalId/${selectedHospital}`
    );
  }
  GetAllData(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(
      "http://localhost:60876/api/Hospital/GetAllData"
    );
  }
  GetHospitalById(hospitalId: number): Observable<Hospital> {
    return this.http.get<Hospital>(
      `http://localhost:60876/api/Hospital/GetHospitalById/${hospitalId}`
    );
  }
  updateHospital(hosObj: Hospital): Observable<Hospital> {
    return this.http.put<Hospital>(
      "http://localhost:60876/api/Hospital/UpdateHospital",
      hosObj
    );
  }
  addnewHospital(Hospital: Hospital): Observable<Hospital> {
    return this.http.post<Hospital>(
      "http://localhost:60876/api/Hospital/addnewHospital",
      Hospital
    );
  }
  GetRating7ofHospitals(selectedTypeQuestion: number): Observable<number[]> {
    return this.http.get<number[]>(
      `http://localhost:60876/api/Hospital/GetRating7ofHospitals/${selectedTypeQuestion}`
    );
  }
  //  uploadMultiImages(imagesMultiFiles: File[], id: number) {

  //   let input = new FormData();
  // for (let index = 0; index < imagesMultiFiles.length; index++) {
  //   const file = imagesMultiFiles[index];

  // input.append('file'+index, file, file.name);
  // }
  //   // let headers = new HttpHeaders();
  //   // headers.append('Content-Type', 'multipart/form-data');
  //   // let options = { headers: headers };
  //   let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   let options = { headers: headers};
  //   return this.http.post(`http://localhost:60876/api/Hospital/uploadMulti/${id}`, input, options );

  // }
  public uploadImage(file: File, id: number): Observable<ArrayBuffer> {
    let input = new FormData();
    input.append("file", file, file.name);
    let headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    let options = { headers: headers };

    return this.http.post<ArrayBuffer>(
      `http://localhost:60876/api/Hospital/upload/${id}`,
      input,
      options
    );
  }
}
