function SignUpForm(props) {
    return(
        <form className="form-stack" onSubmit={props.submitForm}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={props.formState.firstName} onChange={(event) => props.handleChange(event)}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={props.formState.email} onChange={(event) => props.handleChange(event)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={props.formState.password} onChange={(event) => props.handleChange(event)}/>
            <div>
                <input type="checkbox" id="terms" name="terms" checked={props.formState.terms} onChange={(event) => props.handleTermsChange(event)}/>
                <label htmlFor="terms">I accept Terms and Conditons</label>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm