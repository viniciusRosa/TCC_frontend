import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import SchoolIcon from '@material-ui/icons/School';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LastUpdates from '../../components/lastUpdates'
import AppBarMenu from '../../components/appBar'
import Copyright from '../../components/copyright'


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
    height: 200,
    backgroundColor: '#4caf50'
  },
  accountColor: {
    color: 'white',
  },
  spanNumber: {
    color: 'white',
    fontSize: '40px'
  },
  pName: {
    color: 'white',
    fontSize: '25px'
  }
  
}));



export default function Dashboard() {

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  
  return (
    <div className={classes.root}>
     <AppBarMenu />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <AccountBoxIcon className={classes.accountColor} style={{ fontSize: 80 }}></AccountBoxIcon>
                  <span className={classes.spanNumber}>52</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Alunos</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <DirectionsBusIcon className={classes.accountColor} style={{ fontSize: 80 }}></DirectionsBusIcon>
                  <span className={classes.spanNumber}>22</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Veículos</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <ListAltIcon className={classes.accountColor} style={{ fontSize: 80 }}></ListAltIcon>
                  <span className={classes.spanNumber}>132</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Vagas</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <SchoolIcon className={classes.accountColor} style={{ fontSize: 80 }}></SchoolIcon>
                  <span className={classes.spanNumber}>12</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Escolas</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <LastUpdates />
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>

          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}