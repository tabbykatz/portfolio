import React from 'react'

import Layout from '../components/Layout'
import { USES } from '../constants/Uses'

function Uses({ og }) {
  return (
    <>
      <Layout secondaryPage>
        <h1 className="main-h1 about-h1">My Setup</h1>

        <div className="uses-intro">
          I have been lucky to receive a lot of support as I transition from housewife to software engineer, and some of that has been in the form of material additions to my setup, but much has been valuable advice & recommendations. Thought I'd share what I use here.
        </div>

        {USES.map(({ title, stack }) => (
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
      </Layout>
    </>
  )
}

Uses.getInitialProps = () => {
  return {
    data: {
      og: {
        description: "My current setup, for those curious.",
        image: ""
      }
    }
  }
}

export default Uses
