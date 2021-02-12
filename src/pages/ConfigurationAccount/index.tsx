import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderApp from '../../components/Header';

import {
  Container,
  Header,
  Card,
  ViewCard,
  TextLegend,
  ButtonMeu,
} from './styles';

const ConfigurationAccount: React.FC = () => {
  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled
      >
        <HeaderApp activeProps={false} />
        <Header>
          <Card>
            <ButtonMeu>
              <TextLegend active>Trazer seu salário</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Receber na sua conta todo mês</TextLegend>
            </ViewCard>

            <ButtonMeu>
              <TextLegend active>Opções de depósitos</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Depositos na sua conta cadastrada</TextLegend>
            </ViewCard>

            <ButtonMeu>
              <TextLegend active>Cancelar Conta</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>
                Processo de cancelamento da sua conta no app
              </TextLegend>
            </ViewCard>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default ConfigurationAccount;
