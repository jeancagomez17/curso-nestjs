import { Document } from "mongoose"
export interface ITask extends Document {
    id?:number,
    title:string,
    description:string,
    completed:boolean
}