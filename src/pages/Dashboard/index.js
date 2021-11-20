import React, { useEffect } from 'react';
import TeoContainer from '../../components/TeoContainer';
import TeoNav from '../../components/TeoNav';
import TeoMainWrapper from '../../components/TeoMainWrapper';
import TeoNavTop from '../../components/TeoNavTop';
import TeoPageTitle from '../../components/TeoPageTitle'
import TeoBox from '../../components/TeoBox';
import Card from '../../components/Card';

import { useData } from '../../contexts/DataContext';

import {
  StyledTable,
  Subtitle,
  Wrapper,
  Information,
  InformationBox
} from './styles';

function Dashboard() {

  const {
    schoolAmount,
    studentAmount,
    routeAmount,
    vacancyAmount,
    queueAmount,
    routeData,

    setIsUpdate
  } = useData();

  useEffect(() => {
    setIsUpdate(true)
  }, [])

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
                <Card name='Escolas' number={schoolAmount} />
              </div>

              <div className="w3-col m4 w3-center">
                <Card name='Estudantes' number={studentAmount} />
              </div>

              <div className="w3-col m4 w3-center">
                <Card name='Rotas' number={routeAmount} />
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

                  {routeData.map(route => (
                    <tr key={route.name}>
                      <td>{route.name}</td>
                      <td>{route.count} / {Number(route.vacancy)}</td>
                    </tr>
                  ))}

                </StyledTable>
              </div>


              <div>
                <Subtitle>Status das Solicitações</Subtitle>
                <InformationBox>
                  <Information>
                    <p>Solicitações pendentes</p>
                    <span>{vacancyAmount}</span>
                  </Information>

                  <Information>
                    <p>Fila de espera</p>
                    <span>{queueAmount}</span>
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
