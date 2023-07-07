import React from 'react'
import "../style/LocationNav.css"

const NavLoc = (props) => {
  return (
    <div>
        <div className={ `${props.styleNav} fontArc mt-3 location container-fluid text-center`}>
            <p> {`<${props.text} />`} </p>
        </div>
    </div>
  )
}

export default NavLoc;