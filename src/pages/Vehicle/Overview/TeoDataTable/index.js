import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import api from '../../../../services/api';

const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  useEffect(() => {
    api.get(`vehicles/${state.result}`).then(
      response => {
        setResult(response.data[0])
      }
    )
    }, [])

  async function goToUpdate(id) {

    const { data } = await api.get(`vehicles/${id}`)

    history.push({
      pathname: '/vehicles/update',
      state: {
        result: data[0],
      }
    })
  }

  return (
    <div>
      <DivHead>
        <div>
          <img src='https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
          <p>{result.vehicle_name}</p>
        </div>
        <Link onClick={() => goToUpdate(result.id)}>EDITAR</Link>
      </DivHead>
      <ViewTable>
        <TableHead >
          <th></th>
        </TableHead>
        <tbody>
          <TableRow>
            <td>Documento</td>
            <td>{result.doc_number}</td>
          </TableRow>
          <TableRow>
            <td>Lugares</td>
            <td>{result.seats}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
