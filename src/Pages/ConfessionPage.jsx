import React from 'react'
import { Confessions } from '../Utils/Data/Confession';
import ConfessionCard from '../Components/ConfessionCard';
import styled from 'styled-components';


const Alert = styled.div`
  height: 80px;
  // background: red;
  display: flex;
  max-width: 400px;
  margin: 0px auto;
  border: 2px solid red;
  border-radius: 15px;
  padding: 20px;
`;

const ConfessionPage = () => {
  return (
    <div style={{color: "white"}}>
      <h1>Confession Page</h1>
      <Alert>
        this is coming soon
      </Alert>
        {Confessions.map((item)=>(
          <ConfessionCard  
                {...item}
            />
        )     
        )}
    </div>
  )
}

export default ConfessionPage