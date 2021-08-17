import React, { useEffect, useState } from 'react';
import { ViewTable, TableHead, TableRow, DivHead, Title } from './styles'
import { useLocation, useHistory, Link } from 'react-router-dom';
import { usePoint } from '../../../../contexts/PointContext';


const TeoDataTable = () => {

  const { state } = useLocation();
  const history = useHistory();

  const [result, setResult] = useState({})

  const {
    loadPoint
   } = usePoint()

  useEffect(() => {
    async function getPoint() {
      const point = await loadPoint(state.item)
      setResult(point)
    }
    getPoint()
  }, [])

  console.log(state.item)

  async function goToUpdate(id) {

    // const { data } = await api.get(`points/${id}`)

    // history.push({
    //   pathname: '/points/update',
    //   state: {
    //     item: data[0],
    //   }
    // })
  }

  return (
    <div>
      <DivHead>
        <div>
        <Link to='/points' >VOLTAR</Link>
        </div>
        <Link onClick={() => goToUpdate(result.id)}>EDITAR</Link>
      </DivHead>
      <div>
        <Title>{result.name}</Title>
      </div>
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
