import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='pageNotFoundDiv' style={{
      // backgroundImage: URL("https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png")
      width:"100vw",
      height:"100vh",
      display:'flex',
      flexDirection:'column',
      // justifyContent:'center',
      // alignItems:"center"
    }}>  
    <Link to='/' style={{
      alignSelf:'flex-start',
      fontSize:'2rem'
    }}>HOME</Link>
      <p style={{
        fontSize:"6rem",
        alignSelf:'center'
      }}>Page Not Found</p>
    </div>
  )
}

export default PageNotFound

