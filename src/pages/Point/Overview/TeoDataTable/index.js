import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import api from '../../../../services/api';

const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  useEffect(() => {
    api.get(`points/${state.item}`).then(
      response => {
        setResult(response.data[0])
      }
    )
    }, [])

  async function goToUpdate(id) {

    const { data } = await api.get(`points/${id}`)

    history.push({
      pathname: '/points/update',
      state: {
        item: data[0],
      }
    })
  }

  return (
    <div>
      <DivHead>
        <div>
          <img src='https://images.pexels.com/photos/2942172/pexels-photo-2942172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
          <p>{result.point_name}</p>
        </div>
        <Link onClick={() => goToUpdate(result.id)}>EDITAR</Link>
      </DivHead>
      <ViewTable>
        <TableHead >
          <th></th>
        </TableHead>
        <tbody>
          <TableRow>
            <td>Endereço</td>
            <td>{result.address}</td>
          </TableRow>
          <TableRow>
            <td>Numero</td>
            <td>{result.number}</td>
          </TableRow>
          <TableRow>
            <td>Bairro</td>
            <td>{result.district}</td>
          </TableRow>
          <TableRow>
            <td>Complemento</td>
            <td>{result.complement}</td>
          </TableRow>
          <TableRow>
            <td>UF</td>
            <td>{result.uf}</td>
          </TableRow>
          <TableRow>
            <td>Cidade</td>
            <td>{result.city}</td>
          </TableRow>
          <TableRow>
            <td>CEP</td>
            <td>{result.cep}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
