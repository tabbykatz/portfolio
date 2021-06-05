import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import Layout from '../components/Layout'
import { SETUP } from '../constants/Setup'

function Setup({ og }) {
  return (
    <>
      <Layout secondaryPage>
	  <div style={{ marginTop: 50 }}>
        <h1 className="blog-title">My Setup
	  </h1>

        <div className="about-intro">
	  	<Row>
        <div className="setup-div">
          <img className="setup-img" src="/setup_image_2021.jpg"></img>
        </div>
	  <Col md={12}>
	  <div className="about-intro">
      What programmer worth their salt doesn't have strong opinions about the tools they use? So, for the curious, here's where I sit with hardware & software choices. I'm a work in progress and I love to try new things, so let me know if you think I should open my mind to something new. (Except Emacs. Never Emacs.)
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
