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

  margin-bottom: 20px;
`;
export const Header = styled.View`
  width: 100%;

  margin-top: 10px;
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

  align-items: center;
  justify-content: center;
`;
export const Legend = styled.View`
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-bottom: 25px;
`;

export const TextActions = styled.Text<activeProps>`
  font-size: ${props => (props.active ? 25 : 18)}px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
`;

/* export const TextActionsContent = styled.Text`
  font-size: 10px;
`; */
