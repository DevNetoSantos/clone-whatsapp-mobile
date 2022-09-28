import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SelectContactCall from '../../pages/SelectContactCall';
import SelectContactChat from '../../pages/SelectContactChat';
import MainTabs from '../TopTabs/MainTabs';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={MainTabs}
        options={{title: 'Whatsapp'}}
      />

      <Stack.Screen
        name='SelectContactChat'
        component={SelectContactChat}
        options={{title: 'Select Contact'}}
      />

      <Stack.Screen
        name='SelectContactCall'
        component={SelectContactCall}
        options={{title: 'Select Contact'}}
      />

    </Stack.Navigator>
  );
}

export default MainStack