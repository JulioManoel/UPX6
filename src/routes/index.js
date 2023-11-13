import  { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Apprentice from '../pages/Apprentice'
import Evaluation from '../pages/Evaluation'
import ApprenticeRegister from '../pages/ApprenticeRegister'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{ headerShown: false}}
        />

        <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{ headerShown: false}}
        />

        <Stack.Screen
            name='Register'
            component={Register}
            options={{ headerShown: false}}
        />
        
        <Stack.Screen 
            name='Home'
            component={Home}
            options={{ headerShown: false}}
        />

        <Stack.Screen
            name='Apprentice'
            component={Apprentice}
            options={{ headerShown: false}}
        />

        <Stack.Screen
            name='Evaluation'
            component={Evaluation}
            options={{ headerShown: false} }
            
        />
   
        <Stack.Screen
            name='ApprenticeRegister'
            component={ApprenticeRegister}
            options={{ headerShown: false} }
            
        />
        
        </Stack.Navigator>
    )
}