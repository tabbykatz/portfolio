import * as React from "react";
import { Row, Col } from "react-flexbox-grid";
import Icon from "../components/Icon";
import Layout from "../components/Layout";

const Contact = () => {
  const socials = {
    linkedin: "https://www.linkedin.com/in/tabithaomelay/",
    twitter: "https://twitter.com/tabby__katz",
    github: "https://github.com/tabbykatz",
    instagram: "https://www.instagram.com/tabby_katz/",
  };

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="blog-title">Get in touch.</h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
                Isolation is real for all of us right now, so please reach out.
                I&apos;d love to hear what you think of my projects.
              </Col>
            </Row>
            <br /> <br />
            <Row style={{ marginTop: 30 }} className="data-icon">
              {Object.keys(socials).map((s) => (
                <Col
                  md={2}
                  xs={4}
                  key={s}
                  style={{
                    className: "data-icon",
                    marginBottom: 40,
                  }}
                >
                  <a
                    href={socials[s]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon type={s} />
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
