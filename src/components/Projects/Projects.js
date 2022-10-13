import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Jobby"
              description="Personal Jobby app to find the jobs for your profile and skills build with react.js,  and Nodejs. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Monu7671/jobby.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Music App"
              description="Music web app built to using HTML and CSS."
              ghLink="https://github.com/Monu7671/music-html.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crypto"
              description="Crypto Curreny Value for the trading of business to use. To build use of react js."
              ghLink="https://github.com/Monu7671/Crypto-clone.git"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatapp"
              description="Chat with friends to design chat app by using react and material UI."
              ghLink="https://github.com/Monu7671/Chatapp.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Restarunt"
              description="Food delivery and book to the table for the weekend in restarunt build restarunt app using HTML and CSS."
              ghLink="https://github.com/Monu7671/Food-clone.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Andriod mobile App"
              description="Andriod mobile Weather app using location app build wiht react-native and weather api."
              ghLink="https://github.com/Monu7671/Weather-clone.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
