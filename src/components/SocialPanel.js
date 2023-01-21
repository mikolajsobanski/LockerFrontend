import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope} from 'react-icons/fa'

function SocialPanel() {
  return (
        
        <div className='socialPanel-container'>
            <Row>
              <Col md ={2}><a className='facebook' href='#'>  Facebook</a></Col>
              <Col md ={2}><a href='#'>  Youtube</a></Col>
              <Col md ={2}><a className='instagram' href='#'>   Instagram</a></Col>
              <Col md ={2}><a href='#'>   Gmail</a></Col>
              <Col md ={2}><a className='linkedin' href='#'>    Linkedin</a></Col>
              <Col md ={2}><a className='twitter' href='#'>      Twitter</a></Col>
            </Row>
        </div>
        
  )
}

export default SocialPanel