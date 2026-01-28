import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { loginApi } from '../../services/authService';
import { storeAuth } from '../../utils/authStorage';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }: any) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F4F6FA',
            justifyContent: 'center',
            padding: 20,
        },
        header: {
            alignItems: 'center',
            marginBottom: 30,
        },
        logo: {
            fontSize: 36,
            fontWeight: 'bold',
            color: '#2D3A8C',
        },
        subtitle: {
            fontSize: 14,
            color: '#666',
            marginTop: 4,
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 20,
            elevation: 5, // Android shadow
        },
        title: {
            fontSize: 22,
            fontWeight: '600',
            marginBottom: 20,
            color: '#333',
        },
        input: {
            height: 48,
            borderWidth: 1,
            borderColor: '#DDD',
            borderRadius: 8,
            paddingHorizontal: 12,
            marginBottom: 15,
            fontSize: 16,
            backgroundColor: '#FAFAFA',
            color: '#333',
        },
        button: {
            height: 48,
            backgroundColor: '#2D3A8C',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
        },
        });


    const handleLogin = async () => {
        try {
            setLoading(true);
            const data = await loginApi(email, password);
            await storeAuth(data.token, data.user);
            login();
            // navigation.replace('Dashboard');
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo / App Name */}
            <View style={styles.header}>
                <Text style={styles.logo}>SkillNest</Text>
                <Text style={styles.subtitle}>Learn. Grow. Master.</Text>
            </View>

            {/* Login Card */}
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
