import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Station from '../components/Station';
import axios from 'axios';

function TrainDetails() {
  const { train_number } = useParams();
  const [route, setRoute] = useState([]);
  
  const fetchTrainRoute = async () => {
    const options = {
      method: 'GET',
      url: 'https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus',
      params: {
        trainNo: train_number
      },
      headers: {
        'x-rapidapi-key': '41e228c265mshce51d41432ed716p186a3fjsn1c2c605ad78b',
        'x-rapidapi-host': 'irctc1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setRoute(response.data)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrainRoute();
  }, []);

  console.log(route)
  return (
    <div style={{backgroundColor: '#97AEAF', height: '100%', padding: 20}}>
      {route.length>0 && <div>
        <h1 style={{padding: '3%', textAlign: 'center'}}>{route["train_name"]}</h1>
      <h4 style={{paddingLeft: '10%', textAlign: 'left'}}>Recent Update: {route["message"]}</h4>
      {route.data.map(station_info => (
        <Station key={station_info.id} station_info={station_info} />
      ))}
      </div>}
    </div> 
  );
}

export default TrainDetails;
