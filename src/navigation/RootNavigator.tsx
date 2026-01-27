import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { getToken } from '../utils/authStorage';
import { ActivityIndicator, View } from 'react-native';

export default function RootNavigator() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            setIsLoggedIn(!!token);
            setLoading(false);
            // if (token) {
            //     navigation.reset({
            //         index: 0,
            //         routes: [{ name: 'Dashboard' }],
            //     });
            // }
        };

        checkAuth();
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}