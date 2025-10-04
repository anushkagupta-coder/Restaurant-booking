import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"first name must contain at least 3 charecter"],
        maxLength:[30,"first name cannot excced 30 cahrecters"],
    },

    lastName:{
        type:String,
        required:true,
        minLength:[3,"first name must contain at least 3 charecter"],
    },

    email: {
        type:String,
        required:true,
        validate:[validator.isEmail,"provide a valid email"],
    },

    phone: {
        type:String,
        required:true,
        minLength:[10,"phone number must contain only 11 digits"],
        maxLength:[10,"phone number must contain only 11 digits"],
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },

});

export const Reservation=mongoose.model("Reaservation",reservationSchema);