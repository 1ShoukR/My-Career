import React from 'react';
import { useState } from 'react';

function Form() {
    const formValidation = (text, name) => {
    switch (name) {
        case 'email':
           // write email validation that it contains the @ symbol
            let emailReg = /\S+@\S+\.\S+/;
            setFormData({ ...formData, [name]: text });
            console.log(emailReg.test(text));
            break;
        case 'firstName':
           // write name validation name is greater than 5 characters
            setFormData({ ...formData, [name]: text });
            break;
        case 'lastName':
            setFormData({ ...formData, [name]: text });
            break;
        case 'password':
            setFormData({ ...formData, [name]: text });
        default:
            break;
        }
    };
        const defaultForm = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    const [formData, setFormData] = useState(defaultForm);
    return (
        <div>
        <form>
            <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
            />
            <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
            />
            <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
            />
            <input
            type="email"
            placeholder="email"
            name="email"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
            />
        </form>
        </div>
    );
}

export default Form;
