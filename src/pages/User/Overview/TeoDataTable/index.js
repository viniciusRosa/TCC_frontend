import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../../../contexts/UserContext';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  const {

   } = useUser()

  // useEffect(() => {
  //   async function getPoint() {
  //     const point = await loadPoint(state.point)
  //     setResult(point)
  //   }
  //   getPoint()
  // }, [])

  async function goToUpdate() {

    history.push({
      pathname: '/usuarios/update',
      state: {
        user: result,
      }
    })
  }

  return (
    <div>
      <DivHead>
        <button
          className='w3-button w3-dark-grey w3-round'
          onClick={() => history.push('/usuarios')}>
          Voltar
        </button>

        <p>{result.name}</p>

        <button
          className='w3-button w3-amber w3-round'
          onClick={() => goToUpdate(result.id)}>
          Editar
        </button>
      </DivHead>
      <ViewTable>
        <TableHead >
          <p></p>
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
            <td>UF</td>
            <td>{result.uf}</td>
          </TableRow>
          <TableRow>
            <td>Cidade</td>
            <td>{result.city}</td>
          </TableRow>
          <TableRow>
            <td>Latitude</td>
            <td>{result.latitude}</td>
          </TableRow>
          <TableRow>
            <td>Longitude</td>
            <td>{result.longitude}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
