import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CustomDrawer from '../components/CustomDrawer';
import CourseDetailsScreen from '../screens/course/CourseDetailsScreen';
import ContentDetailsScreen from '../screens/course/ContentDetailsScreen';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                headerTitleAlign: 'center',
            }}
        >
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
            <Drawer.Screen
                name="CourseDetails"
                component={CourseDetailsScreen}
            />
            <Drawer.Screen
                name="ContentDetails"
                component={ContentDetailsScreen}
            />
        </Drawer.Navigator>
    );
}
