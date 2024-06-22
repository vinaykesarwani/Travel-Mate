import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import background from '../images/guest_screen.webp'
import List_trains from '../components/List_trains'
// import {api_response} from '../train_between_stations_response.js'
import axios from 'axios'

function GuestScreen() {

  const [source, setSource] =useState('')
  const [destination, setDestination] =useState('')
  const [date_, setDate] =useState('')
  const [formattedDate, setFormattedDate] =useState('')
  const [data, setData]=useState([])

  const submitHandler= async (e) => {
    e.preventDefault()
    console.log(date_)
    api_response()
  }

  const handleDestinationChange = (e) => {
    setDestination(e.target.value)
  }

  const handleSourceChange = (e) => {
    setSource(e.target.value)
  }

  const format= (d) => {
    const [a,b,c] =d.split('-')
    return `${c}-${b}-${a}`
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
    const d=format(date_)
    setFormattedDate(d)
  }

  const api_response=async () => {
    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations',
      params: {
        fromStationCode: source,
        toStationCode: destination,
        dateOfJourney: date_
      },
      headers: {
        'x-rapidapi-key': '41e228c265mshce51d41432ed716p186a3fjsn1c2c605ad78b',
        'x-rapidapi-host': 'irctc1.p.rapidapi.com'
      }
    };
    let response=data
    try {
      const response = await axios.request(options);
      setData(data => (response.data.data));
      console.log("hi", response.data.data)
    } catch (error) {
      console.error(error);
    }
    return response
  }

  useEffect(() => {
    
  }, [data]);
  console.log("hi")

  return (
    <div style={{backgroundColor: '#3C413E'}}>
      <Container fluid style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', opacity: 0.7}}>
        <Row>
          <Header />
          <Col md={12} >
          
          <Form onSubmit={submitHandler} className='d-flex bold mt-4' style={{marginLeft: 100}}>

            <Form.Group className="mb-3 me-4" controlId="source">
              <Form.Label className='fw-bold fs-4'>Source</Form.Label>
              <Form.Control type="text" placeholder="Enter Source" value={source} onChange={handleSourceChange} />
            </Form.Group>

            <Form.Group className="mb-3 me-4" controlId="destination">
              <Form.Label className='fw-bold fs-4'>Destination</Form.Label>
              <Form.Control type="text" placeholder="Enter Destination" value={destination} onChange={handleDestinationChange} />
            </Form.Group>

            <Form.Group className="mb-3 me-4" controlId="date_">
              <Form.Label className='fw-bold fs-4'>Select Date</Form.Label>
              <Form.Control type="date" value={date_} onChange={handleDateChange} />
            </Form.Group>

            <Button variant="primary" type="submit" style={{height: '35px', marginTop: 45}}>
              Submit
            </Button>
          </Form>

          </Col>
        </Row>
        {data.length>0 &&
        <Row>
          <Col md={12}>
            <List_trains data={data} />
          </Col>
        </Row> }

      </Container>
    </div>
  )
}

export default GuestScreen