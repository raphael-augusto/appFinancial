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

export const Card = styled.View`
  width: 100%;

  padding: 20px;

  border-radius: 10px;
  elevation: 8;

  background-color: #fff;
`;

export const Text = styled.Text<activeProps>`
  color: #000;

  font-size: ${props => (props.active ? 33 : 20)}px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  padding-bottom: ${props => (props.active ? 15 : 0)}px;

  margin-top: ${props => (props.active ? 0 : 10)}px;
  margin-bottom: ${props => (props.active ? 20 : 0)}px;
  margin-left: ${props => (props.active ? 0 : 20)}px;
`;

export const OptionContainer = styled.View`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  border-radius: 12px;
  elevation: 8;

  background-color: #dcdcdc;

  padding-bottom: 20px;
  margin-bottom: 15px;
`;
export const Options = styled.TouchableOpacity`
  margin-top: 10px;
  padding-top: 8px;

  width: 100%;
`;
