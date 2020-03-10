import React, { useState, useEffect } from 'react';
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
import { Link } from "react-router-dom";
import Items from './menuItem';

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



export default function NestedList({ history }) {
  const classes = useStyles();
  const [open, setOpen] = useState([]);

  useEffect(() => {
    const menustatus = []
    function loadMenuStates() {
      console.log(Items)
 
      Items.map(item => {
        menustatus.push({ name: item.name, status: false })
      })
      setOpen([menustatus])
      }
    loadMenuStates()
  }, []);



  // const buttonStates = () => {
  //   Items.map(item => {
  //     setOpen([...open, { name: item.name, status: false } ])
  //  }
  // }

//   Items.map(item => {
//     setOpen([...open, { name: item.name, status: false } ])
//  }
  
  const handleClick = (e) => {
    console.log(e)
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
        Items.map(item => (
          <>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>


            {Array.isArray(item.subitems) ? (
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subitems.map(subitem => (
                    <ListItem button component={Link} to={subitem.href} className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subitem.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            ) : null}

          </>
        ))
      }

    </List>
  );
}

