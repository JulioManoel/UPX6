import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { store } from '../store';
import PowerOffIcon from './icons/PowerOffIcon';


export default function ManagerHeader() {
    const [user, setUser] = useState(store.user.state.currentUser)

    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.managerText}>GESTOR</Text>
                <TouchableOpacity style={styles.logoutButton}>
                    <PowerOffIcon iconSize={24} style={styles.powerOffIcon}/>
                </TouchableOpacity>
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

    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B90E0A',
        padding: 6,
        width: 35,
        borderRadius: 25,
        marginRight: 10,
        marginLeft: 'auto',
    },

    powerOffIcon: {
    },  

    logoutText: {
        color: '#F5F5F5',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 6,
    }
})

