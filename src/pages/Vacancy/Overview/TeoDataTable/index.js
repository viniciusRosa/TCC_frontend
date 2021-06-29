import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import api from '../../../../services/api';
import { useVacancy } from '../../../../contexts/VacancyContext';


const TeoDataTable = () => {

  const {
    overviewItem,
    resultDb
  } = useVacancy()
  // console.log(overviewItem)

console.log(overviewItem)
  const history = useHistory();

  // useEffect(() => {
  //   api.get(`vehicles/${state.result}`).then(
  //     response => {
  //       setResult(response.data[0])
  //     }
  //   )
  //   }, [])

  // async function goToUpdate(id) {

  //   const { data } = await api.get(`vehicles/${id}`)

  //   history.push({
  //     pathname: '/vehicles/update',
  //     state: {
  //       result: data[0],
  //     }
  //   })
  // }

  return (
    <div>
      <DivHead>
        <div>
          <img src={overviewItem.image}/>
          <p>{overviewItem.name}</p>
        </div>
        <Link onClick={() => {}}>EDITAR</Link>
      </DivHead>
      <ViewTable>
        <TableHead >
          <th></th>
        </TableHead>
        <tbody>
          <TableRow>
            <td>RG</td>
            <td>{overviewItem.rg}</td>
          </TableRow>
          <TableRow>
            <td>CPF</td>
            <td>{overviewItem.cpf}</td>
          </TableRow>
          <TableRow>
            <td>Email</td>
            <td>{overviewItem.email}</td>
          </TableRow>
          <TableRow>
            <td>Data de nascimento</td>
            <td>{overviewItem.borndate}</td>
          </TableRow>
          <TableRow>
            <td>Endereço</td>
            <td>{overviewItem.address}</td>
          </TableRow>
          <TableRow>
            <td>Numero</td>
            <td>{overviewItem.number}</td>
          </TableRow>
          <TableRow>
            <td>Complemento</td>
            <td>{overviewItem.complement}</td>
          </TableRow>
          <TableRow>
            <td>Cidade</td>
            <td>{overviewItem.city}</td>
          </TableRow>
          <TableRow>
            <td>Estado</td>
            <td>{overviewItem.uf}</td>
          </TableRow>
          <TableRow>
            <td>Escola</td>
            <td>{overviewItem.school_name}</td>
          </TableRow>
          <TableRow>
            <td>Turno</td>
            <td>{overviewItem.shift}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
