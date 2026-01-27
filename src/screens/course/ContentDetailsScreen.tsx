import { View, Text } from 'react-native';

export default function ContentDetailsScreen({ route }: any) {
    const { title } = route.params
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>{title}</Text>
            <Text style={{ marginTop: 10 }}>
                Video / PDF / Content will appear here
            </Text>
        </View>
    );
}