import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TopTabrs from './routes/TopTabs';
import Header from './components/Header';

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <TopTabrs />
    </NavigationContainer>
  );
}