import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable'
// import ProfilePicture from '../assets/profilePicture.png'

const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default function StarIcon() {
    const navigation = useNavigation();

    return (
        <Icon name='star' size={15} color='#EAA800' />
    );
}

const styles = StyleSheet.create({

})

