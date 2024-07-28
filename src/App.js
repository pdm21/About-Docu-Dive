import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container className="my-5">
      {/* First Row */}
      <Row className="mb-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Welcome to My Web App</Card.Title>
              <Card.Text>
                This web app showcases my project, Docu-Dive, a full-stack
                multi-document-search web-app that utilizes Retrieval Augmented
                Generation. Below, you can explore a demonstration video,
                process document, and more information on the tech stack behind
                this application.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Second Row */}
      <Row className="mb-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Video Demonstration</Card.Title>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/a_Yy5zWF3pI"
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Process Document</Card.Title>
              <Button href="/yourfile.pdf" download>
                Download PDF
              </Button>
            </Card.Body>
          </Card>
          <Card className="tech-stack-card">
            <Card.Body>
              <Card.Title>Tech Stack</Card.Title>
              <ul className="tech-stack-list">
                <li>
                  <strong>Frontend:</strong> React.js
                </li>
                <li>
                  <strong>Backend:</strong> Python, FastAPI
                </li>
                <li>
                  <strong>Libraries:</strong> Langchain, ChromaDB
                </li>
                <li>
                  <strong>Cloud Services:</strong> AWS Bedrock, AWS S3, AWS EC2
                </li>
                <li>
                  <strong>Containerization:</strong> Docker, AWS ECR
                </li>
                <li>
                  <strong>Web Server:</strong> Nginx (configured on EC2)
                </li>
                <li>
                  <strong>Security:</strong> SSL/TLS certificates for secure
                  access
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Third Row */}
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>About Docu-Dive</Card.Title>
              <Card.Text>
                Hi, I'm Pandelis Margaronis. Attending a liberal arts school, my
                friend and I have to complete abundant reading and write essays
                frequently. My friends in humanities classes have it way worse
                than me. They have always found it frustrating when they need to
                dig up evidence from a series of readings or novels, for some
                sort of essay. This process is inevitably tedious and
                tiresome... and querying a GenAI LLM to find quotes or evidence
                within a large document often proves to be a waste of time, as
                they have a tendency to hallucinate results in these occassions.
                Further, even if results are accurate, citations are not
                provided - if they are, they are vague.
                <br></br>
                <br></br>
                So, when my internship plans fell through last minute as a
                result of budget cuts at the company, I decided to take on this
                problem and create a solution by building a full-stack web
                application that my friends could use to aid them in their work,
                whether preparing for tests, writing papers, or completing
                mundane internship tasks. A couple of my friends found the tool
                helpful while taking summer courses and drafting write-ups for
                their internship tasks. The tool provides citations not only at
                the document-level or even page-level, but down to the specific
                chunk of content used.
                <br></br>
                <br></br>
                After letting my friends use the tool, using it myself, and
                purchasing the docu-dive.com domain, I ran up a personal project
                tab to be proud of. I disabled the backend to avoid further AWS
                and OpenAI charges, but the frontend is still accessible. I
                wanted to create a web application displaying the process that
                went into creating this app, as well as a video demo and use
                case, which inspired the creation of this React App.
              </Card.Text>
              <Button
                href="http://www.docu-dive.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Docu-Dive
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
