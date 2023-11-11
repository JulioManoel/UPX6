import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeRating from '../../components/ApprenticeRating'
import * as Animatable from 'react-native-animatable'


export default function Apprentice() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ApprenticeHeader/>
            <ApprenticeRating/>
        </View>
    );
}

const styles = StyleSheet.create({



})

