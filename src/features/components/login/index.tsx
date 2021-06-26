import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'

const fakeUserCredentials = {
  username: 'foo',
  password: 'bar',
}

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorInCredentials, setErrorInCredentials] = useState<boolean>(false)
  const history = useHistory()

  const handleUsernameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setUsername(event.target.value)

  const handlePasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setPassword(event.target.value)

  const handleLoginButtonClick = useCallback(() => {
    if (
      username === fakeUserCredentials.username &&
      password === fakeUserCredentials.password
    ) {
      // setItemInLocalStorage(true)
      window.localStorage.setItem('isUserLoggedIn', 'true')
      history.push('/home')
    } else setErrorInCredentials(true)
  }, [username, password, history])

  return (
    <Grid
      container
      spacing={4}
      direction={'column'}
      justify="center"
      alignItems={'center'}
    >
      <Grid item>
        <TextField
          onChange={handleUsernameInputChange}
          value={username}
          placeholder={'Enter username'}
        />
      </Grid>
      <Grid item>
        <TextField
          onChange={handlePasswordInputChange}
          value={password}
          placeholder={'Enter password'}
          type={'password'}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLoginButtonClick}
        >
          Login
        </Button>
      </Grid>
      {errorInCredentials && (
        <Alert elevation={6} variant="filled" severity="error">
          Incorrect credentials
        </Alert>
      )}
    </Grid>
  )
}

export default Login
