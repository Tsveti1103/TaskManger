import { useState } from "react";
import { formIsValid } from "../services/utils";

export default function useErrors(values, password) {
    const [formErrors, setFormErros] = useState(values);
    const formValidate = (e) => {
        const value = e.target.value;
        const errors = {};
        const name = e.target.name

        // login and register
        if (name === 'username' && (value.length < 3 || value.length > 30)) {
            errors.username = 'Username name should be between 3 and 30 characters.';
        }
        else if (name === 'password' && value.length < 8) {
            errors.password = 'This password must contain at least 8 characters.';
        }
        else if (name === 'password' && [...value].every(c => '0123456789'.includes(c))) {
            errors.password = 'Password cannot contain only numbers';
        }
        else if (name === 'confirmPassword' && value !== password) {
            errors.confirmPassword = 'Passwords do not match.'
        }
        else if (name === 'email' && (!value.includes('@') || !value.includes('.'))) {
            errors.email = 'Enter a valid email address.';
        }
        // Create and Edit
        else if (name === 'title' && value.length > 30) {
            errors.title = 'Title should be between 1 and 30 characters.';
        }

        else if (name === 'description' && value.length > 300) {
            errors.description = 'Description should be between 1 and 300 characters.';
        }
        else if (name === 'priority' && (Number(value) < 0 || Number(value) > 10)) {
            errors.priority = 'The priority value must be between 0 and 10.';
        }

        // general
        else if (value.length < 1) {
            errors[name] = "This field is required"
        }
        else {
            errors[name] = ''
        }
        setFormErros(state => ({ ...state, ...errors }));
    };
    const isValid = formIsValid(formErrors)
    return { formErrors, formValidate, isValid }
}