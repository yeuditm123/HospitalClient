export class Department {
  DepartmentId: number;
  HospitalId: number;
  DepartmentTypeId: number;
  FullName: string;
  DepartmentUrl: string;
  DepartmentManagerName: string;
  IsConfirmed: boolean;
  IsDeleted: boolean;
  VisitTime: string;
  Tel: string;
  Rating1GeneralSatisfactionAvg: number;
  Rating2ListenAndRelateAvg: number;
  Rating3GettingHelpEasilyAvg: number;
  Rating4SharingInformationAvg: number;
  Rating5AnEfficientProcessAvg: number;
  Rating6ConditionsOfHospitalizationAvg: number;
  Rating7PreventionOfMedicalErrorsAvg: number;
  ISEDITED?: boolean;
  constructor(
    DepartmentId?: number,
    HospitalId?: number,
    DepartmentTypeId?: number,
    FullName?: string,
    DepartmentUrl?: string,
    DepartmentManagerName?: string,
    IsConfirmed?: boolean,
    IsDeleted?: boolean,
    VisitTime?: string,
    Tel?: string,
    Rating1GeneralSatisfactionAvg?: number,
    Rating2ListenAndRelateAvg?: number,
    Rating3GettingHelpEasilyAvg?: number,
    Rating4SharingInformationAvg?: number,
    Rating5AnEfficientProcessAvg?: number,
    Rating6ConditionsOfHospitalizationAvg?: number,
    Rating7PreventionOfMedicalErrorsAvg?: number
  ) {
    this.DepartmentId = DepartmentId;
    this.HospitalId = HospitalId;
    this.DepartmentTypeId = DepartmentTypeId;
    this.FullName = FullName;
    this.DepartmentUrl = DepartmentUrl;
    this.DepartmentManagerName = DepartmentManagerName;
    this.IsConfirmed = IsConfirmed;
    this.IsDeleted = IsDeleted;
    this.VisitTime = VisitTime;
    this.Tel = Tel;
    this.Rating1GeneralSatisfactionAvg = Rating1GeneralSatisfactionAvg;
    this.Rating2ListenAndRelateAvg = Rating2ListenAndRelateAvg;
    this.Rating3GettingHelpEasilyAvg = Rating3GettingHelpEasilyAvg;
    this.Rating4SharingInformationAvg = Rating4SharingInformationAvg;
    this.Rating5AnEfficientProcessAvg = Rating5AnEfficientProcessAvg;
    this.Rating6ConditionsOfHospitalizationAvg =
      Rating6ConditionsOfHospitalizationAvg;
    this.Rating7PreventionOfMedicalErrorsAvg =
      Rating7PreventionOfMedicalErrorsAvg;
  }
}
