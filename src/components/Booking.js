import React from "react";
import BookingForm from "./BookingForm";

export default function Booking() {
    return (
        <BookingForm availableTimes={props.availabletimes} dispatch={props.dispatch} submitForm={props.submitForm} />
    );
}