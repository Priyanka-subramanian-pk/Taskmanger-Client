// this is a file for handle formik validation
// it defines reusable validation logic

import * as Yup from "yup";


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //check for contain "@" and "." in the email


const firstNameValidation = Yup.string()
    .required('First name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name cannot exceed 50 characters');

const secondNameValidation = Yup.string()
    .required('Second name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(30, 'Name cannot exceed 50 characters');

const emailValidation = Yup.string()
    .matches(emailRegex, "Invalid email address")
    .email('Invalid email address')
    .required('Email is required');

const passwordValidation = Yup.string()
.min(8, "Must be at least 8 characters")
.matches(/[A-Z]/, "Must contain at least one uppercase letter")
.matches(/[a-z]/, "Must contain at least one lowercase letter")
.matches(/\d/, "Must contain at least one number")
.matches(/[@$!%*?&#]/, "Must contain at least one special character")
.required('Password is required');



export { firstNameValidation, secondNameValidation, emailValidation, passwordValidation };    