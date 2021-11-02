import React from 'react';
import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper';
import TeoNavTop from '../../components/TeoNavTop';
import TeoPageTitle from '../../components/TeoPageTitle'
import TeoBox from '../../components/TeoBox';
import Card from '../../components/Card';

import { StyledTable } from './styles';


function Dashboard() {

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Dashboard" />

          <TeoBox>
            <div className="w3-row">

              <div className="w3-col m4 w3-center">
                <Card name='Escolas' number='12' />
              </div>

              <div className="w3-col m4 w3-center">
                <Card name='Estudantes' number='45' />
              </div>

              <div className="w3-col m4 w3-center">
                <Card name='Rotas' number='4' />
              </div>

            </div>

          </TeoBox>

          <TeoBox>
            <div className="w3-container" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

            }}>

              <StyledTable className="w3-table w3-bordered w3-centered">
                <tr>
                  <th>Rotas</th>
                  <th>Vagas</th>
                  <th>Fila de espera</th>
                </tr>
                <tr>
                  <td>Rota 1</td>
                  <td>34/40</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Rota 2</td>
                  <td>44/40</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Rota 3</td>
                  <td>34/40</td>
                  <td>0</td>
                </tr>
              </StyledTable>
            </div>
          </TeoBox>

          <TeoBox>
            maps
          </TeoBox>

        </TeoMainWrapper>
      </TeoContainer>

    </>
  );
}

export default Dashboard;
