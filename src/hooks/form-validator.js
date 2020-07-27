import { useState } from 'react';

export function useFormValidator({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const fieldName = e.target.getAttribute('name');
    const value = e.target.value;
    const newValues = { ...values, [fieldName]: value };
    setValues(newValues);
    validateValues(newValues);
  }

  function validateValues(values) {
    console.log('validando...', validate(values));
    setErrors(validate(values));
  }

  return {
    handleChange,
    values,
    errors,
    setErrors,
  };
}
