import { Schema } from "mongoose";
export const pruebaSchema = new Schema({
    name:String,
    lastName:String,
    age:Number,
    email:String,
    phone:Number
})