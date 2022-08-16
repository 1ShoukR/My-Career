import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Output from './components/Output';

function App() {
  const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(defaultForm);

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
      case "lastName":
        setFormData({...formData, [name]: text })
        break;
      case "password":
        setFormData({...formData, [name]: text})
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className='outsideLinks'>
      <p>Connect With Facebook</p>
      <p>Connect With Twitter</p>
      </div>
      <div>
        <form className='inputForms'>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
          />
          <input 
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
          />
          <input
          type="password"
            placeholder="Password"
            name="password"
            value={formData.name}
            onChange={(e) => formValidation(e.target.value, e.target.name)}
          />
        </form>
        <div>
          <p>
            By creating an account, you agree to our <a href='#'>Terms & conditions</a>
          </p>
        </div>
        <div className='formButton'>
        <button className='button'>
          Create Account
        </button>
        <div>
          <Output />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
