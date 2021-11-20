import * as React from "react";
import { Row, Col } from "react-flexbox-grid";

import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { PRESENT } from "../constants/Stack";

const About = () => {
  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="blog-title">Hi, I&apos;m Tabitha.</h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                <div className="about-intro">
                  I&apos;m a new software dev with a strong foundation in C,
                  Python, and Javascript. I am comfortable on the Linux command
                  line and have plenty of DevOps experience. I derive real joy
                  from problem-solving and the discovery of odd things in the
                  world of code.
                  <br />
                  <br />
                  <li>Proficient: Bash, C, Python, JavaScript, SQL</li>
                  <li>
                    Current focus: React, CSS, HTML, Express, Node.js,
                    PostgreSQL
                  </li>
                  <li>Familiar: Docker, Flask, NGINX, Puppet, Next.js</li>
                  <li>Not afraid of: Learning new languages or technologies</li>
                </div>
              </Col>
            </Row>
            <br />
            <br />
            What I&apos;ve worked with so far:
            <Row style={{ marginTop: 30 }} className="data-icon">
              {PRESENT.map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{
                    className: "data-icon",
                    textAlign: "center",
                    marginBottom: 40,
                  }}
                >
                  <Icon type={s} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
      );
    </>
  );
};

export default About;
