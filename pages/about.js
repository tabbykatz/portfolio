import * as React from "react";
import { Row, Col } from "react-flexbox-grid";

import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { PRESENT } from "../constants/Stack";

const About = () => {
  const tldr = {
    Proficient: ["Bash", "C", "Python", "JavaScript", "SQL"],
    Current_focus: ["React", "CSS", "HTML", "Express", "Node.js", "PostgreSQL"],
    Familiar: ["Docker", "Flask", "NGINX", "Puppet", "Next.js"],
    Not_afraid_of: ["Learning new languages or technologies"],
  };
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
                  Python, and Javascript.
                  <pre>{JSON.stringify(tldr, null, 2)}</pre>
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
    </>
  );
};

export default About;
