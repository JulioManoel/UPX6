import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import StarIcon from './icons/StarIcon'


const id = '001'
const profilePicture = require('../assets/profilePicture2.png')
const name = 'Caio Rodrigues'
const department = 'IT - Information Technology'
const rating = '4.2'

const desempenho = 4
const pontualidade = 5
const comunicacao = 3


export default function ApprenticeHeader() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.apprenticeName}> {name} </Text>
            </View>
            <View style={styles.userContainer}>
                <Image source={profilePicture} style={styles.profilePicture}/>
                <Text style={styles.apprenticeDepartment}> {department} </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    headerBar: {
        backgroundColor: '#004DA1',
    },

    apprenticeName: {
        marginTop: 24,
        marginBottom: 14,
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    userContainer: {
        width: '100%',
        backgroundColor: '#196DC9',
    },

    profilePicture: {
        alignSelf: 'center',
        bottom: -60,
    },

    apprenticeDepartment: {
        alignSelf: 'center',
        color: '#202020',
        fontSize: 14,
        fontWeight: '600',
        bottom: -75,
    },
})

