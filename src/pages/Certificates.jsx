import React, { useEffect, useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { certificates, categories } from "../data/certificatesData";
import { Box } from "@mui/material";

function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    setActiveCategory(category);
  };

  const filteredCertificates = certificates.filter(
    (cert) => activeCategory === "All" || cert.category === activeCategory
  );

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Certificates</h2>
      </header>

      <section className="certificates">
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isDropdownOpen ? "active" : ""}`}
            data-select
            onClick={handleDropdownToggle}
          >
            <div className="select-value" data-select-value>
              {activeCategory}
            </div>

            <div className="select-icon">
              {isDropdownOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </div>
          </button>

          {isDropdownOpen && (
            <ul className="select-list">
              {categories.map((category, index) => (
                <li key={index} className="select-item">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    data-select-item
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: "1.8rem",
          }}
        >
          {filteredCertificates.map((certificate, index) => (
            <div key={index} className="certificate-item">
              <div className="certificate-image-box">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  loading="lazy"
                />
              </div>

              <div className="certificate-content-box">
                <h3 className="certificate-name">{certificate.name}</h3>
                <p className="certificate-date">
                  Issued: {certificate.issuedDate}
                </p>
                {certificate.credentialId && (
                  <p className="certificate-id">
                    Credential ID: {certificate.credentialId}
                  </p>
                )}
                {certificate.issuer && (
                  <p className="certificate-issuer">
                    Issued by: {certificate.issuer}
                  </p>
                )}
              </div>

              {certificate.url && (
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </Box>
      </section>
    </article>
  );
}

export default Certificates;