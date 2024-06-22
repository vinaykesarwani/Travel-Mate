import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import pin from '../images/pin.svg'

function Train({props}) {
  const days=props.run_days
  let result=[]
  for (let i = 0; i < days.length; i += 3) {
    result.push(days.slice(i, i + 3));
  }

  return (
    <div >
      <Container fluid style={{color: 'white'}}>
        <Row style={{ borderBottom: '2px solid black', padding: '3px'}}>
            <Col md={1} style={{backgroundColor:'#9E3536'}}>
              <Link to={`/train/details/${props.train_number}`} style={{color: 'white'}}>
              <img src={pin} alt='logo' style={{height: 20}}></img>Check <span style={{paddingLeft: '18px'}}>status</span>
              </Link>
            </Col>
            <Col md={1}>
                Train no. : {props.train_number}
            </Col>
            <Col md={2}>
                Train name : {props.train_name}
            </Col>
            <Col md={2}>

                Train runs on : {result}
            </Col>
            <Col md={2}>
                arrival time : {props.from_sta}
            </Col>            
            <Col md={2}>
                Reach destination at : {props.to_sta}
            </Col>
            <Col md={2}>
                last station : {props.to_station_name}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Train
