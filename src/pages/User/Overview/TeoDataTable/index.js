import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory } from 'react-router-dom';
import { useUser } from '../../../../contexts/UserContext';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  const {
    loadUser
   } = useUser()

  useEffect(() => {
    async function getUser() {
      const user = await loadUser(state.user);
      console.log(user)
      setResult(user)
    }
    getUser()
  }, [])

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
            <td>Nome</td>
            <td>{result.name}</td>
          </TableRow>

        </tbody>
      </ViewTable>
    </div>
  )
}

export default TeoDataTable;
