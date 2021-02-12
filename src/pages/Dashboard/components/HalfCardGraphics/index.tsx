import React from 'react';

import { Text } from 'react-native-svg';
import { PieChart, ProgressCircle } from 'react-native-svg-charts';

import {
  Container,
  Card,
  TextHeader,
  TextGraphic,
  LegendGraphic,
  TextLegend,
} from './styles';

const Graphic: React.FC = () => {
  return (
    <Container>
      <Card>
        {/* <TextHeader>Gráfico de Retiradas</TextHeader> */}
        <LegendGraphic>
          <TextGraphic>Processo de retiradas</TextGraphic>
        </LegendGraphic>
        <ProgressCircle
          style={{ height: 200 }}
          strokeWidth={20}
          progress={0.9}
          progressColor="rgb(134, 65, 244)"
        />
        <LegendGraphic>
          <TextLegend>90% Retirados</TextLegend>
        </LegendGraphic>
      </Card>
    </Container>
  );
};

export default Graphic;
