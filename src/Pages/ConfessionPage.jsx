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
    <div style={{color: "white" , marginTop: "150px"} }>
      <h1 style={{textAlign:"center"}}>Confession Page</h1>
      <Alert>
        <h2>Coming Soon....</h2>
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