import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import urlimage from '../../services/urlImage';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  useEffect(() => {
    api.get(`schools/${state.school}`).then(
      response => {
        setResult(response.data[0])
      }
    )
    }, [])

    console.log(result)

  async function goToUpdate(id) {

    const { data } = await api.get(`schools/${id}`)

    history.push({
      pathname: '/schools/update',
      state: {
        school: data[0],
      }
    })
  }

  return (
    <div>
      <DivHead>
        <div>
          <img src={`${urlimage.baseURL}${result.filename}`}/>
          <p>{result.school_name}</p>
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
          <TableRow>
            <td>Email</td>
            <td>{result.email}</td>
          </TableRow>
          <TableRow>
            <td>Telefone</td>
            <td>{result.phone_number}</td>
          </TableRow>
        </tbody>
      </ViewTable>
    </div>
  )
}


export default TeoDataTable;
