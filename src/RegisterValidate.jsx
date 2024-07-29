function Validation(values) {
    let error = {}
    const email_pattern = /^[^/s@]+@[^/s@]+\.[^\s@]+/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    if (type === 'register') {
        if (values.name === "") {
          errors.name = "Name should not be empty";
        }
      }
    
      if (values.email === "") {
        errors.email = "Email should not be empty";
      } else if (!email_pattern.test(values.email)) {
        errors.email = "Email didn't match";
      }
    
      if (values.password === "") {
        errors.password = "Password should not be empty";
      } else if (!password_pattern.test(values.password)) {
        errors.password = "Password didn't match";
      }
    
      if (type === 'register') {
        if (values.confirm_password === "") {
          errors.confirm_password = "Confirm password should not be empty";
        } else if (values.password !== values.confirm_password) {
          errors.confirm_password = "Passwords do not match";
        }
      }
    
      return errors;
}
export default Validation; 