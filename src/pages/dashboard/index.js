import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import SchoolIcon from '@material-ui/icons/School';
import ListAltIcon from '@material-ui/icons/ListAlt';
// import { mainListItems, secondaryListItems, NestedList } from '../../components/listItems';
import NestedList from '../../components/listItems'
import Form from '../../components/form'
import LastUpdates from '../../components/lastUpdates'



// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#f1f1f1'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: 'black'

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
    // maxWidth: 300,
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
  },
  history: {
    fontSize: '15px',
  }
}));



export default function Dashboard() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const items = [
    { 
      items : [
        {name: 'home', label: 'Home'},
        {name: 'home2', label: 'Home2'}, 
      ]
      },
    
  ]
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              {/* <NotificationsIcon /> */}
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <p className={classes.history}>Início</p>

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />

          </IconButton>
        </div>
        <Divider />
        <NestedList  items={items}/>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            {/* Chart */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <AccountBoxIcon className={classes.accountColor} style={{ fontSize: 80 }}></AccountBoxIcon>
                  <span className={classes.spanNumber}>52</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Alunos</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <DirectionsBusIcon className={classes.accountColor} style={{ fontSize: 80 }}></DirectionsBusIcon>
                  <span className={classes.spanNumber}>22</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Veículos</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <ListAltIcon className={classes.accountColor} style={{ fontSize: 80 }}></ListAltIcon>
                  <span className={classes.spanNumber}>132</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Vagas</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                <Grid container direction='row' justify='space-between' alignItems='center' spacing={1}>
                  <SchoolIcon className={classes.accountColor} style={{ fontSize: 80 }}></SchoolIcon>
                  <span className={classes.spanNumber}>12</span>
                  <Grid container direction='row' justify='space-between' alignItems='center'>
                    <p className={classes.pName}>Escolas</p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
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