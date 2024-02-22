import React from 'react'
import Layout from './layout/layout'
// import { Button } from 'bootstrap'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function Pagenotfound() {
const navigate=useNavigate()
  const button=()=>{
    navigate("/")
  }
  return (
    <Layout >
      {/* <h1>Given page is not found </h1> */}
      <div className="text-center pt-5">
      <strong><h1 style={{fontSize:"100px"}}>404</h1></strong>
      <p style={{fontSize:"30px"}}>Oops ! Page Not Found</p>
      <Button onClick={button}  variant='outlined'>Go Back</Button>
      </div>
    </Layout>
  )
}

export default Pagenotfound
