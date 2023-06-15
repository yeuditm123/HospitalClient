import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Opinion } from "./opinion";

@Injectable({
  providedIn: "root",
})
export class OpinionService {
  constructor(private http: HttpClient) {}
  AddNewOpinion(newOpinion: Opinion): Observable<Opinion> {
    return this.http.post<Opinion>(
      "http://localhost:60876/api/Opinion/AddNewOpinion",
      newOpinion
    );
  }
  getAllOpinionByHospital(
    hospitalId: number,
    pageSize: number,
    pageIndex: number
  ): Observable<Opinion> {
    return this.http.get<Opinion>(
      `http://localhost:60876/api/Opinion/getAllOpinionByHospital/${hospitalId}/${pageSize}/${pageIndex}`
    );
  }
  getAllOpinionByDepartmentId(
    departmentId: number,
    pageSize: number,
    pageIndex: number
  ): Observable<Opinion> {
    return this.http.get<Opinion>(
      `http://localhost:60876/api/Opinion/getAllOpinionByDepId/${departmentId}/${pageSize}/${pageIndex}`
    );
  }
  getallOpinion(pageSize: number, pageIndex: number): Observable<Opinion> {
    return this.http.get<Opinion>(
      `http://localhost:60876/api/Opinion/getallOpinion/${pageSize}/${pageIndex}`
    );
  }
  updateisConfirmedOfOpinion(opinionObj: Opinion): Observable<Opinion> {
    return this.http.put<Opinion>(
      "http://localhost:60876/api/Opinion/updateisConfirmedOfOpinion",
      opinionObj
    );
  }
}
