import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Layout from '../components/Layout'
import { SETUP } from '../constants/Setup'

function Setup({ og }) {
  return (
    <>
      <Layout secondaryPage>
	  <div style={{ marginTop: 50 }}>
        <h1 className="main-h1 about-h1">My Setup
	  </h1>

        <div className="about-intro">
	  	<Row>
	  <Col md={12}>
	  <div className="about-intro">
          I have been lucky to receive a lot of support as I transition from housewife to software engineer, and some of that has been in the form of material additions to my setup, but much has been valuable advice & recommendations. Thought I'd share what I use here.
        </div>
	  </Col>
	  </Row>
	  <Row style={{ marginTop: 30 }}>
        {SETUP.map(({ title, stack }) => (
          <ul className="uses-list" key={title}>
            <li className="head">{title}</li>

            {stack.map(({ name, description, link }) => (
              <li key={name}>
                <a href={link} target="_blank" rel="noopener noreferrer nofollow">{name}</a>
                <span>{description}</span>
              </li>
            ))}
          </ul>
        ))}
	  </Row>
	  </div>
	  </div>
      </Layout>
    </>
  )
}

Setup.getInitialProps = () => {
  return {
    data: {
      og: {
        description: "My current setup, for those curious.",
        image: ""
      }
    }
  }
}

export default Setup
