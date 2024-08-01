import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import img1 from '../Assets/Images/main_image.png';
import { Link } from 'react-router-dom';

const stripes = {
  bgcolor: '#FEFBD8',
  width: '100%',
  height: '90vh',
};

const Home = () => {
  return (
    <Container position='relative' height='90vh'>
      <Stack
        direction='row'
        spacing={5}
        left={0}
        position='absolute'
        width='100%'
        height='90vh'
        zIndex={-1}
      >
        {[...Array(12)].map((_, index) => (
          <Box key={index} sx={stripes} />
        ))}
      </Stack>
      <Grid container alignContent='center' height='100%'>
        <Grid item lg={7}>
          <Stack height='100%' justifyContent='center' spacing={2}>
            <Typography variant='h1'>
              7!! Thala For a <Typography variant='h1'>Reason!</Typography>
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium consequuntur repudiandae
              aliquid maxime doloremque ad aspernatur reiciendis pariatur reprehenderit necessitatibus!
            </Typography>
            <Link to='/shop'>
              <Button variant='contained'>Shop Now</Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item lg={5} >
          <Box component='img' src={img1} alt='machine'  maxWidth='100%' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
