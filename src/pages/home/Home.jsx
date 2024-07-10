import React from 'react'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Maincontent from '../../components/maincontent/Maincontent'

export default function Home() {
  return (
    <>
    
    <div className="contentWrapper">
      <Topbar/>
      <Maincontent/>
    </div>
    
    </>
  )
}
