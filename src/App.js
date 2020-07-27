import React from 'react';
import './App.css';
import { useFormValidator } from './hooks/form-validator';

function App() {
  const formValidator = useFormValidator({
    initialValues: {
      userEmail: 'adailsonacj@live.com',
      userPassword: '123456',
    },
    validate: function (values) {
      const errors = {};
      if (!values.userEmail.includes('@'))
        errors.userEmail = 'Please, insert a valid email';
      return errors;
    },
  });
  return (
    <div className="App">
      <form>
        <div className="formField">
          <input
            className={formValidator.errors.userEmail && 'invalid'}
            type="text"
            name="userEmail"
            value={formValidator.values.userEmail}
            onChange={formValidator.handleChange}
          />
          {formValidator.errors.userEmail && (
            <span className="invalid-feedback">
              {formValidator.errors.userEmail}
            </span>
          )}
        </div>
        <input
          type="password"
          name="userPassword"
          value={formValidator.values.userPassword}
          onChange={formValidator.handleChange}
        />
        {/* {formValidator.errors.userEmail && (
          <span className="invalid-feedback">This field is required</span>
        )} */}
        <button type="submit">PRÓXIMO</button>
      </form>
    </div>
  );
}

export default App;
