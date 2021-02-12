import React from 'react';
import { View } from 'react-native';
import IconPlus from 'react-native-vector-icons/Feather';

import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container>
      <View>
        <IconPlus name="plus" size={30} color="white" />
      </View>
    </Container>
  );
};

export default Button;
