import contactformside from "../../assets/images/contact-form-side.png";
import Navbar from "../../components/navbar/navbar";
import "./contactPage.css";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateAustralianPhoneNumber = (value) => {
    const regex = /^(\+61|0)?4\d{8}$/; // Matches Australian mobile numbers
    const landlineRegex = /^(\+61|0)[2-8]\d{8}$/; // Matches Australian landline numbers
    return regex.test(value) || landlineRegex.test(value) || "Invalid Australian phone number";
  };

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_5is1s8q",
        "template_cm1uoso",
        form.current,
        "RkM2FrUoOYHzaXPhS"
      );
      alert("Email sent successfully!");
      form.current.reset(); // Reset the form after successful email sending
    } catch (error) {
      console.error("Failed to send email:", error.text);
    }
  };

  const handleFormSubmit = async (data) => {
    console.log("Submitting data:", data);
    setIsSubmitting(true); // Set loading state to true
    await sendEmail(); // Send email
    setIsSubmitting(false); // Set loading state back to false
    console.log("Form submission complete!");
  };

  return (
    <>
      <Navbar />
      <div className="contact-page" data-aos="fade-in">
        <div className="contact-banner">
          <p>Let's Join Galaxy, Your Best Partner</p>
        </div>
        <div className="contact-section">
          <img src={contactformside} alt="" />
          <div className="contact-form container">
            <div className="row">
              <div id="content">
                <h1> Get a Free Consultation </h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} ref={form}>
                  {isSubmitting && <div className="submitwait">Loading ...</div>}
                  <input
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    {...register("name", {
                      required: { value: true, message: "Name is required" },
                      minLength: { value: 3, message: "Minimum Length is 3" },
                      maxLength: { value: 30, message: "Max Length is 30" },
                    })}
                  />
                  {errors.name && <div className="error_message">{errors.name.message}</div>}

                  <input
                    className="form-control"
                    placeholder="Enter Email"
                    type="email"
                    name="mail"
                    {...register("mail", {
                      required: "Email Address is required",
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                  />
                  {errors.mail && <div className="error_message">{errors.mail.message}</div>}

                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    name="phone"
                    {...register("phone", {
                      required: "Phone number is required",
                      validate: validateAustralianPhoneNumber,
                    })}
                    className="form-control"
                  />
                  {errors.phone && <div className="error_message">{errors.phone.message}</div>}

                  <input
                    className="form-control"
                    placeholder="Area, City"
                    name="area"
                  />
                  <textarea
                    className="form-control"
                    placeholder="Enter your message"
                    rows="3"
                    name="message"
                    {...register("message", {
                      required: { value: true, message: "Message is required" },
                      minLength: { value: 10, message: "Minimum Length is 10" },
                      maxLength: { value: 200, message: "Max Length is 200" },
                    })}
                  />
                  {errors.message && <div className="error_message">{errors.message.message}</div>}

                  <input
                    type="submit"
                    disabled={isSubmitting}
                    id="submit"
                    value={isSubmitting ? "Sending ..." : "★ Send the Mail !"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage;






