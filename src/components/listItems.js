import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList({ history, items }) {
  const classes = useStyles();
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);

  const handleClickRegister = () => {
    setOpenRegister(!openRegister);
  };

  const handleClickList = () => {
    setOpenList(!openList);
  };


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Nested List Items */}
        </ListSubheader>
      }
      className={classes.root}
    >
  
      {
        items.map( item => (
          <>
          <ListItem button onClick={handleClickRegister}>
            <ListItemIcon>
             <InboxIcon />
            </ListItemIcon>
          <ListItemText primary={item.name} />
        {openRegister ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
       
      <Collapse in={openRegister} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        </List>
      </Collapse>
      </>
))
}
      {/* <ListItem button onClick={handleClickList}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Listar" />
        {openList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse> */}
    </List>
  );
}

