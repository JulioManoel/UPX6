import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Apprentices from '../pages/Apprentices'

const Tab = createBottomTabNavigator()

export default function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Apprentices' component={Apprentices} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}