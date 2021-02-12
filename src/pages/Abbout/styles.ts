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
  margin-bottom: 20px;
  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const ViewCard = styled.View<activeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextLegend = styled.Text<activeProps>`
  font-size: ${props => (props.active ? 18 : 18)}px;
  font-weight: bold;

  color: ${props => (props.active ? '#000' : '#a9a9a9')};

  width: 70%;
`;

export const Menu = styled.View<activeProps>`
  width: 60%;

  margin-bottom: 40px;
  margin-left: ${props => (props.active ? 0 : 100)}px;
`;

export const ButtonMenu = styled.TouchableOpacity<activeProps>`
  width: 60%;

  margin-bottom: 40px;
  margin-left: ${props => (props.active ? 0 : 100)}px;
`;
