import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtomHeader from '../../components/ButtonHeader';
import ButtonHeaderCall from '../../components/ButtonHeaderCall';
import ButtonHeaderChat from '../../components/ButtonHeaderChat';
import SelectContactCall from '../../pages/SelectContactCall';
import SelectContactChat from '../../pages/SelectContactChat';
import MainTabs from '../TopTabs/MainTabs';
import SearchChat from '../../pages/SearchChats';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
    >

      <Stack.Screen
        name="Home"
        component={MainTabs}
        options={{
          title: 'Whatsapp',
          headerRight: (props) => <ButtomHeader {...props} />,
        }}
      />

      <Stack.Screen
        name='SearchChats'
        component={SearchChat}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='SelectContactChat'
        component={SelectContactChat}
        options={{
          title: 'Select Contact',
          headerRight: (props) => <ButtonHeaderChat {...props} />,
        }}
      />

      <Stack.Screen
        name='SelectContactCall'
        component={SelectContactCall}
        options={{
          title: 'Select Contact',
          headerRight: (props) => <ButtonHeaderCall {...props} />,
        }}
      />

    </Stack.Navigator>
  );
}

export default MainStack;