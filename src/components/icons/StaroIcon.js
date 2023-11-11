import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'


export default function StaroIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='star-o' size={props.iconSize} color='#EAA800' />
    );
}

const styles = StyleSheet.create({

})

