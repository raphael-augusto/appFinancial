import React from 'react';

import { Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';

import { Container } from './styles';

const Graphics: React.FC = () => {
  // const data = [10, 10, 25, 55];
  const data = [
    { id: 0, value: 10, description: 'Tesouro Direto', color: '#fc0000' },
    { id: 1, value: 10, description: 'Criptomoedas', color: '#fc0000' },
    { id: 2, value: 25, description: 'LCI (Imobiliário)', color: '#6100fc' },
    { id: 3, value: 55, description: 'Ações', color: '#2b8004' },
  ];
  const pieData = data.map(
    (item, index) => ({
      value: item.value,
      key: `pie-${index}`,
      svg: {
        fill: item.color,
        /* `#${((Math.random() * 0xffffff) << 0).toString(16)}000000`.slice(
          0,
          7,
        ), */
      },
    }),
    [],
  );

  const PizzaGraphic = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;

      return (
        <Text
          key={`label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={17}
        >
          {`${data.value}`}
        </Text>
      );
    });
  };

  return (
    <Container>
      <PieChart style={{ height: 250 }} data={pieData}>
        <PizzaGraphic />
      </PieChart>
    </Container>
  );
};

export default Graphics;
