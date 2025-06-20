import { useState } from "react";

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const setValue = (field, values) => {
    setValues((prev) => ({ ...prev, [field]: values }));
  };
  const reset = () => {
    setValues(initialValues);
  };
  return { values, setValue, reset };
}
