import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabrs from './routes/TopTabs';

export default function App() {
  return (
    <NavigationContainer>
      <TopTabrs />
    </NavigationContainer>
  );
}