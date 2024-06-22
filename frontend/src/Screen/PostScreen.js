import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import AuthContext from '../components/AuthContext'
import Header from '../components/Header'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import delete_icon from '../images/delete.svg'

function PostScreen() {
  let [train, setTrain]=useState(0)
  let {user, authTokens} =useContext(AuthContext)
  let [trainNo, setTrainNo]=useState(0)
  let [seatNo, setSeatNo]=useState('')
  let [trainStartingDate, setTrainStartingDate]=useState('')
  let [description, setDescription] = useState('')
  let [items, setItems] = useState({})
  let [previous, setPrevious] = useState([])

  const navigate=useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getrequest/', {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json'
        }
      });
      setPrevious(response.data.reverse());
    
    } catch (error) {
      console.log('There was a problem: ', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const passengerDeatils={
      trainNo, seatNo, trainStartingDate, description
    }
    try {
      const response = await axios.post('http://localhost:8000/api/addrequest/', passengerDeatils, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authTokens.access}`
        }
      });
      setItems(response.data)
      alert('Details Posted');
    } catch (error) {
      console.error("There was an error posting the details!", error);
    }
  }

  const handleDelete = async (id) => {
    console.log(id)
    try {
      await axios.delete(`http://localhost:8000/api/deleterequest/${id}/delete/`, {
        headers: {
          'Authorization': `Bearer ${authTokens.access}`,
          'Content-Type': 'application/json'
        }
      });
      setPrevious(previous.filter(item => item.id !== id));
      alert('Item deleted successfully');
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  }

  const handleTrain = () => {
    navigate('/login/needs', {state:{train:{train}}})
  }

  useEffect(() => {
    fetchData()
  }, [items]);
  console.log("hi")

  return (
    <div>
      <Header></Header>
      <Container fluid>
        
        <Row>
          <Col md={12} >
          
          <Form onSubmit={handleTrain} className='d-flex align-items-center bold mt-4' style={{marginLeft: 100, marginBottom: 25}}>
            <Form.Group className="me-2" controlId="train" style={{display: 'flex', alignItems: 'center'}}>
              <Form.Label className='fw-bold fs-4 me-2' style={{color: '#393f81'}}>Think you can help your co-passengers,  Enter your Train Number</Form.Label>
              <Form.Control style={{width: '200px'}} type="number" value={train} onChange={(e) => setTrain(e.target.value)} />
            </Form.Group>
          
            <Button variant="primary" type="submit" style={{height: '35px'}}>Submit</Button>
          </Form>
          </Col>
        </Row>

      <Form className='d-flex flex-column' onSubmit={handleSubmit}>

        <Row>
          <Col md={3}  style={{borderRight: '2px solid black', overflowY: 'scroll'}}>
            <h3 style={{textAlign: 'center', margin: 20}} >Previous requests </h3>
            <div style={{textAlign: 'center'}}>Once your request is fulfilled, please delete it</div>
            <ul>
                {previous.map((term, index) => (
                  <li key={index} style={{border: '2px solid black', borderRadius: 3, margin: 5}} >{term.description} <div onClick={() => handleDelete(term.id)} className=' d-flex flex-row justify-content-end' style={{cursor: 'pointer'}}><img src={delete_icon}></img></div></li>
                ))}
            </ul>
          </Col>
          <Col md={1}>
            
          </Col>
          <Col md={7}>

          <h3 style={{textAlign: 'center', margin: 20}} > Enter your train details to get help </h3>
            <Row>
            <Col md={6}>
            <Form.Group className="mb-3 me-4" controlId="trainNo">
            <Form.Label className='fs-4'>Train number (dd-mm-yyyy)</Form.Label>
            <Form.Control type='number' name='trainNo' size="lg" value={trainNo} onChange={(e) => setTrainNo(e.target.value)}/>
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3 me-4" controlId="seatNo">
            <Form.Label className='fs-4'>Seat Number(coach_no-seat_no)</Form.Label>
            <Form.Control type='text' name='seatNo' size="lg" value={seatNo} onChange={(e) => setSeatNo(e.target.value)}/>
            </Form.Group>
            </Col>
            </Row>
        
            <Row>
            <Col md={6}>
            <Form.Group className="mb-3 me-4" controlId="trainDate">
            <Form.Label className='fs-4'>Train's Starting Date</Form.Label>
            <Form.Control type='text' name='trainDate' size="lg" value={trainStartingDate} onChange={(e) => setTrainStartingDate(e.target.value)}/>
            </Form.Group>
            </Col>
            </Row>

            <Row>
              <Col md={12}>
              <Form.Group className="mb-3 me-4" controlId="description">
              <Form.Label className='fs-4'>Brief your emergency needs</Form.Label>
              <Form.Control type='text' name='description' size="lg" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </Form.Group>
              <div className='d-flex justify-content-center'><Button className="mb-4 px-5" type='submit' color='dark' size='lg'>Post</Button></div>
              </Col>
            </Row>


            </Col>
            </Row>

      </Form>
    </Container>
    </div>
  )
}

export default PostScreen
