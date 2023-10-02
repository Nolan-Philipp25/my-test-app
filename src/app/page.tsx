'use client';
import { useState } from 'react';
import Form from "./components/Form";
import Panel from './components/Panel'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import formData from '../../public/index.json'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';

function Home() {
  const [fildList, setFildList] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)

  const submitHandler = (value) => {
    if(value?.length){
      setFildList(value);
      setIsShowModal(true)
    }
  }

  return (
  <>
    <AppBar component="nav" position="static" sx={{padding: '0.8rem'}}>
      <Typography variant="h6" component="div">
          My test app
      </Typography>
    </AppBar>
    <Container>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
        <Paper elevation={3} sx={{padding: '1.8rem'}}>
          <Typography sx={{fontSize: '2rem', textAlign: 'center', color: 'lightBlue'}}>Form</Typography>
          <Form submitHandler={submitHandler} formData={formData} />
        </Paper>
      </Box>
      <Dialog onClose={() => setIsShowModal(false)} open={isShowModal}>
      <Panel displayData={fildList}/> 
    </Dialog>
    </Container>
  </>
  )
}
export default Home;