import React, { useState, useContext, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { useNavigationContext } from '../../context/NavigationContext';

import './Pager.css';

const Pager = (props) => {
  const { offset, setOffset, currentPage, setCurrentPage, total, setTotal } = useNavigationContext();
  const isAccurateTotal = Math.sign(total) === 1 || Math.sign(total) === 0;
  const [count, setCount] = useState(isAccurateTotal ? total : 0);
  const show = !!isAccurateTotal;

  const getOffsetFromPageNumber = () => {
    if(!isAccurateTotal) return 0;
    //console.log(parseInt(total) / 20);
  };

  useEffect(() => {
    console.log(`total:${total} | offset: ${offset}`);
    setTotal(parseInt(total/offset));
  },[currentPage, offset])

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
    getOffsetFromPageNumber();
  }

  return (
   show ? <Grid item container xs={12} alignContent="center" justifyContent="center">
      <Stack spacing={2}>
        <Pagination count={total} variant="outlined" className="pager" onChange={handleChangePage}/>
      </Stack>
    </Grid> : null
  );
};

export default Pager;
