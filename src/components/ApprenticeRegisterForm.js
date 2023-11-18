import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { store } from '../store'
import { useNavigation } from '@react-navigation/native';


export default function ApprenticeRegisterForm() {
    const navigation = useNavigation()

    const [name, setName] = useState()
    const [department, setDepartment] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState()

    const onSubmit = async () => {
        setLoading(true)

        const res = await store.manager.create({ name, email, password, department }, store.manager.state.manager.apprentices)
        if(res) navigation.navigate('Home', { replace: true })

        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Novo aprendiz</Text>

                <Text style={styles.inputTitle}>Nome completo</Text>
                <TextInput style={styles.inputText} value={name} onChangeText={text => setName(text)} />

                <Text style={styles.inputTitle}>Departamento</Text>
                <TextInput style={styles.inputText} value={department} onChangeText={text => setDepartment(text)} />

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput autoCapitalize='none' style={styles.inputText} value={email} onChangeText={text => setEmail(text)} />

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput secureTextEntry={true} autoCapitalize='none' style={styles.inputText} value={password} onChangeText={text => setPassword(text)} />

                <TouchableOpacity style={styles.registerButton} onPress={() => onSubmit()}>
                    { loading ? (
                        <ActivityIndicator size="large" color="#004DA1" />
                    ) : (
                        <Text style={styles.registerButtonText}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#004DA1',
        height: '100%',
        paddingTop: 100,
    },

    containerHeader: {
        marginTop: '0%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignSelf: 'center',
    },

    imageLogo: {
        marginLeft: '18%',
        alignSelf: 'center'
    },

    underText: {
        alignSelf: 'center',
        marginTop: '-8%',
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
    },

    containerForm: {
        alignSelf: 'center',
        width: '72%',
        height: 620,
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },

    welcomeText: {
        fontSize: 28,
        color: '#004DA1',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '6%',
        alignSelf: 'center'
    },

    inputTitle: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: '10%',
    },

    inputText: {
        borderBottomWidth: 1,
        height: 40,
        width: '80%',
        marginBottom: 12,
        alignSelf: 'center'
    },

    registerButton: {
        backgroundColor: '#F5F5F5',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        borderRadius: 20,
        borderColor: '#004DA1',
        borderWidth: 2,
    },

    registerButtonText: {
        fontSize: 18,
        color: '#004DA1',
        fontWeight: 'bold',
    },

    alternativeText: {
        color: '#606060',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '4%'
    }
})

