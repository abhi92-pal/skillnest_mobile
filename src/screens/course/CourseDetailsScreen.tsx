import { View, Text, Button } from 'react-native';

export default function CourseDetailsScreen({ route, navigation }: any) {
    const { course } = route.params;
    console.log(course);
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22 }}>{ course.name }</Text>
            <Text>Duration: { course.duration } { course.duration_type }</Text>
            <Text>Total Semesters: { course.no_of_semesters }</Text>
            <Text>Description: { course.short_description }</Text>

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