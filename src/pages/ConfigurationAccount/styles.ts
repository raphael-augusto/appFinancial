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

export const Header = styled.View`
  width: 100%;

  margin-top: 20px;
  padding: 10px;
`;

export const Card = styled.View`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const ButtonMeu = styled.TouchableOpacity``;

export const ViewCard = styled.View<activeProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.active ? 'center' : 'flex-start')};
  justify-content: center;

  margin-bottom: 60px;
`;

export const TextLegend = styled.Text<activeProps>`
  font-size: ${props => (props.active ? 22 : 16)}px;
  font-weight: bold;

  color: ${props => (props.active ? '#000' : '#a9a9a9')};
`;
