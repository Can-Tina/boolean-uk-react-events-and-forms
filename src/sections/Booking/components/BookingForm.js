function BookingForm(props) {

    return(
        <form className="form-stack" onSubmit={props.submitForm}>
            <label htmlFor="date">When will you be arriving?</label>
            <input type="datetime-local" name="date" value={props.formState.date} onChange={(event) => props.handleChange(event)}/>
            <section>
                <h3>Spa Activities</h3>
                <input type="checkbox" id="pool" name="pool" checked={props.formState.pool} onChange={(event) => props.handleCheckboxChange(event)}/>
                <label htmlFor="pool">Soak and Swim</label>
                <input type="checkbox" id="facial" name="facial" checked={props.formState.facial} onChange={(event) => props.handleCheckboxChange(event)}/>
                <label htmlFor="facial">Facial</label>
                <input type="checkbox" id="massage" name="massage" checked={props.formState.massage} onChange={(event) => props.handleCheckboxChange(event)}/>
                <label htmlFor="massage">Massage</label>
            </section>
            <section>
                <h3>Room Services</h3>
                <input type="checkbox" id="newspaper" name="newspaper" checked={props.formState.newspaper} onChange={(event) => props.handleCheckboxChange(event)}/>
                <label htmlFor="newspaper">Daily Newspaper</label>
                <input type="checkbox" id="breakfast" name="breakfast" checked={props.formState.breakfast} onChange={(event) => props.handleCheckboxChange(event)}/>
                <label htmlFor="breakfast">Breakfast</label>
            </section>
            <button type="submit">Book</button>
        </form>
      )
}

export default BookingForm