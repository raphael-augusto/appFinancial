import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import HeaderApp from '../../components/Header';

import {
  Container,
  Header,
  Card,
  ViewLegend,
  TextLegend,
  ViewCard,
  ViewIcon,
} from './styles';

const ConfigurationNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <Container>
      <ScrollView
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEnabled
      >
        <HeaderApp activeProps={false} />
        <Header>
          <Card>
            <ViewCard>
              <ViewIcon>
                <TextLegend active>Transações</TextLegend>
                <ViewLegend>
                  <TextLegend>Receber na sua conta todo mês.</TextLegend>
                </ViewLegend>
              </ViewIcon>

              <Icon
                name={isVisible ? 'toggle-left' : 'toggle-right'}
                size={40}
                color="#828486"
                onPress={handleToggleVisibility}
              />
            </ViewCard>
            <ViewCard>
              <ViewIcon>
                <TextLegend active>Lembretes</TextLegend>
                <ViewLegend>
                  <TextLegend>Aviso sobre datas de vencimento.</TextLegend>
                </ViewLegend>
              </ViewIcon>

              <Icon
                name={isVisible ? 'toggle-left' : 'toggle-right'}
                size={40}
                color="#828486"
                onPress={handleToggleVisibility}
              />
            </ViewCard>

            <ViewCard>
              <ViewIcon>
                <TextLegend active>Novidades</TextLegend>
                <ViewLegend>
                  <TextLegend>Novas funcionalidades e dicas.</TextLegend>
                </ViewLegend>
              </ViewIcon>

              <Icon
                name={isVisible ? 'toggle-left' : 'toggle-right'}
                size={40}
                color="#828486"
                onPress={handleToggleVisibility}
              />
            </ViewCard>
          </Card>
        </Header>
      </ScrollView>
    </Container>
  );
};

export default ConfigurationNotification;
