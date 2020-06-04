import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container, CssBaseline, makeStyles, Avatar, Typography, TextField,
  Link, FormControlLabel, Grid, Button, Box
} from '@material-ui/core';
import api from '../../services/api'
import Copyright from '../../components/copyright'
import Logo from '../../assets/logo.png'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#616161',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: '#4caf50',
    margin: '15px 0'
  },
  forgot: {
    color: '#616161',

  },
  logo: {
    width: '300px'
  },
}))

function Login({ history }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    // const token = await api.post('signin', {
    //   email,
    //   password
    // })
    // console.log(token.data.accessToken)
    history.push('/dashboard')
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <img src={Logo} className={classes.logo} alt="logo"/>

        <form className={classes.form} noValidate onSubmit={handleSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => setPassword(event.target.value)}
          />
          {/* <FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.forgot}>
                Esqueceu sua senha?
              </Link>
            </Grid>

          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container >
  );
}

export default Login;
