import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    console.log("what is db name : ",process.env.MONGODB_URI)
    try {
    const connectionInstance =     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MONGODB  connected !! DB HOST : ${connectionInstance.connection.host}`)
    console.log("what is connection Insatance : ", connectionInstance)
    } catch (error) {
        console.log("MONGODB connection error : ", error);
        process.exit(1);
    }
}

export default connectDB;