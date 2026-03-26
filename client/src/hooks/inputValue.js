import { useState } from "react";

export const useInputValue = ({ initialValue = "", validator }) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);

    if (validator) {
      const { isValid, errorMessage } = validator(val);
      setError(isValid ? "" : errorMessage);
    }
  };

  const validate = () => {
    if (!validator) return true;

    const { isValid, errorMessage } = validator(value);
    setError(isValid ? "" : errorMessage);
    return isValid;
  };

  return {
    value,
    error,
    onChange,
    setValue,
    isValid: !error,
    validate,
  };
};
