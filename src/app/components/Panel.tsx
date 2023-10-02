import React from 'react';
import { Typography, Box } from '@mui/material';
import { IField } from '../constant'

const Panel = ({ displayData }: { displayData: IField[] }) => {

  return (
  <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '25rem', minHeight: '35rem'}}>
    {displayData?.map(data => {
        return (<Box key={data?.id} sx={{padding: '1rem', margin: '0.5rem', background: 'lightBlue', borderRadius: '0.3rem', minWidth: '8rem'}}>
                    <Typography>{data?.id}</Typography>
                    <Typography>{data?.value}</Typography>
                </Box>)
  })}   
  </Box>)
}

export default Panel