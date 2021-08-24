import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useSchool } from '../../../../contexts/SchoolContext';


const TeoDataTable = () => {

  const [result, setResult] = useState({})

  const { state } = useLocation();
  const history = useHistory();

  const {
    loadSchool
  } = useSchool();


  useEffect(() => {
    async function getSchool() {
      const school = await loadSchool(state.school);
      setResult(school);
    }

    getSchool()
  }, [])

    console.log(result)

  async function goToUpdate(id) {

    // const { data } = await api.get(`schools/${id}`)

    // history.push({
    //   pathname: '/schools/update',
    //   state: {
    //     school: data[0],
    //   }
    // })
  }

  return (
    <div>
      <DivHead>
        <button
          className='w3-button w3-dark-grey w3-round'
          onClick={() => history.push('/schools')}>
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
          <p>
          </p>
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
          <TableRow>
            <td>Email</td>
            <td>{result.email}</td>
          </TableRow>
          <TableRow>
            <td>Telefone</td>
            <td>{result.phone}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}


export default TeoDataTable;
