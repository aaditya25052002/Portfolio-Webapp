import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const moonshot = [
    {
      title: "Neflix Clone Project",
      description:
        "Have developed Netflix clone project using reactjs and redux and firebase on backend",
      imgUrl:
        "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png",
    },
    {
      title: "Online Job Listing website",
      description:
        "Developed an open job listing website to post and find the jobs",
      imgUrl:
        "https://themeforest.img.customer.envatousercontent.com/files/201774530/590_yourjob.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=860f5877c1be2c1f94e011222bdebe09",
    },
    {
      title: "Weather Website",
      description: "Nodejs project",
      imgUrl:
        "https://uizard.io/static/9e9f1bfeac21afca096f9e286390cc6e/d9bdf/weather-web-dark-home.png",
    },
  ];
  const gestorDescansos = [
    {
      title: "Parivartan NFT Marketplace",
      description:
        "Created an NFT Marketplace for trading of NFTs of cultural artifacts for comercializing heritage",
      imgUrl:
        "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/02/25042416/NFT-Marketplace-Development-Company-1.png",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Projects WIP.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hackathons</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {moonshot.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {gestorDescansos.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem eligendi dicta officiis asperiores delectus
                          quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
