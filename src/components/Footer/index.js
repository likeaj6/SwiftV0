import React from 'react'
import config from '../../../data/config'

const Footer = () => {
  return (
    <footer className='footer' style={{ height: '20px'}}>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
