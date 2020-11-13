import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import schema from './schema';
import AccountsDisplay from './AccountDisplay';
import axios from 'axios';
import * as yup from "yup";

function App() {
  const initialDisabled = true;
  const initialAccounts = [];
  const initialFormValues = {
    name: "",
    email: "",
    password: "",
    tos: false
  };
  const [disabled, setDisabled] = useState(initialDisabled); // bolean
  const [accounts, setAccounts] = useState(initialAccounts); // i named it accounts instead of users
  const [formState, setFormState] = useState(initialFormValues);
  // Creating a slice of state to handle the error messages
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    tos: ""
  });

  const getAccounts = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data.data);
        setAccounts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const postNewAccount = (newAcc) => {
    axios
      .post("https://reqres.in/api/users", newAcc)
      .then((res) => {
        setAccounts([res.data, ...accounts]);
        setFormState(initialFormValues);
        console.log(res.data);
        console.log(accounts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // event handler 
  const inputChange = (name, value) => {

      yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
          setErrors({ ...errors, [name]: "" });
      })
      .catch(err => {
          setErrors({ ...errors, [name]: err.errors[0] });
      });

      setFormState({
          ...formState, [name]: value,
      });

  };

  //submit function
  const formSubmit = () => {
    const newAcc = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      password: formState.password,
      tos: formState.tos,
    };
    console.log(newAcc);
    console.log(accounts);
    postNewAccount(newAcc);
    console.log('submitted');
  }


  // Side Effects
  useEffect(() => {
    getAccounts();
  }, []);

  // This is what will allow us to enable/disable the submit button
  useEffect(() => {
    schema.isValid(formState).then((valid) => {
        setDisabled(!valid);
    });
  }, [formState]) //object is our formState that checks the state of the form entries. Passed down from App.js 

  return (
    <div className="App">
      <Form
      submit={formSubmit}
      values={formState}
      change={inputChange}
      errors={errors}
      disabled={disabled} />
      <AccountsDisplay accounts={accounts} />
    </div>
  );
}

export default App;