import React, { useEffect, useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import {Box} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useCounter from '../../services/useCounter';

function Counter() {
  const{result,increment,decrement}=useCounter(0,1);
  return (
      <>Counter Application
    <p>{result}</p>
<Box>
  <RemoveIcon onClick={decrement} sx={{cursor:"pointer",fontSize:'32px',mt:'10px'}}/>
  <AddCircleIcon onClick={increment} sx={{cursor:"pointer",fontSize:'32px',mt:'10px'}}/>

</Box>


    </>
  )
}

export default Counter