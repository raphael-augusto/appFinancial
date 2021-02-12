import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Header from './components/HeaderPage1';
import Middle from './components/HalfCard1';
import Graphic from './components/HalfCardGraphics';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled
      >
        <Header />
        <Middle />
        <Graphic />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
