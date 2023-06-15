import { User } from './user';
import { Department } from './department';

export class Opinion {
    OpinionId:number;
    UserId:number;
    DepartmentId:number;
    Title:string;
    Summary:string;
    Rating1GeneralSatisfaction:number;
    Rating2ListenAndRelate:number;
    Rating3GettingHelpEasily:number;
    Rating4SharingInformation:number;
    Rating5AnEfficientProcess:number;
    Rating6ConditionsOfHospitalization:number;
    Rating7PreventionOfMedicalErrors:number;
    IsConfirmed:boolean;
    TotalRating:number;
    Users:User;
    Departments:Department;
    Opinions:Opinion[];
    Total:number;

    constructor(OpinionId?:number,UserId?:number,DepartmentId?:number,Title?:string,Summary?:string,
        Rating1GeneralSatisfaction?:number,
        Rating2ListenAndRelate?:number,
        Rating3GettingHelpEasily?:number,
        Rating4SharingInformation?:number,
        Rating5AnEfficientProcess?:number,
        Rating6ConditionsOfHospitalization?:number,
        Rating7PreventionOfMedicalErrors?:number,
        IsConfirmed?:boolean,
        TotalRating?:number,
        Users?:User,
        Departments?:Department,
        
        )
        {
            this.OpinionId=0;
            this.UserId=UserId;
            this.DepartmentId=DepartmentId;
            this.Title=Title;
            this.Summary=Summary;
            this.Rating1GeneralSatisfaction=Rating1GeneralSatisfaction;
            this.Rating2ListenAndRelate=Rating2ListenAndRelate;
            this.Rating3GettingHelpEasily=Rating3GettingHelpEasily;
            this.Rating4SharingInformation=Rating4SharingInformation;
            this.Rating5AnEfficientProcess=Rating5AnEfficientProcess;
            this.Rating6ConditionsOfHospitalization=Rating6ConditionsOfHospitalization;
            this.Rating7PreventionOfMedicalErrors=Rating7PreventionOfMedicalErrors;
            this.IsConfirmed=true;
            this.TotalRating=0;
            this.Users=Users;
            this.Departments=Departments;
        

        }
        
    
}
