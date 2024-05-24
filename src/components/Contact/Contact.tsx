import "./Contact.css";

import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export const Contact: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const ServiceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate input fields and set error messages
    if (value.trim() === "") {
      let errorMessage = "";
      if (name === "user_name") {
        errorMessage = "Name is required";
      } else if (name === "user_email") {
        errorMessage = "Email is required";
      } else if (name === "message") {
        errorMessage = "Message is required";
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  // Disable the button if any field is empty
  useEffect(() => {
    const isDisabled = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    setIsButtonDisabled(isDisabled);
  }, [formData]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      // Handle form submission errors
      return;
    }

    // Form submission logic
    emailjs
      .sendForm(ServiceID, TemplateId, formRef.current!, {
        publicKey: PublicKey,
      })
      .then(
        () => {
          alert("SUCCESS! Your message has been sent.");
        },
        (error) => {
          alert("FAILED... " + error.text);
        }
      );
  };

  return (
    <section
      className="section contact glass center section__padding border__radius"
      id="contact"
    >
      <h2 className="section__title border__radius">get in touch</h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="form"
        encType="multipart/form-data"
        autoComplete="off"
      >
        <div className="field">
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          {errors.user_name && (
            <span className="error">{errors.user_name}</span>
          )}
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          {errors.user_email && (
            <span className="error">{errors.user_email}</span>
          )}
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <span className="error">{errors.message}</span>}
          {Object.values(errors).some((error) => error !== "") && (
            <p className="error">Please fill in all required fields.</p>
          )}
          <input
            type="submit"
            className="btn_submit"
            value="Send"
            disabled={isButtonDisabled}
          />
        </div>
      </form>
    </section>
  );
};
