import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Drawer.Screen
                name="Dashboard"
                component={DashboardScreen}
            />
        </Drawer.Navigator>
    );
}
