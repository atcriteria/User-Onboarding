// Here goes the schema for the form
import * as yup from "yup";
    
    // The Yup form validation shapes
    export default yup.object().shape({
        name: yup
        .string()
        .required("Name is required"),
        email: yup
        .string()
        .email("Must be a valid email address")
        .required("Email is required"),
        password: yup
        .string()
        .required("Password is required")
        .min(6, "Passwords must be at least 6 character long."),
        tos: yup
        .boolean()
        .oneOf([true], "You must accept the Terms and Conditions")
    });