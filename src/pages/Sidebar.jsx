//done

import React, { useState } from "react";
import { images } from "../Images";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MailOutline,
  PhoneIphone,
  CalendarToday,
  LocationOnOutlined,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";

function Sidebar() {
  const [openContent, setOpenContent] = useState(false);

  return (
    <aside className={openContent ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            style={{ borderRadius: "1rem" }}
            src={images.profile}
            alt="Richard hanrick"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Abhishek R Khot
          </h1>

          <p className="title">Aspiring Software Engineer </p>

          {/* <p className="title">Machine Learning</p> */}
        </div>

        <button
          className="info_more-btn"
          onClick={() => setOpenContent((prev) => !prev)}
          data-sidebar-btn
        >
          <span>Show Contacts</span>

          {openContent ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:khotabhishek15@gmail.com"
                className="contact-link"
              >
                khotabhishek15@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <PhoneIphone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+91 9740641170" className="contact-link">
                +91 9740641170
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CalendarToday />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">July 19, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LocationOnOutlined />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Belagavi, Karnataka, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.instagram.com/abhishek_khot_3/"
              className="social-link"
            >
              <Instagram />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/Khot_Abhishek_3" className="social-link">
              <Twitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/abhishek-r-khot-b42025260/"
              className="social-link"
            >
              <LinkedIn />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/Abhishek-Khot" className="social-link">
              <GitHub />
            </a>
          </li>
          <li className="social-item">
            <a href="https://wa.me/+919740641170" className="social-link">
              <WhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
