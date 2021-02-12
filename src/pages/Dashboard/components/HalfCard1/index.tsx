import React from 'react';
import { View, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import CardIconImage from '../../../../assets/cardIcon.png';

import {
  Container,
  Card,
  Card1,
  ButtonAction,
  Card2,
  GridText,
  ComponentText,
  Text1,
  Text0,
  Text2,
  Text4,
  LineSeparator,
  ComponentTotal,
} from './styles';

const Middle: React.FC = () => {
  return (
    <Container>
      <Card>
        <Text0>Cartões de crédito</Text0>
        <Card1>
          <ButtonAction active>
            <Text1 active>Faturas abertas</Text1>
          </ButtonAction>
          <ButtonAction>
            <Text1>Faturas fechadas</Text1>
          </ButtonAction>
        </Card1>
        <Card2>
          <Image source={CardIconImage} style={{ width: 50, height: 50 }} />

          <GridText>
            <ComponentText>
              <Text2 active>Nubank - </Text2>
              <Text1>Fechamento: 09/01/2021</Text1>
            </ComponentText>
            <Text4>R$550,00</Text4>
          </GridText>

          <Icon name="plus" size={35} color="green" style={{ marginTop: 20 }} />
        </Card2>

        <LineSeparator />
        <ComponentTotal>
          <Text2>Total: </Text2>
          <Text2>R$550,00</Text2>
        </ComponentTotal>
      </Card>
    </Container>
  );
};

export default Middle;
