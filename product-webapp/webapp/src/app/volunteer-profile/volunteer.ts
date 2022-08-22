import { User } from "../user";

export class Volunteer {
    
    User = new User()
   
    vid!: number;
    city!: string;
    state! : string;
    address!:string;
    zipcode!:number;
   
    constructor(){}
}