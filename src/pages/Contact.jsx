//done

import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Snackbar, Alert, CircularProgress } from "@mui/material"; // Import Snackbar and Alert
import { sendEmail } from "../utils/emailService";
import ElectricBorder from "../components/modern/ElectricBorder";
import SplitText from "../components/modern/SplitText";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  }); // Snackbar state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields before submitting.",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    try {
      await sendEmail(formData);
      setLoading(false);
      setFormData({ fullname: "", email: "", message: "" });
      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error("Failed to send email.", error);
      setLoading(false);
      setSnackbar({
        open: true,
        message: "Failed to send message. Try again later.",
        severity: "error",
      });
    }
  };

  // Alternative method using the existing emailjs setup
  const handleSubmitEmailJS = (e) => {
    e.preventDefault();

    if (
      !formData.fullname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSnackbar({
        open: true,
        message: "Please fill in all fields before submitting.",
        severity: "warning",
      });
      return;
    }

    setLoading(true);

    // Fallback to EmailJS if SMTP backend is not ready
    const emailData = {
      ...formData,
      from_name: "Portfolio Website",
      user_email: formData.email,
    };

    // Note: You'll need to configure EmailJS service
    emailjs.send("your_service_id", "your_template_id", emailData, "your_user_id").then(
      () => {
        setLoading(false);
        setFormData({ fullname: "", email: "", message: "" });
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          severity: "success",
        });
      },
      (error) => {
        console.error("Failed to send email.", error.text);
        setLoading(false);
        setSnackbar({
          open: true,
          message: "Failed to send message. Try again later.",
          severity: "error",
        });
      }
    );
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <SplitText 
          text="Contact" 
          className="h2 article-title futuristic-heading"
        />
      </header>

      <SplitText 
        text="Connect with me" 
        className="h3 form-title futuristic-heading"
        style={{ textAlign: "center" }}
      />

      <ul
        className="social-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.3rem",
          marginBottom: "2rem",
        }}
      >
        <li className="social-item">
        <a
              href="https://www.instagram.com/abhishek_khot_3/"
              className="social-link"
            >
            <Instagram style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
        <a href="https://x.com/Khot_Abhishek_3" className="social-link">
            <Twitter style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
        <a
              href="https://www.linkedin.com/in/abhishek-r-khot-b42025260/"
              className="social-link"
            >
            <LinkedIn style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
        <a href="https://github.com/Abhishek-Khot" className="social-link">
            <GitHub style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
        <li className="social-item">
        <a href="https://wa.me/+919740641170" className="social-link">
            <WhatsApp style={{ width: "2.3rem", height: "3rem" }} />
          </a>
        </li>
      </ul>

      <ElectricBorder intensity="medium">
        <section className="contact-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input futuristic-input"
                placeholder="Full name"
                required
                onChange={handleChange}
                value={formData.fullname}
              />

              <input
                type="email"
                name="email"
                className="form-input futuristic-input"
                placeholder="Email address"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <textarea
              name="message"
              className="form-input futuristic-input"
              placeholder="Your Message"
              required
              onChange={handleChange}
              value={formData.message}
            ></textarea>

            <button 
              className="form-btn futuristic-btn" 
              type="submit" 
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="futuristic-loading" />
                  <span>Sending Message..</span>
                </>
              ) : (
                <>
                  <SendIcon />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => setSnackbar({ ...snackbar, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              onClose={() => setSnackbar({ ...snackbar, open: false })}
              severity={snackbar.severity}
              sx={{ width: "100%" }}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </section>
      </ElectricBorder>
    </article>
  );
}

export default Contact;
