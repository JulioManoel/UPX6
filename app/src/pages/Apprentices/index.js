import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ApprenticeList from '../../components/ApprenticesList';
import ManagerHeader from '../../components/ManagerHeader'
import * as Animatable from 'react-native-animatable'


export default function Apprentices() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ManagerHeader style={styles.ManagerHeader}/>
            <ApprenticeList style={styles.ApprenticeList} />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },

    managerHeader: {
        flex: 1,
    },

    apprenticeList: {
        flex: 2,
    },

})

