import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory } from 'react-router-dom';
import { useRoute } from '../../../../contexts/RouteContext';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  const {
    loadRoute
   } = useRoute()

  useEffect(() => {
    async function getRoute() {
      const route = await loadRoute(state.route)
      setResult(route)
    }
    getRoute()
  }, [])

  async function goToUpdate() {

    history.push({
      pathname: '/routes/update',
      state: {
        route: result,
      }
    })
  }

  return (
    <div>
      <DivHead>
      <button
          className='w3-button w3-dark-grey w3-round'
          onClick={() => history.push('/routes')}>
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
            <td>Vagas</td>
            <td>{result.vacancy}</td>
          </TableRow>
          <TableRow>
            <td>Turno</td>
            <td>{result.shift}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
