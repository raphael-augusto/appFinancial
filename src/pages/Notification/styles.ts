import styled from 'styled-components/native';

interface activeProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #f1f1f2;
  /* align-items: center;
  justify-content: center; */
`;

export const Title = styled.Text`
  color: grey;
  font-size: 25px;
  font-weight: bold;
`;

export const Header = styled.View`
  width: 100%;

  margin-top: 20px;
  padding: 10px;
`;

export const Card = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const TextLegend = styled.Text<activeProps>`
  font-size: ${props => (props.active ? 25 : 19)}px;
  font-weight: bold;
`;

export const LegendBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 30px;
  padding-right: 30px;
`;
export const TextMonth = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const LegendGraphic = styled.View<activeProps>`
  display: flex;
  flex-direction: column;

  align-items: ${props => (props.active ? 'center' : 'flex-start')};
  justify-content: center;

  margin-bottom: 20px;
`;

export const Legend = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  margin-left: 30px;
  display: flex;
  flex-direction: row;
`;
