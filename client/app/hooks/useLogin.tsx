"use client";
import { useState, useEffect, ChangeEvent } from "react";

interface FormData {
  email: string;
  password: string;
}

interface UseLoginProps {
  formData: FormData;
  rememberMe: boolean;
  handleRememberMe: React.ChangeEventHandler<HTMLInputElement>;
  handleFormDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const useLogin = (initialFormData: FormData): UseLoginProps => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleRememberMe: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  };

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /*   useEffect(() => {
    const storedData = rememberMe
      ? localStorage.getItem("loginFormData")
      : sessionStorage.getItem("loginFormData");

    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [rememberMe]);

  useEffect(() => {
    if (!rememberMe) {
      sessionStorage.setItem("loginFormData", JSON.stringify(formData));
      localStorage.removeItem("loginFormData");
    } else {
      localStorage.setItem("loginFormData", JSON.stringify(formData));
      sessionStorage.removeItem("loginFormData");
    }
  }, [rememberMe, formData]);
 */
  return {
    formData,
    rememberMe,
    handleRememberMe,
    handleFormDataChange,
  };
};

export default useLogin;
