import {useCallback, useState} from "react";

export default (initialValue) => {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = useCallback(
    (event) => {
      const {name, value} = event.target;

      setFormValues({
        ...formValues,
        [name]: value
      })
    },
    [formValues],
  );

  return [formValues, handleChange];
}