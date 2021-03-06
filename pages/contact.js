import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

const theme = Layout.theme;

function Contact() {

  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="blog-title">
            Get in touch.
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
	  Isolation is real for all of us right now, so please reach out. I'd love to hear what you think of my projects.
              </Col>
            </Row>
		<br /> <br />
	  </div>
	  </div>

	  			<div className="contact" width="100%" text-align="center">
			<a href="https://github.com/tabbykatz" target="_blank">
      GitHub</a> - <a href="https://twitter.com/tabby__katz" target="_blank">
      Twitter</a> - <a href="https://www.linkedin.com/in/tabbykatz/" target="_blank">
      LinkedIn</a> - <a href="mailto:tomelay@gmail.com">
      Email</a>
	  			</div>
      </Layout>
    </>
  )
}

export default Contact
