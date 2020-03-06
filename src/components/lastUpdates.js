import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  bold: {
    fontWeight: 'bold'
  }
});

function createData(name, action, time) {
  return { name, action, time };
}

const rows = [
  createData('Vinicius Rosa', 'Novo usuário', '10 min'),
  createData('Luana Garcia', 'Solicitação de vaga', '15 min'),
  createData('Luis vargas', 'Solicitação de vaga', '27 min'),
  createData('IQK-4567', 'ônibus extra', '31 min'),
  createData('Edson Cunha', 'Novo usuário', '35 min'),
  createData('Rômulo Silva', 'Solicitação de vaga', '44 min'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <>
    <h1 align="left" >Últimas Atualizações</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell className={classes.bold}>Nome</TableCell>
              <TableCell align="left" className={classes.bold}>Solicitação</TableCell>
              <TableCell align="left" className={classes.bold}>Tempo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.action}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
