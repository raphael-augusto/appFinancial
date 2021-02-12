import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import HeaderApp from '../../components/Header';

import { Container, Card, Text, OptionContainer, Options } from './styles';

const ConfigApp: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled
      >
        <HeaderApp activeProps />
        <Card>
          <Text active>Olá, Raphael</Text>
          <OptionContainer>
            <Icon
              name="alert-octagon"
              size={30}
              style={{ marginLeft: 55, marginTop: 30 }}
              color="#828486"
            />
            <Options onPress={() => navigate('Help')}>
              <Text>Me ajuda</Text>
            </Options>
          </OptionContainer>
          <OptionContainer>
            <Icon
              name="users"
              size={30}
              style={{ marginLeft: 55, marginTop: 30 }}
              color="#828486"
            />
            <Options onPress={() => navigate('Perfil')}>
              <Text>Perfil</Text>
            </Options>
          </OptionContainer>
          <OptionContainer>
            <Icon
              name="sliders"
              size={30}
              style={{ marginLeft: 55, marginTop: 30 }}
              color="#828486"
            />
            <Options onPress={() => navigate('Account')}>
              <Text>Configuração da conta</Text>
            </Options>
          </OptionContainer>
          <OptionContainer>
            <Icon
              name="settings"
              size={30}
              style={{ marginLeft: 55, marginTop: 30 }}
              color="#828486"
            />
            <Options onPress={() => navigate('ConfigurationNotification')}>
              <Text>Configuração de notificação</Text>
            </Options>
          </OptionContainer>
          <OptionContainer>
            <Icon
              name="book-open"
              size={30}
              style={{ marginLeft: 55, marginTop: 30 }}
              color="#828486"
            />
            <Options onPress={() => navigate('Abbout')}>
              <Text>Abbout</Text>
            </Options>
          </OptionContainer>
        </Card>
      </ScrollView>
    </Container>
  );
};

export default ConfigApp;
