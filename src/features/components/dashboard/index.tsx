import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import MarriageLogo from '../../../assets/marriage.jpeg'

const Dashboard: React.FC = () => {
  const history = useHistory()

  const handleLoginClick = useCallback(() => {
    history.push('/login')
  }, [history])

  return (
    <Grid
      container
      justify="center"
      alignItems={'center'}
      direction={'column'}
      spacing={3}
    >
      <Grid item>
        <Typography align={'center'} variant={'h4'}>
          Welcome to Marriage portal
        </Typography>
      </Grid>
      <Grid item>
        <img
          width={200}
          height={200}
          src={MarriageLogo}
          alt={'marriage-logo'}
        />
      </Grid>
      <Button variant="contained" color="primary" onClick={handleLoginClick}>
        Go to Login page
      </Button>
    </Grid>
  )
}

export default Dashboard
