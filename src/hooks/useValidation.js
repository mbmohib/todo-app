import { useState } from 'react';

const useValidation = () => {
  const [validation, setValidation] = useState({ isValid: false, message: '' });

  const handleChange = value => {
    if (!value.trim()) {
      setValidation({
        isValid: false,
        message: 'Please enter your todo.',
      });
    } else {
      setValidation({
        isValid: true,
        message: '',
      });
    }
  };

  return [validation, handleChange];
};

export default useValidation;
