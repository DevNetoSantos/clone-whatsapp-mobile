import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './routes/Stack/MainStack';
import { Provider } from 'react-redux';
import store from './Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}