import React from 'react'

const ACTION_LINK = `https://act.eff.org/`;

function ElectronicFrontier() {
  return (
    <div className="eff">
      <span>
        I Fight Surveillance. {' '}

        <a href={ACTION_LINK} target="_blank" rel="noopener noreferrer nofollow">
		Join EFF
	  </a>.
      </span>
    </div>
  )
}

export default ElectronicFrontier
