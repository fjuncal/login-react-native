import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../pages/welcome";
import Signin from "../pages/signin";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}>
            </Stack.Screen>
            <Stack.Screen 
            name="Signin"
            component={Signin}
            options={{headerShown: false}}
            >
            </Stack.Screen>      
        </Stack.Navigator>
    )
}