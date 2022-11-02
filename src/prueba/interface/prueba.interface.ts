import { Document } from "mongoose"
export interface IPrueba extends Document {
    name:String,
    lastName:String
    age:Number,
    email:String,
    phone:Number
}