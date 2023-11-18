import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { store } from '../store';


export default function ManagerHeader() {
    const [user, setUser] = useState(store.user.state.currentUser)

    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.managerText}>GESTOR</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Olá, {user.displayName}!</Text>
                <Image src={`https://api.multiavatar.com/${user.uid}.png`} style={styles.profilePicture}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    headerBar: {
        backgroundColor: '#004DA1',
    },

    managerText: {
        marginTop: 24,
        marginBottom: 14,
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    container: {
        flexDirection: 'row',
        backgroundColor: '#196DC9',
    },

    welcomeText: {
        flex: 2,
        fontSize: 22,
        color: '#F5F5F5',
        marginTop: 160,
        marginBottom: 10,
        marginLeft: 20,
        fontWeight: '400',
    },  

    profilePicture: {
        flex: 1,
        marginTop: 84,
        marginRight: 38,
        bottom: -50,
    },
})

