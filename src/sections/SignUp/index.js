import { useState } from "react"
import SignUpForm from "./components/SignUpForm"

function SignUpSection() {

  const initialFormState = {
    firstName: "",
    email: "",
    password: "",
    terms: false
  };

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (event) => {
    setFormState((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.value
    }));
  };

  const handleTermsChange = (event) => {
    setFormState((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.checked
    }));
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialFormState)
  }

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>
      <SignUpForm submitForm={submitForm} formState={formState} handleChange={handleChange} handleTermsChange={handleTermsChange}/>
    </section>
  )
}

export default SignUpSection
