import { useState } from "react"
import ProductForm from "./components/ProductForm"
import ProductInfo from "./components/ProductInfo";


function ProductSection() {

  const initialFormState = {
    size: "",
    color: "",
    quantity: 0
  };

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (event) => {
    setFormState((previousForm) => ({
      ...previousForm,
      [event.target.name]: event.target.value
    }));
  };

  const submitForm = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialFormState)
  }

  return (
    <section className="shadow pad-lg">
      <h2>Awesome T-Shirt</h2>
      <ProductInfo />
      <ProductForm submitForm={submitForm} formState={formState} handleChange={handleChange}/>
    </section>
  )
}

export default ProductSection
