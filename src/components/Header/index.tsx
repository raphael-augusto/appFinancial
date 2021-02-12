import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ViewCard1,
  TextCard,
  Text,
  TextCard2,
  ButtonIcon,
} from './styles';

interface NavigationProp {
  activeProps: boolean;
}

const HeaderApp: React.FC<NavigationProp> = ({ activeProps }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ViewCard1>
        <Icon name="user" size={32} color="#828486" />
        <TextCard>
          {/* <Text>{activeProps ? 'JANEIRO' : 'Notificações'}</Text> */}
          <Text>JANEIRO</Text>
          <Icon
            name={activeProps ? 'arrow-down' : ''}
            size={22}
            color="#828486"
          />
        </TextCard>
        <TextCard2>
          <ButtonIcon>
            <Icon
              name={activeProps ? 'bell' : 'rotate-ccw'}
              size={22}
              color="#828486"
              style={{ paddingRight: 20 }}
              onPress={
                activeProps
                  ? () => navigate('Notification')
                  : () => navigate('Tabs')
              }
            />
          </ButtonIcon>
        </TextCard2>
      </ViewCard1>
    </Container>
  );
};

export default HeaderApp;
