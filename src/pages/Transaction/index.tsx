import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import GraphicPizza from '../../components/Graphics/Pizza';
import GraphicBar from '../../components/Graphics/Bar';

import HeaderApp from '../../components/Header';

import {
  Container,
  Header,
  Card,
  LegendGraphic,
  TextLegend,
  LegendBar,
  TextMonth,
  Legend,
} from './styles';

const Transaction: React.FC = () => {
  const data = [
    { id: 0, value: 10, description: 'Tesouro Direto', color: '#fc0000' },
    { id: 1, value: 10, description: 'Criptomoedas', color: '#fc0000' },
    { id: 2, value: 25, description: 'LCI (Imobiliário)', color: '#6100fc' },
    { id: 3, value: 55, description: 'Ações', color: '#2b8004' },
  ];
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
            <LegendGraphic active>
              <TextLegend active>Rendimento Mensal</TextLegend>
            </LegendGraphic>
            <GraphicBar />
            <LegendBar>
              <TextMonth>Jan</TextMonth>
              <TextMonth>Feb</TextMonth>
              <TextMonth>Mar</TextMonth>
              <TextMonth>Apr</TextMonth>
            </LegendBar>
          </Card>
          <Card>
            <LegendGraphic active>
              <TextLegend active>Porcentagem da Carteira</TextLegend>
            </LegendGraphic>
            <GraphicPizza />
            {data.map(item => (
              <LegendGraphic>
                <Legend>
                  <Icon
                    name="minus"
                    size={30}
                    style={{ marginRight: 5, marginTop: 1 }}
                    color={`${item.color}`}
                  />
                  <TextLegend>
                    {item.description}: {item.value}%
                  </TextLegend>
                </Legend>
              </LegendGraphic>
            ))}
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default Transaction;
