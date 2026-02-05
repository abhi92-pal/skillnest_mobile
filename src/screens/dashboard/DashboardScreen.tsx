import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import { courses } from '../../data/mockCourses';
import { useEffect, useLayoutEffect, useState } from 'react';
import { getMyCourses } from '../../services/courseService';

export default function DashboardScreen({ navigation }: any) {
    const [courses, setCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <TouchableOpacity onPress={() => navigation.openDrawer()}>
    //                 <Text style={{ marginLeft: 15, fontSize: 20 }}>☰</Text>
    //             </TouchableOpacity>
    //         ),
    //         headerTitle: 'Dashboard',
    //     });
    // }, []);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            setLoading(true);
            const data = await getMyCourses();
            
            setCourses(data.data.courses.data);
        } catch (e: any) {
            setError('Failed to load dashboard');
            console.log('Dashboard error:', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
        <View style={styles.center}>
            <ActivityIndicator size="large" />
        </View>
        );
    }

    if (error) {
        return (
        <View style={styles.center}>
            <Text>{error}</Text>
        </View>
        );
    }

    return (
        <FlatList
            data={courses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('CourseDetails', { course: item })
                    }
                    style={{ padding: 20, borderBottomWidth: 1 }}
                >
                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                    <Text>Duration {item.duration}: {item.duration_type}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  meta: {
    marginTop: 6,
    color: '#666',
  },
});

