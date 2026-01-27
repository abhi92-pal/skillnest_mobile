import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { courses } from '../../data/mockCourses';
import { useLayoutEffect } from 'react';

export default function DashboardScreen({ navigation }: any) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Text style={{ marginLeft: 15, fontSize: 20 }}>☰</Text>
                </TouchableOpacity>
            ),
            headerTitle: 'Dashboard',
        });
    }, []);

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
                    <Text style={{ fontSize: 18 }}>{item.title}</Text>
                    <Text>{item.lessons} Lessons</Text>
                </TouchableOpacity>
            )}
        />
    );
}
