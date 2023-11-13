import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable'


export default function PlusIcon(props) {
    const navigation = useNavigation();

    return (
        <Icon name='plus' size={props.iconSize} color='#202020' />
    );
}

const styles = StyleSheet.create({

})

