import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/copyright'
import AppBarMenu from '../../components/appBar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#f1f1f1'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  grid: {
    border: '1px solid red'
  },
  paper: {
    padding: '1em'
  },
  textField: {
    marginBottom: '1em'
  }
}));



export default function NewPage() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBarMenu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          {/* Content */}
          <Grid item xs={12} className={classes.grid}>
            <Typography variant="h6">
              Cadastrar Aluno
          </Typography>
            <Paper className={classes.paper}>
              <TextField
                className={classes.textField}
                required
                id="name"
                name="name"
                label="Nome"
                fullWidth
                autoComplete="fname"
              />
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="femail"
              />
            </Paper>
          </Grid>


          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
