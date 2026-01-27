import { View, Text, Button } from 'react-native';

export default function CourseDetailsScreen({ route, navigation }: any) {
    const { course } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22 }}>{ course.title }</Text>
            <Text>Total Lessons: { course.lessons }</Text>

            <Button 
                title='Open Lesson'
                onPress={() => 
                    navigation.navigate('ContentDetails', {
                        title: 'Lesson 1: Introduction',
                    })
                }
            />
        </View>
    );
}