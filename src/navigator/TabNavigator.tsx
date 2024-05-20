import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenV2 from '../screens/HomeScreenV2';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreenV2} />
            <Tab.Screen name="My Chart" component={HomeScreenV2} />
            <Tab.Screen name="Message" component={HomeScreenV2} />
            <Tab.Screen name="Profile" component={HomeScreenV2} />
        </Tab.Navigator>
    );
}

export default MyTabs;