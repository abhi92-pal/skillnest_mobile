import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppDrawer from './AppDrawer';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CourseDetailsScreen from '../screens/course/CourseDetailsScreen';
import ContentDetailsScreen from '../screens/course/ContentDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={AppDrawer} />
            {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
            <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
            <Stack.Screen name="ContentDetails" component={ContentDetailsScreen} />
        </Stack.Navigator>
    );
}