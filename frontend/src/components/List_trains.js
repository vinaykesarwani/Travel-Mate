import React from 'react';
import Train from './Train'

function List_trains({data}) {
  return (
    <div style={{backgroundColor: '#066467', height: '73vh', width: '97.6vw', overflowY: 'scroll'}}>
      {data.map(train => (
        <Train key={train.id} props={train} />
      ))}
    </div>
  )
}
 
export default List_trains;