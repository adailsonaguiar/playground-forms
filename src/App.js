import React from 'react';
import './App.css';
import { useFormValidator } from './hooks/form-validator';

function App() {
  const formValues = useFormValidator({
    initialValues: {
      userEmail: 'adailsonacj@live.com',
      userPassword: '123456',
    },
  });
  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="userEmail"
          value={formValues.values.userEmail}
          onChange={formValues.handleChange}
        />
        <input
          type="password"
          name="userPassword"
          value={formValues.values.userPassword}
          onChange={formValues.handleChange}
        />
        <button type="submit">PRÓXIMO</button>
      </form>
    </div>
  );
}

export default App;
