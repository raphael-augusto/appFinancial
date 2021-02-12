import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderApp from '../../components/Header';

import {
  Container,
  Header,
  Card,
  ViewCard,
  ButtonMeu,
  TextLegend,
} from './styles';

const ConfigurationPerfil: React.FC = () => {
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
            <ViewCard active>
              <ButtonMeu active>
                <TextLegend active>Nome de preferencia</TextLegend>
              </ButtonMeu>
              <ButtonMeu active>
                <TextLegend>Raphael</TextLegend>
              </ButtonMeu>
            </ViewCard>
            <ViewCard active>
              <ButtonMeu active>
                <TextLegend active>E-mail</TextLegend>
              </ButtonMeu>
              <ButtonMeu active>
                <TextLegend>raphael@app.com.br</TextLegend>
              </ButtonMeu>
            </ViewCard>

            <ViewCard active>
              <ButtonMeu active>
                <TextLegend active>Telefone</TextLegend>
              </ButtonMeu>
              <ButtonMeu>
                <TextLegend>99999-9999</TextLegend>
              </ButtonMeu>
            </ViewCard>

            <ViewCard active>
              <ButtonMeu>
                <TextLegend active>Endereço</TextLegend>
              </ButtonMeu>
            </ViewCard>
            <ViewCard active>
              <ButtonMeu>
                <TextLegend active>Alterar a senha de acesso</TextLegend>
              </ButtonMeu>
            </ViewCard>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default ConfigurationPerfil;
