import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ApprenticeList from '../../components/ApprenticesList';
import ManagerHeader from '../../components/ManagerHeader'
import * as Animatable from 'react-native-animatable'


export default function Profile() {
    const navigation = useNavigation();

    return (
        <Text>Perfil</Text>
    );
}

const styles = StyleSheet.create({


})

