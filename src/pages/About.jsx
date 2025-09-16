import React, { useEffect } from "react";
import SplitText from "../components/modern/SplitText";
import ElectricBorder from "../components/modern/ElectricBorder";
import TimeLine from "../components/TimeLine";
import { educationData } from "../data/education";
import { experienceData } from "../data/experience";
import ServiceItems from "../components/ServiceItems";
import { servicesData } from "../data/serviceItems";
import { Button } from "@mui/material";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <article className="about  active" data-page="about">
      <header>
        <SplitText 
          text="About me" 
          className="h2 article-title futuristic-heading"
        />
      </header>

      <ElectricBorder intensity="low">
        <section className="about-text">
          <p>
            Passionate full-stack web developer currently in my Fourth year of
            <strong> Computer Science</strong> studies, with a strong foundation
            in both <strong> Front-end </strong>
            and <strong> Back-end development.</strong> I actively solve
            algorithmic problems on platforms like <strong>LeetCode</strong>,
            enhancing my problem-solving and coding skills.
          </p>
        </section>
      </ElectricBorder>

      <a
        href="https://drive.google.com/file/d/1DraZ3uWPRq2ajU2tKMwxnU1hjZrtAqIZ/view?usp=sharings"
        target="_blank"
      >
        <Button
          variant="outlined"
          size="large"
          className="futuristic-btn"
          sx={{
            color: "var(--neon-green)",
            borderColor: "var(--neon-green)",
            width: {
              xs: "100%",
              md: "15rem",
            },
            margin: "0 0 2rem 0",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "1rem",
            cursor: "pointer",
            '&:hover': {
              backgroundColor: "var(--neon-green)",
              color: "var(--smoky-black)",
              boxShadow: "var(--neon-glow)",
            }
          }}
        >
          View Resume
        </Button>
      </a>

      {/* service */}
      <section className="service">
        <SplitText 
          text="What i'm doing" 
          className="h3 service-title futuristic-heading"
          delay={0.1}
        />

        <ul className="service-list">
          <ServiceItems servicesData={servicesData} />
        </ul>
      </section>

      {/* Education */}
      <TimeLine title="Education" data={educationData} />

      {/* Experience */}
      <TimeLine title="Experience" data={experienceData} />
    </article>
  );
}

export default About;
