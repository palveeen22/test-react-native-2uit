import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenV2 from '../screens/HomeScreenV2';
import ChartScreen from '../screens/CartScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreenV2} />
            <Tab.Screen name="My Chart" component={ChartScreen} />
            {/* <Tab.Screen name="Message" component={ChatScreen} /> */}
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs;