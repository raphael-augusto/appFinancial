import styled from 'styled-components/native';

interface activeProps {
  active?: boolean;
}

export const Header = styled.View`
  width: 100%;
  height: 250px;

  background: #fff;

  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;

  elevation: 8;

  margin-bottom: 4px;
`;

export const BalanceAccount = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
export const Balance = styled.Text`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const ViewCard = styled.View`
  width: 100%;
  flex: 2;

  justify-content: center;
  align-items: center;
`;

export const ViewCardRecipe = styled.View`
  width: 100%;
  flex: 1;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-left: 15px;
  padding-bottom: 10px;
`;

export const AccountUp = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const AccountBalanceRecipe = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

export const BalanceMoney = styled.Text<activeProps>`
  font-size: 25px;
  font-weight: bold;
  color: ${props => (props.active ? '#197a0a' : '#dd111c')};

  margin-bottom: 10px;
  margin-left: 5px;
`;

export const AccountDown = styled.View`
  flex-direction: column;
  flex: 1;
`;
