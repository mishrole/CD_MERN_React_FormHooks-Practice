import React, { useState } from 'react';

const UserForm = ( props ) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password, confirm };
    console.log("Welcome", newUser);
    clearForm();
  }

  const clearForm = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
    setConfirm('');
  }

  return (
    <>
      <form onSubmit = { createUser }>
        <div>
          <label>Firstname:</label>
          <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = { firstname } />
        </div>

        <div>
          <label>Lastname:</label>
          <input type="text" onChange={ (e) => setLastname(e.target.value) } value = { lastname } />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" onChange={ (e) => setEmail(e.target.value) } value = { email } />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" onChange={ (e) => setPassword(e.target.value) } value = { password } />
        </div>

        <div>
          <label>Confirm Password:</label>
          <input type="password" onChange={ (e) => setConfirm(e.target.value) } value = { confirm } />
        </div>

        <button type="submit">Create User</button>
      </form>

      <div>
        <h3>Your Form Data</h3>
        <p><strong>First Name:</strong> {firstname}</p>
        <p><strong>Last Name:</strong> {lastname}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Password:</strong> {password}</p>
        <p><strong>Confirm Password:</strong> {confirm}</p>
      </div>
    </>
  );
}

export default UserForm;