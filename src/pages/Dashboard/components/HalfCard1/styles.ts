import styled from 'styled-components/native';

interface activeProps {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;

  margin-top: 20px;
  padding: 10px;
`;

export const Text0 = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 20px;

  margin-left: 1px;
`;

export const Card = styled.View`
  width: 100%;
  margin-top: 10px;
  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const Card1 = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Text1 = styled.Text<activeProps>`
  color: ${props => (props.active ? '#fff' : '#000')};
  font-size: 18px;
`;

export const ButtonAction = styled.TouchableOpacity<activeProps>`
  background-color: ${props => (props.active ? 'green' : 'lightgray')};
  padding: 10px;
  border-radius: 20px;
  margin-left: 10px;
`;

export const Card2 = styled.View`
  margin-top: 20px;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const GridText = styled.View`
  flex: 1;
  padding-left: 10px;
`;
export const ComponentText = styled.View``;

export const Text2 = styled.Text<activeProps>`
  color: #000;
  font-size: ${props => (props.active ? 20 : 22)}px;
  font-weight: bold;
`;

export const Text4 = styled.Text`
  color: #dd1110;
  font-size: 18px;
`;

export const LineSeparator = styled.View`
  height: 1;
  width: 100%;

  background-color: grey;
`;

export const ComponentTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-top: 15px;
`;
