import { useState } from "react"

import BookingForm from "./components/BookingForm"

function BookingSection() {

  const initialFormState = {
    date: "",
    pool: false, 
    facial: false, 
    massage: false,
    newspaper: false, 
    breakfast: false
  };

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (event) => {
    setFormState((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.value
    }));
  };

  const handleCheckboxChange = (event) => {
    setFormState((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.checked
    }));
  };

  const submitForm = (event) => {
    event.preventDefault()
    const activities = [formState.pool, formState.facial, formState.massage]
    const services = [formState.newspaper, formState.breakfast]
    const date = formState.date
    const bookingData = {
      date,
      activities,
      services
    }
    console.log(bookingData)
    setFormState(initialFormState)
  }

  return (
    <section className="shadow pad-lg">
      <h2>Booking Form</h2>
      <BookingForm submitForm={submitForm} formState={formState} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange}/>
    </section>
  )
}

export default BookingSection
