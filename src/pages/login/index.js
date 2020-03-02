import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
	Container, CssBaseline, makeStyles, Avatar, Typography, TextField,
	Link, FormControlLabel, Checkbox, Grid, Button, Box
} from '@material-ui/core';
import { Login as log } from '@material-ui/icons';
import api from '../../services/api'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Vinicius Rosa
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

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
    backgroundColor: '#4caf50'
  },
  forgot: {
    color: '#616161'
  }
}))




function Login({ history }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleSubmit (event) {
    event.preventDefault()

    const token = await api.post('signin', {
      email,
      password
    })
    history.push('/dashboard')
    console.log(token.data.accessToken)
  }

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<log />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
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
