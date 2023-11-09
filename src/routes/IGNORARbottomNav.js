import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../pages/Home'
import Apprentice from "../pages/Apprentice"
import Profile from "../pages/Profile"

const Tab = createBottomTabNavigator()

export default function BottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name='Apprentice' component={Apprentice} options={{ headerShown: false }}/>
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}