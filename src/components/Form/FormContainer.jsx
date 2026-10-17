import { useState } from "react";
import { FormUI } from "./FormUI";
import { validateForm } from "./validateForm";

export const FormContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm(formData);

    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      setErrors({});
      console.log(formData);
      setFormData({
        name: "",
        lastname: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <FormUI
      onChange={handleChange}
      onSubmit={handleSubmit}
      errors={errors}
      formData={formData}
    />
  );
};