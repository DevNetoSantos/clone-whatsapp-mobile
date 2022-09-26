import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Calls from '../../pages/Calls';
import Chats from '../../pages/Chats';
import Status from '../../pages/Status';

const Tab = createMaterialTopTabNavigator();

function TopTabrs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}

export default TopTabrs;