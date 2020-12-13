import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    View
} from 'react-native';
import Card from '../shared/Card';

export default function Home({ navigation }) {
    const [lottoType, setLottoType] = useState([
        { name: 'Ötöslottó', image: require('../assets/otoslotto.png'), route: 'Lotto5', key: '1' },
        { name: 'Hatoslottó', image: require('../assets/hatoslotto.png'), route: 'Lotto6', key: '2' },
        { name: 'Skandináv lottó', image: require('../assets/skandinav.png'), route: 'Skandi', key: '3' }
    ]);

    return (
        <View style={styles.homeContainer}>
            <FlatList
                data={lottoType}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.route, item)}>
                        <Card>
                            <Image
                                style={styles.cardImage}
                                source={item.image}
                            />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cardImage: {
        width: 200,
        height: 70,
        marginTop: 20
    },
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 70
    }
});