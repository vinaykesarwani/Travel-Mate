import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import { Container, Form } from 'react-bootstrap'
import background from '../images/helping.png'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

function NeedsScreen() {
  const navigate = useNavigate()
  const location = useLocation();
  const { train } = location.state || {};
  const trainNo=parseInt(train.train)
  const [helps, setHelps]= useState([]) 

  const handleNeeds = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getallrequest/${trainNo}`);
      setHelps(response.data)
    } catch (error) {
      console.error("There was an error retrieving the item!", error);
      alert("There was an error retrieving the item!")
      navigate('/login/post')
    }
  }

  useEffect(() => {
    handleNeeds()
  }, []);

  return (
    <>
      <Header/>
      <Container fluid style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh'}}>
      <ul>
        {helps.map((term, index) => (
          <li key={index} className='fw-bold my-4 pb-3' style={{margin: 15, fontSize: '20px'}} >Passenger at seat number {term.seatNo} seeks help. 
          <div> Description by Passenger: {term.description} </div> 
          </li>
        ))}
      </ul>
      </Container>
    </>
  )
}

export default NeedsScreen
