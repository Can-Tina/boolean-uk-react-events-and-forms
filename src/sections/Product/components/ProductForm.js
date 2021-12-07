import ColorSquare from "./ColorSquare"

function ProductForm(props) {

    return(
        <form className="form-stack" onSubmit={props.submitForm}>
            <label>Size</label>
            <input type="radio" id="size-sm" name="size" value="small" onChange={(event) => props.handleChange(event)}/>
            <label htmlFor="size-sm">S</label>
            <input type="radio" id="size-md" name="size" value="medium" onChange={(event) => props.handleChange(event)}/>
            <label htmlFor="size-md">M</label>
            <input type="radio" id="size-lg" name="size" value="large" onChange={(event) => props.handleChange(event)}/>
            <label htmlFor="size-lg">L</label>
            <label htmlFor="color">Color</label>
            <ColorSquare color={props.formState.color}/>
            <select id="color" name="color" value={props.formState.color} onChange={(event) => props.handleChange(event)}>
                <option value="">Please Select a Color...</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" value={props.formState.quantity} onChange={(event) => props.handleChange(event)}/>
            <button type="submit">Buy</button>
        </form>
    )
}

export default ProductForm