import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Station({station_info}) {
  return (
    <div >
        <Container style={{boxShadow: '0px 0px 0px 5px #ADACB0 '}}>
        <Row style={{backgroundColor: 'grey', marginBottom: 25}}>
            <Col md={3}> Station : {station_info["station_name"]} </Col>
            <Col md={2}> Arriving at : {station_info["timing"].substring(0, station_info["timing"].length/2)} </Col>
            <Col md={2}> Platform number : {station_info["platform"]} </Col>
            <Col md={1}> Halt : {station_info["halt"]} </Col>
            <Col md={2}> Delay : {station_info["delay"]} </Col>
            <Col md={2}> Distance : {station_info["distance"]} </Col>
        </Row>
    </Container>
        
    </div>
  )
}

export default Station
