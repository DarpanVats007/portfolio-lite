import "./Contact.css";

import { ChangeEvent, FC, FocusEventHandler, FormEvent, useState } from "react";

import emailjs from "@emailjs/browser";

// import { contact } from "../../assets/portfolio";

interface ContactData {
  name: string;
  mobile: string;
  company: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [contactData, setContactData] = useState<ContactData>({
    name: "",
    mobile: "",
    company: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [successMsg, setSuccessMsg] = useState<boolean>(false);

  const isValidEmail = (email: string) =>
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  const isValidMobile = (mobileno: string) => /^[6-9]\d{9}$/.test(mobileno);

  const validateField = (field: string, value: string) => {
    let val = "";

    if (value.length) {
      if (field === "email" && !isValidEmail(value)) {
        val = "Invalid Email.";
      } else if (field === "mobile" && !isValidMobile(value)) {
        val = "Invalid Mobile Number.";
      }
    } else {
      val = "All fields are required";
    }

    return val;
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const field = validateField(event.target.name, event.target.value);
    setErrorMsg(field);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContactData({
      ...contactData,
      [name]: value,
    });

    if (name === "mobile") {
      setContactData({
        ...contactData,
        mobile: value.replace(/\D/, ""),
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !contactData.name ||
      !contactData.mobile ||
      !contactData.email ||
      !contactData.company ||
      !contactData.message
    ) {
      setSuccessMsg(false);
      setErrorMsg("All fields are required");
      return;
    }

    emailjs
      .sendForm(
        "gmail",
        "template_vokodvy",
        e.currentTarget,
        "user_NfCHed56Sv9ulz3iaOgCq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMsg(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      className="section contact glass center section__padding border__radius"
      id="contact"
    >
      <div id="contact">
        <div className="form no-glass">
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            autoComplete="off"
          >
            {!successMsg ? (
              <>
                <div id="errormessage" className={errorMsg ? "show" : ""}>
                  {errorMsg}
                </div>

                <div className="field">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={contactData.name || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {/* Other fields */}
              </>
            ) : (
              <span className="message">
                <p>Thank you for your message. We will contact you soon.</p>
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
