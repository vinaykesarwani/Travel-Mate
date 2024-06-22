import React, {useContext} from 'react'
import background from '../images/bg.jpg'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../images/icon.png'
import AuthContext from '../components/AuthContext'
import { useNavigate } from "react-router-dom";

function HomeScreen() {
    const navigate=useNavigate()
    let {user} =useContext(AuthContext)


  return (
    
    <div style={{backgroundColor: '#3C413E'}}>
        <Container fluid>
        <Row>
        <Col md={8} style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', opacity: 0.3}}>
            <div style={{ backdropFilter: 'blur(5px)', position: 'relative', top: 50, right: 100,fontSize: 60, textAlign: 'right', color: '#0F0404'}}> Connect with Your co-passengers</div>
        </Col>
        <Col md={4} className='d-flex flex-column align-items-center justify-content-center'>
            <Row style={{marginBottom: '40px'}}>
                <div>
                    <img src={logo} alt='logo' style={{height: 180}}></img>
                </div>
            </Row>
            <Row className='mb-4'>
                <div className='d-flex align-items-center flex-column'>
                    <div style={{color: 'white', fontSize: '15px', marginBottom: '15px'}}>While travelling in the train, Registered users can post request for medicines or other necessary items in emergency and then co-passengers will be notified to bring you help. </div>
                    {user ?  <Link to='/login/post' className='border border-2 border-dark' style={{fontSize: 30, color: 'black', textDecoration: 'none', padding: 5, backgroundColor: '#D3C69F', borderRadius: 5}}>View Advanced features</Link> : <Link to='/login' className='border border-2 border-dark' style={{fontSize: 30, color: 'black', textDecoration: 'none', padding: 5, backgroundColor: '#D3C69F', borderRadius: 5}}>Login for Advance features</Link>}
                </div>
            </Row>
            <Row>
                <div>
                {user ? <Link to='/guest' className='border border-2 border-dark' style={{fontSize: 30, color: 'black', textDecoration: 'none', padding: 5, backgroundColor: '#D3C69F', borderRadius: 5}}>Search Trains</Link> : <Link to='/guest' className='border border-2 border-dark' style={{fontSize: 30, color: 'black', textDecoration: 'none', padding: 5, backgroundColor: '#D3C69F', borderRadius: 5}}>Use as Guest</Link>}
                </div>
            </Row>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default HomeScreen