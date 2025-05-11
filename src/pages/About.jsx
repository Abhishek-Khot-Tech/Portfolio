import React, { useEffect } from "react";
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
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Passionate full-stack web developer currently in my third year of
         <strong> Computer Science</strong> studies, with a strong foundation in both <strong> Front-end  </strong>
         and <strong> Back-end development.</strong> I actively solve algorithmic problems on
          platforms like <strong>LeetCode</strong>, enhancing my problem-solving and coding
          skills. With <strong>Three internships</strong> under my belt, I have gained practical
          experience in building scalable web applications and working in
          collaborative environments. I also thrive in competitive settings,
          having participated in multiple  <strong>hackathons</strong>, where I’ve honed my
          ability to innovate under pressure. Eager to leverage my skills and
          experiences to contribute to cutting-edge projects and continue
          growing as a developer.{" "}
        </p>
      </section>
     

      <a
        href="https://drive.google.com/file/d/1M6hbsB2aLO8P3A8-sJ6E7GhEawN7DllH/view"
        target="_blank"
      >
        <Button
          variant="outlined"
          size="large"
          sx={{
            color: "white",
            width: {
              xs: "100%",
              md: "15rem",
            },
            margin: "0 0 2rem 0",
            fontWeight: "bold",
            textTransform: "capitalize",
            borderRadius: "1rem",
            cursor: "pointer",
            border: "1px solid #FFDB70",
          }}
        >
          View Resume
        </Button>
      </a>

      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

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
