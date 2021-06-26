import React from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import UsersList from './usersList/index'
import Spacer from '../common/spacer'

const Home: React.FC = () => {
  const history = useHistory()

  const handleLogoutClick = () => {
    window.localStorage.removeItem('isUserLoggedIn')
    history.push('/')
  }

  return (
    <Grid
      container
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Grid item>
        <Typography align={'center'} gutterBottom variant={'h4'}>
          Find your perfect match
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Grid>
      <Grid item>
        <Spacer />
      </Grid>
      <Grid item>
        <UsersList />
      </Grid>
    </Grid>
  )
}

export default Home
