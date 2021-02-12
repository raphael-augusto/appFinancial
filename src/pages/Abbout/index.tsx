import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import GraphicPizza from '../../components/Graphics/Pizza';
import GraphicBar from '../../components/Graphics/Bar';

import HeaderApp from '../../components/Header';

import {
  Container,
  Header,
  Card,
  ViewCard,
  TextLegend,
  Menu,
  ButtonMenu,
} from './styles';

const Abbout: React.FC = () => {
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
              <Menu active>
                <TextLegend active>Licenças</TextLegend>
              </Menu>
              <ButtonMenu>
                <Icon name="chevron-right" size={20} color="#828486" />
              </ButtonMenu>
            </ViewCard>
            <ViewCard active>
              <Menu active>
                <TextLegend active>Contratos</TextLegend>
              </Menu>

              <ButtonMenu>
                <Icon name="chevron-right" size={20} color="#828486" />
              </ButtonMenu>
            </ViewCard>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default Abbout;
