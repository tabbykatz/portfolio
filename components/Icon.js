import React from 'react'
import simpleIcons from 'simple-icons'
import Layout from '../components/Layout'

const Icon = ({ type, style }) => {
const icon = simpleIcons.get(type)
const theme = Layout.theme;

  return (
    <div class="data-icon"
      data-icon={type}
      style={{
        display: 'inline-block',
        width: '50px',
        margin: '0 auto',
        ...style,
      }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  )
}

export default Icon
