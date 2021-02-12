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

const ConfigurationHelp: React.FC = () => {
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
              <TextLegend active>Novidades</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Tudo sobre o app e os nossos produtos</TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Conta</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Conheça tudo sobre sua conta digital</TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Pagar Fatura</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Descubra como e onde pagar sua fatura</TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Parcela Fatura</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Veja como parcelar sua fatura</TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Limite de Crédito</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>
                Tire suas dúvidas sobre o seu limite de crédito
              </TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Problemas com seu app</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Tire suas dúvidas sobre o seu app</TextLegend>
            </ViewCard>
            <ButtonMeu>
              <TextLegend active>Segurança</TextLegend>
            </ButtonMeu>
            <ViewCard>
              <TextLegend>Tudo sobre a proteção da sua conta</TextLegend>
            </ViewCard>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default ConfigurationHelp;
