import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderApp from '../../components/Header';

import { Container, Title, Header, Card, TextActions, Legend } from './styles';

const Paper: React.FC = () => {
  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled
      >
        <HeaderApp activeProps />

        <Header>
          <Card>
            <Title>Ações de Baixo Risco</Title>
            <Legend>
              <TextActions active>Itaúsa - ITSA4</TextActions>
              <TextActions>
                A Itaúsa é uma das empresas mais favoritas da B3, muitos
                investidores consideram as ações da Itaúsa descontadas, visto
                que o Banco Itaú representa aproximadamente 95% do desempenho da
                Holding.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>ISA CTEEP - TRPL4</TextActions>
              <TextActions>
                ISA CTEEP é sem dpuvidas uma das empresas mais seguras da bolsa,
                em função dos seus resultados consistente e sua ótima gestão.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>Lojas Renner - LREN3</TextActions>
              <TextActions>
                A loja Renner é considerada a varejista com a melhor gestão em
                termos de rentabilidade.
              </TextActions>
            </Legend>
          </Card>
        </Header>

        <Header>
          <Card>
            <Title>Ações de Médio Risco</Title>
            <Legend>
              <TextActions active>Fleury - FLRY3</TextActions>
              <TextActions>
                A Fleury demostrou uma melhor eficiência ao longo dos anos, logo
                suas acções são neociadas atualemte 3x suas receitas.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>Totvs - TOTS3</TextActions>
              <TextActions>
                A Totvs é uma empresa com um perfil mais arrojado, pormeio de
                fusões e aquisições, que apresenta um grande mercado a
                conquistar.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>Jereissati - JPSA3</TextActions>
              <TextActions>
                A Jereissati possui 89,3 milhões ações do Iguatemi, o que
                corresponde a mais de 50% do total capital social da empresa.
              </TextActions>
            </Legend>
          </Card>
        </Header>

        <Header>
          <Card>
            <Title>Ações de Alto Risco</Title>
            <Legend>
              <TextActions active>Vulcabras - VULC3</TextActions>
              <TextActions>
                A Vulcabras foi uma das empresas mais impactadas com a crise
                provocada pela pandemia de coronavírus, e diante de um período
                bastante desafiador, a empresa calçadista demostrou gnrade
                resiliência.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>Cogna - CONG3</TextActions>
              <TextActions>
                A Cogna e uma das maiores organizações educacionais privadas do
                mundo,atualmente, a Kroton está sendo reestruturada com objetivo
                de buscar margens mais altas e qualificação de sua base de
                clientes.
              </TextActions>
            </Legend>
            <Legend>
              <TextActions active>Vlid - VLID3</TextActions>
              <TextActions>
                A Vlid atua na identificação de documentos, smartphones,
                certificados digitais, aplicativos bancários, meio de
                trasnportes, tonando a dia digital mais segura.
              </TextActions>
            </Legend>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default Paper;
