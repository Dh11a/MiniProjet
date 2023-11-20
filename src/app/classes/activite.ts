import { Membres } from "./membres";

export class Activite {
    constructor(public id:number,public nom:string,public image:string,public prix:number,public date:Date,public lieu:string,public membre?:Membres[]){}
}
