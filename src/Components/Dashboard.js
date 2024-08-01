import React from 'react'
import img1 from '../Assets/Images/washingmachine.png'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'

const Dashboard = () => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={7}>
          <Stack height='100%' justifyContent={'center'}>
            <Typography variant='h3'>Revitalize your </Typography>
            <Typography variant='h3'> Clothes with Expert</Typography>
            <Typography variant='h3' color='#03346E'>Laundry Services!</Typography>
            <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minima quaerat, incidunt hic
              accusamus
              sapiente ex, vel reprehenderit quia, facilis aperiam assumenda debitis quidem? Temporibus!
            </Typography>
            <Button sx={{ maxWidth: '300px', mt: 5 }} variant='contained'>Book a Services
              today!</Button>
          </Stack>
        </Grid>
        <Grid item lg={5} >
          <Stack height='100%' justifyContent={'center'}>
            <Box component='img' src={img1} alt="machine" maxWidth='100%' />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard
