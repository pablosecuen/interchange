"use client";

import { useState, ChangeEvent } from "react";

interface FormValues {
  phoneAdult: string | number | readonly string[] | undefined;
  emailAdult: string | number | readonly string[] | undefined;
  lastNameAdult: string | number | readonly string[] | undefined;
  firstNameAdult: string | number | readonly string[] | undefined;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
}

const useRegister = (initialState: FormValues) => {
  const [formData, setFormData] = useState<FormValues>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
    setFormData,
  };
};

export default useRegister;
