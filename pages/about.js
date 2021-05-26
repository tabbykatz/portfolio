import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'

import Layout from '../components/Layout'
import Icon from '../components/Icon'
import { PRESENT } from '../constants/Stack'

function About() {
  return (
    <>
      <Layout secondaryPage>
        <div style={{ marginTop: 50 }}>
          <h1 className="blog-title">
            Hi, I'm Tabitha.
          </h1>
<div className="pic-container">
  <div className="pic-box">
    <div className="pic-spin-container">
      <div className="pic-shape">
        <div className="pic-bd"></div>
      </div>
     </div>
  </div>
</div>

          <div className="about-intro">
            <Row>
              <Col md={12}>
	  <div className="about-intro">
                I'm a self-taught software dev with a strong foundation in C, Python, and Javascript. I am comfortable on the Linux command line and have plenty of DevOps experience. I derive real joy from problem-solving and the discovery of odd things in the world of code.<br /><br />
</div>
              </Col>
            </Row>
			<br /><br /> 
            What I've worked with so far:

            <Row style={{ marginTop: 30 }} className="data-icon">
              {PRESENT.map(s => (
                <Col md={2} xs={4} key={s} style={{ className: "data-icon", textAlign: 'center', marginBottom: 40 }}>
                  <Icon type={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
