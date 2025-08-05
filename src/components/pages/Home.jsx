import React from "react";
import {
  AboutSection,
  FooterSection,
  HeaderSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
  EducationSection,
  AchievementsSection,
  ContactSection,
} from "../sections";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <main className="flex flex-col items-stretch">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <FooterSection />
    </>
  );
};

export default Home;
