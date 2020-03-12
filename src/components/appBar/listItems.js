import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
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

  const handleClick = (e) => {
    setOpen({ [e]: !this.open[e] });
    console.log(open)
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
            <ListItem key={item.name} button id={1} onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>

            {Array.isArray(item.subitems) ? (
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
            ) : null}

          </>
        ))
      }

    </List>
  );
}

