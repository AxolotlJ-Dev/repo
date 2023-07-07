import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../style/Contact.css"

const Contact = (props) => {
  return (
    <div className="cardContact display-1  d-flex justify-content-center align-items-center">
      <a href="/"> <FontAwesomeIcon icon={ props.icon } /> </a>
    </div>
  )
}

export default Contact