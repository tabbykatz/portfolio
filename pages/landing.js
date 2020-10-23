import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import simpleIcons from 'simple-icons'
import { BUILD } from '../constants/Build'

const vercel = simpleIcons.get('vercel')

function landingPage() {
  return (
    <>
      <Layout Landing>
        <div style={{ marginTop: 50 }}>
        </div>
          <div className="about-intro">
            <Row>
              <Col md={12}>
	  <div className="about-intro">
               write things <br /><br />
write more things</div>
              </Col>
            </Row>
			<br /><br /> 
            This project was built with:

            <Row style={{ marginTop: 30 }} className="data-icon">
              {BUILD.map(s => (
                <Col md={2} xs={4} key={s} style={{ className: "data-icon", textAlign: 'center', marginBottom: 40 }}>
                  <Icon type={s} data="icon.svg"/>
                  <div className="stack-name">{s}</div>
                </Col>
              ))}
            </Row>
          </div>
      </Layout>
    </>
  )
}

export default landingPage
