import React from 'react';
import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper';
import TeoNavTop from '../../components/TeoNavTop';
import TeoPageTitle from '../../components/TeoPageTitle'
import TeoBox from '../../components/TeoBox';
import Card from '../../components/Card';

import {
  StyledTable,
  Subtitle,
  Wrapper,
  Information,
  InformationBox
} from './styles';


function Dashboard() {

  const location = { lat: -22.2154042, lng: -54.8331331 };

  return (
    <>
      <TeoContainer>
        <TeoNav />
        <TeoMainWrapper>
          <TeoNavTop />
          <TeoPageTitle title="Dashboard" />

          <TeoBox>
            <div className="w3-row">

              <Subtitle>Informações gerais</Subtitle>

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

            <Wrapper>

              <div>
                <Subtitle>Capacidade das rotas</Subtitle>

                  <StyledTable className="w3-table w3-bordered w3-centered">
                    <tr>
                      <th>Rotas</th>
                      <th>Vagas</th>
                    </tr>
                    <tr>
                      <td>Rota 1</td>
                      <td>34/40</td>
                    </tr>
                    <tr>
                      <td>Rota 2</td>
                      <td>40/40</td>
                    </tr>
                    <tr>
                      <td>Rota 3</td>
                      <td>34/40</td>
                    </tr>
                  </StyledTable>
              </div>


              <div>
                <Subtitle>Status das Solicitações</Subtitle>
                <InformationBox>
                  <Information>
                    <p>Solicitações pendentes</p>
                    <span>4</span>
                  </Information>

                  <Information>
                    <p>Fila de espera</p>
                    <span>0</span>
                  </Information>
                </InformationBox>
              </div>

            </Wrapper>


          </TeoBox>

        </TeoMainWrapper>
      </TeoContainer>

    </>
  );
}

export default Dashboard;
