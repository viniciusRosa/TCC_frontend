import React from 'react';
import clsx from 'clsx';
import { Box, Grid, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/copyright'
import AppBarMenu from '../../components/appBar'
import defaultAvatar from './default-avatar.jpg'

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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    backgroundColor: '#fff'
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  grid1: {
    border: '1px solid black'
  },
  grid2: {
    border: '1px solid red'
  },
  grid3: {
    border: '1px solid blue'
  }
}));



export default function NewPage() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  return (
    <div className={classes.root}>
      <AppBarMenu title='Aluno' />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          {/* Content */}


          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} >
              <Paper className={fixedHeightPaper}>
                <Grid container xs={12} sm={12} className={classes.grid1}>

                  <Grid item xs={12} sm={6} className={classes.grid2}>
                    {/* <Avatar alt='default image' src={defaultAvatar} className={classes.large} /> */}
                    <p>nome</p>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.grid3}>
                    {/* <Avatar alt='default image' src={defaultAvatar} className={classes.large} /> */}
                    <p>sobrenome</p>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.grid3}>
                    {/* <Avatar alt='default image' src={defaultAvatar} className={classes.large} /> */}
                    <p>sobrenome</p>
                  </Grid>
                  <Grid item xs={12} sm={12} className={classes.grid3}>
                    {/* <Avatar alt='default image' src={defaultAvatar} className={classes.large} /> */}
                    <p>sobrenome</p>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
          </Grid>


          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
