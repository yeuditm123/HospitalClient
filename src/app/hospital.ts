import { Department } from "./department";

export class Hospital {
  HospitalId: number;
  HospitalName: string;
  UrlAddress: string;
  IsConfirmed: boolean;
  Tel: string;
  HosImage: string;
  HospitalAddress: string;
  Rating1GeneralSatisfactionAvg: number;
  Rating2ListenAndRelateAvg: number;
  Rating3GettingHelpEasilyAvg: number;
  Rating4SharingInformationAvg: number;
  Rating5AnEfficientProcessAvg: number;
  Rating6ConditionsOfHospitalizationAvg: number;
  Rating7PreventionOfMedicalErrorsAvg: number;
  TotalRatingAvg: number;
  Duration?: number;
  ISEDITED?: boolean;
  images: any[];
  Departments: Department[];
  constructor(
    HospitalId?: number,
    HospitalName?: string,
    UrlAdress?: string,
    IsConfirmed?: boolean,
    Tel?: string,
    HosImage?: string,
    HospitalAddress?: string,
    Rating1GeneralSatisfactionAvg?: number,
    Rating2ListenAndRelateAvg?: number,
    Rating3GettingHelpEasilyAvg?: number,
    Rating4SharingInformationAvg?: number,
    Rating5AnEfficientProcessAvg?: number,
    Rating6ConditionsOfHospitalizationAvg?: number,
    Rating7PreventionOfMedicalErrorsAvg?: number,
    TotalRatingAvg?: number,
    Departments?: Department[]
  ) {
    this.HospitalId = HospitalId;
    this.HospitalName = HospitalName;
    this.UrlAddress = UrlAdress;
    this.IsConfirmed = IsConfirmed;
    this.Tel = Tel;
    this.HosImage = HosImage;
    this.HospitalAddress = HospitalAddress;
    this.Rating1GeneralSatisfactionAvg = Rating1GeneralSatisfactionAvg;
    this.Rating2ListenAndRelateAvg = Rating2ListenAndRelateAvg;
    this.Rating3GettingHelpEasilyAvg = Rating3GettingHelpEasilyAvg;
    this.Rating4SharingInformationAvg = Rating4SharingInformationAvg;
    this.Rating5AnEfficientProcessAvg = Rating5AnEfficientProcessAvg;
    this.Rating6ConditionsOfHospitalizationAvg =
      Rating6ConditionsOfHospitalizationAvg;
    this.Rating7PreventionOfMedicalErrorsAvg =
      Rating7PreventionOfMedicalErrorsAvg;
    this.TotalRatingAvg = TotalRatingAvg;
    this.Departments = Departments;
  }
}
