import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { store } from '../../store'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Welcome() {
    const navigation = useNavigation()

    useFocusEffect(() => {
        if (store.user.state.currentUser) return

        AsyncStorage.getItem('auth').then(async auth => {
            if (!auth) return

            const payload = JSON.parse(auth)
            await store.user.login(payload)
            if (store.user.state.currentUser) navigation.navigate('Home')
        })
    })

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/itemmLogo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.title} >Gerencie e avalie os jovens aprendizes da sua empresa.</Text>
                <Text style={styles.text}>Acesse para começar</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Vamos lá!</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004DA1'
    },

    containerLogo: {
        flex: 2,
        backgroundColor: '#004DA1',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '18%'
    },

    containerForm: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: '3%',
        paddingStart: '5%',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 8,
    },

    text: {
        color: '#A1A1A1'
    },

    button: {
        position: 'absolute',
        backgroundColor: '#004DA1',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold'
    }
})