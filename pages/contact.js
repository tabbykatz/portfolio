import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout'

function Contact() {
  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="main-h1 about-h1">
            Get in touch.
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
	  write things
              </Col>
            </Row>

            <hr />

            <h3>You can find me here:</h3>

            <Row style={{ marginTop: 30 }} className="data-icon">
                <Col md={12}>
	  			<div className="stack-name">
                  <img className="data-icon" height="50" width="50" src="../public/github.svg"/>
   				  <img className="data-icon" height="50" width="50" src="../public/linkedin.svg"/>
	  			  <img className="data-icon" height="50" width="50" src="../[ublic/]twitter.svg"/>
	  			</div>
                </Col>
            </Row>

            <hr />

          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
