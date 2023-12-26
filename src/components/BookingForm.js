import React from "react"; 
import { useState } from "react";

export default function BookingForm(props) {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <form style="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>
            <label htmlfor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} required />
            <label htmlfor="res-time">Choose time</label>
            <select id="res-time " value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map(availableTimes => {
                    return <option key={availableTimes}>{availableTimes}</option>
                    })}
            </select>
            <label htmlfor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}} required />
            <label htmlfor="occasion">Occasion</label>
            <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input aria-label="On Click" type="submit" value="Make Your reservation" />
        </form>
    );
}