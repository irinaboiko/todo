import { useCallback, useState } from "react";

export default (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setFormValues({
        ...formValues,
        [name]: value,
      });
    },
    [formValues]
  );

  const clearInput = useCallback(() => {
    setFormValues(initialValue);
  }, [formValues]);

  return [formValues, handleChange, clearInput];
};
