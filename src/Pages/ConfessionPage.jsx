import React from 'react'
import { Confessions } from '../Utils/Data/Confession';
import ConfessionCard from '../Components/ConfessionCard';


const ConfessionPage = () => {
  return (
    <div>ConfessionPage
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