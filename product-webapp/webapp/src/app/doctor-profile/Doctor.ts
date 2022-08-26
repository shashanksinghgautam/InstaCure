import { User } from "../user";

export class Doctor{
  dob!: Date;
  gender!:string;
  address!: string;
  city!: string;
  state!: string;
  postalCode!: number;
  country!:string;
  educationQualifiaction!:string;
  speciality!:string;
  yearOfExpertise!: number;
  User = new User();

  constructor() {}
}