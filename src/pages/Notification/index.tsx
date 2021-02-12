import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import GraphicPizza from '../../components/Graphics/Pizza';
import GraphicBar from '../../components/Graphics/Bar';

import HeaderApp from '../../components/Header';

import {
  Container,
  Title,
  Header,
  Card,
  LegendGraphic,
  TextLegend,
  LegendBar,
  TextMonth,
  Legend,
} from './styles';

const Notification: React.FC = () => {
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
            <LegendGraphic active />
          </Card>
          <Card>
            <LegendGraphic>
              <Legend />
            </LegendGraphic>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default Notification;
