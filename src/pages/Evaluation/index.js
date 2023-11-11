import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeEvaluation from '../../components/ApprenticeEvaluation'
import * as Animatable from 'react-native-animatable'


export default function Evaluation() {
    const navigation = useNavigation();

    return (
        <View>
            <ApprenticeHeader/>
            <Animatable.View animation={'fadeInUp'}>
                <ApprenticeEvaluation/>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({



})

