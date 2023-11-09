import { Membres } from "./membres";

export class Activite {
    static id(id: any) {
      throw new Error('Method not implemented.');
    }
    constructor(public id:number,public nom:string,public image:string,public prix:number,public date:Date,public lieu:string,public membre?:Membres[]){}
}
