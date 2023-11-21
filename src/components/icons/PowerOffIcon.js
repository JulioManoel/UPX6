import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'


export default function PowerOffIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='power-off' size={props.iconSize} color='#f5f5f5' />
    );
}

const styles = StyleSheet.create({

})

