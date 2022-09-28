import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Messge from '../../pages/Messege';
import Phone from '../../pages/Phone';
import Status from '../../pages/Status';

const Tab = createMaterialTopTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Chats" component={Messge}/>
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Phone} />
    </Tab.Navigator>
  );
}

export default MainTabs;