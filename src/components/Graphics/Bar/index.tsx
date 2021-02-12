import React from 'react';
import { Text } from 'react-native-svg';
import { BarChart, Grid } from 'react-native-svg-charts';

import { Container } from './styles';

const GraphicBar: React.FC = () => {
  const data = [70, 25, 55, 95];

  const CUT_OFF = 95;
  const Labels = ({ x, y, bandwidth, data }) =>
    data.map((value, index) => (
      <Text
        key={index}
        x={x(index) + bandwidth / 2}
        y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
        fontSize={20}
        fill={value >= CUT_OFF ? 'white' : 'black'}
        alignmentBaseline="middle"
        textAnchor="middle"
      >
        {`${value}%`}
      </Text>
    ));

  return (
    <Container>
      <BarChart
        style={{ flex: 1, marginLeft: 8 }}
        data={data}
        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        contentInset={{ top: 10, bottom: 10 }}
        spacing={0.2}
        gridMin={0}
      >
        <Grid direction={Grid.Direction.HORIZONTAL} />
        <Labels />
      </BarChart>
    </Container>
  );
};

export default GraphicBar;
