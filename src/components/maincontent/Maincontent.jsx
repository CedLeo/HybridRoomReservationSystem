import React from 'react'
import "./maincontent.css"
import { Link } from "react-router-dom";


export default function Maincontent() {
  return (
    <div className="content">
      <div className="hybridContainer">
        <div className="hybrid1 hybridWrapper">
            <div className="hybridImg">
              <div className='hybridName'>
              <h1>Hybrid Room 1</h1>
              </div>
            </div>
            <div className="hybridBtns">
                <Link to="/setsched" className="setSched schedBtn">
                <p>Set Schedule</p>
                </Link>
                <Link to="/viewsched" className="viewSched schedBtn">
                <p>View Schedule</p>
                </Link>
            </div>
        </div>
        <div className="hybrid2 hybridWrapper">
             <div className="hybridImg">
             <div className='hybridName'>
              <h1 >Hybrid Room 2</h1>
              </div>
             </div>
             <div className="hybridBtns">
                 <Link to="/setsched" className="setSched schedBtn">
                  <p>Set Schedule</p>
                  </Link>
                  <Link to="/viewsched" className="viewSched schedBtn">
                  <p>View Schedule</p>
                  </Link>
             </div>
        </div>
      </div>
    </div>
  )
}
