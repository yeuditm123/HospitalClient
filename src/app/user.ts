export class User {
  UserId: number;
  UserName: string;
  Email: string;
  UserPassword: string;
  UserImage: string;
  CreateDate: Date;
  Summary: string;
  IsDisabled: boolean;
  IsAdmin: boolean;

  constructor(
    UserName?: string,
    Email?: string,
    UserPassword?: string,
    UserImage?: string,
    CreateDate?: Date,
    Summary?: string,
    IsDisabled?: boolean,
    IsAdmin?: boolean
  ) {
    this.UserName = UserName;
    this.Email = Email;
    this.UserPassword = UserPassword;
    this.UserImage = UserImage;
    this.CreateDate = CreateDate;
    this.Summary = Summary;
    this.IsDisabled = IsDisabled;
    this.IsAdmin = IsAdmin;
  }
}
