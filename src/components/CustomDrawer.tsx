import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { clearAuth } from '../utils/authStorage';
import { useEffect, useState } from 'react';

export default function CustomDrawer(props: any) {
    const { navigation } = props;
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        AsyncStorage.getItem('SKILLNEST_USER').then((data) => {
            if (data) setUser(JSON.parse(data));
        });
    }, []);

    const logout = async () => {
        await clearAuth();
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <DrawerContentScrollView {...props}>
            {/* User Header */}
            <View style={styles.header}>
                <Text style={styles.name}>{user?.name || 'User'}</Text>
                <Text style={styles.email}>{user?.email}</Text>
            </View>

            {/* Menu */}
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Text style={styles.itemText}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.item, styles.logout]}
                onPress={logout}
            >
                <Text style={[styles.itemText, { color: 'red' }]}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
}

export const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#2D3A8C',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    color: '#ddd',
    fontSize: 13,
    marginTop: 4,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
  logout: {
    marginTop: 20,
  },
});
