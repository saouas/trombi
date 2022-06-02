import React, { useState, useContext, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { useNavigationContext } from '../../context/NavigationContext';

import './Pager.css';

const Pager = (props) => {
  const { offset, setOffset, setCurrentPage, total, setGetNextPage } = useNavigationContext();
  const isAccurateTotal = Math.sign(total) === 1 || Math.sign(total) === 0;
  const [maxPage, setMaxPage] = useState(0);
  const show = !!isAccurateTotal;

  const getMaxNumberPage = (total, offset) => {
    if(!isAccurateTotal) return 0;
    return Math.trunc(parseInt(total/offset));
  };

  // Used to re-calculate the correct left pages
  useEffect(() => {
    const max = getMaxNumberPage(total, offset);
    if(isNaN(max)){
      setMaxPage(0);
      return;
    }
    setMaxPage(max)
  },[total])

  const handleChangePage = (event, value) => {
    setOffset(value * 20 - 20)
    setGetNextPage(value);

  }

  return (
   show ? <Grid item container xs={12} alignContent="center" justifyContent="center">
      <Stack spacing={2}>
        <Pagination count={maxPage} variant="outlined" className="pager" onChange={handleChangePage}/>
      </Stack>
    </Grid> : null
  );
};

export default Pager;
