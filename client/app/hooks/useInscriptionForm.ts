"use client"
import { useState } from "react";
import { toast } from "sonner";
import { baseUrl } from "./baseurl";

const useInscripcionForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const sendFormData = async (email: string) => {
    try {
      const {
        floating_first_name,
        floating_last_name,
        floating_first_name1,
        floating_last_name1,
        floating_first_namestudent,
        floating_last_namestudent,
        floating_date_of_birth,
        floating_phone_numberstudent,
        floating_addressstudent,
        select_title,
        floating_email,
        floating_phone,
        floating_message,
      } = formData;
  
      const encodedEmail = encodeURIComponent("institutointerchange@gmail.com");
      const encodedFirstName = encodeURIComponent(floating_first_name);
      const encodedLastName = encodeURIComponent(floating_last_name);
      const encodedFirstName1 = encodeURIComponent(floating_first_name1);
      const encodedLastName1 = encodeURIComponent(floating_last_name1);
      const encodedDateOfBirth = encodeURIComponent(floating_date_of_birth);
      const encodedPhoneNumber = encodeURIComponent(floating_phone_numberstudent);
      const encodedAddress = encodeURIComponent(floating_addressstudent);
      const encodedGrade = encodeURIComponent(select_title);
      const encodedEmailAddress = encodeURIComponent(floating_email);
      const encodedPhone = encodeURIComponent(floating_phone);
      const encodedMessage = encodeURIComponent(floating_message);
      const encodedFirstNameStudent = encodeURIComponent(floating_first_namestudent);
      const encodedLastNameStudent = encodeURIComponent(floating_last_namestudent);
      
  
      const encodedURL = `${baseUrl}/send-email/preinscripcion/${encodedEmail}/${encodedFirstName}/${encodedLastName}/${encodedFirstName1}/${encodedLastName1}/${encodedFirstNameStudent}/${encodedLastNameStudent}/${encodedDateOfBirth}/${encodedPhoneNumber}/${encodedAddress}/${encodedGrade}/${encodedEmailAddress}/${encodedPhone}/${encodedMessage}`;
  console.log(encodedURL);
  
      const promise = () => new Promise((resolve, reject) => {
        fetch(encodedURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (response) => {
            if (!response.ok) {
              reject(new Error("Error en la solicitud"));
            } else {
              const responseData = await response.json();
              resolve(responseData);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
  
      toast.promise(promise, {
        loading: 'Enviando solicitud...',
        success: 'Solicitud enviada exitosamente!',
        error: 'Error al enviar la solicitud',
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return { formData, handleChange, resetForm, sendFormData };
};

export default useInscripcionForm;
