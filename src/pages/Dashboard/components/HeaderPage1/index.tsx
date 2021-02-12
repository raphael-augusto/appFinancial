import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Feather';

import HeaderComponents from '../../../../components/Header';

import {
  Header,
  ViewCard,
  BalanceAccount,
  Balance,
  EyeButton,
  ViewCardRecipe,
  AccountUp,
  AccountBalanceRecipe,
  BalanceMoney,
  AccountDown,
} from './styles';

const Page1: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <Header>
      <HeaderComponents activeProps />
      <ViewCard>
        <BalanceAccount>Saldo em Conta</BalanceAccount>
        <Balance>{isVisible ? 'R$600,00' : '-----'}</Balance>
        <EyeButton onPress={handleToggleVisibility}>
          <Icon
            name={isVisible ? 'eye' : 'eye-off'}
            size={22}
            color="#828486"
          />
        </EyeButton>
      </ViewCard>
      <ViewCardRecipe>
        <Icon name="arrow-up-circle" size={40} color="#197a0a" />
        <AccountUp>
          <AccountBalanceRecipe>Receitas</AccountBalanceRecipe>
          <BalanceMoney active>
            {isVisible ? 'R$6.000,00' : '-----'}
          </BalanceMoney>
        </AccountUp>

        <Icon name="arrow-down-circle" size={40} color="#dd111c" />
        <AccountDown>
          <AccountBalanceRecipe>Retiradas</AccountBalanceRecipe>
          <BalanceMoney>{isVisible ? 'R$5.400,00' : '-----'}</BalanceMoney>
        </AccountDown>
      </ViewCardRecipe>
    </Header>
  );
};

export default Page1;
