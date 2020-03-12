import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

        <Box pt={4}>
            <Copyright />
        </Box>
        </Container>
      </main>
    </div>
  );
}