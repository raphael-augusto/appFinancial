import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  margin-top: 20px;
  padding: 10px;
`;

export const Card = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const TextHeader = styled.Text`
  color: grey;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const TextGraphic = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;

  margin-left: 1px;
`;

export const LegendGraphic = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;
export const TextLegend = styled.Text`
  font-size: 25px;
`;
