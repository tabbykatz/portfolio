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
          <h1 className="main-h1 about-h1">
            About me.
          </h1>

          <div className="about-intro">
            <Row>
              <Col md={12}>
	  I'm a full stack engineer starting my Specializations year at Holberton School, where I've built a strong foundation in C and Python, developed projects ranging from a simple shell to an AirBnb clone. I have an affinity for bitwise operators, SQL (even if it's intimidating at times), and 'useless' front-end technologies.
                <br /><br />
As I complete my specialization as a full stack engineer, I hope to solidify my foundation while also learning new skills and finding my place in the community.

              </Col>
            </Row>

            <hr />

            <h3>What I've worked with so far:</h3>

            <Row style={{ marginTop: 30 }} className="data-icon">
              {PRESENT.map(s => (
                <Col md={2} xs={4} key={s} style={{ textAlign: 'center', marginBottom: 40 }}>
                  <Icon type={s} />
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>

            <hr />

            Follow me on {' '}
            <a href="https://twitter.com/tabby__katz" target="_blank" rel="noopener noreferrer nofollow">
              Twitter
            </a>.
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About
