import { useState } from 'react';

export function useFormValidator({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const fieldName = e.target.getAttribute('name');
    const value = e.target.value;
    setValues({ ...values, [fieldName]: value });
  }
  return {
    handleChange,
    values,
  };
}
