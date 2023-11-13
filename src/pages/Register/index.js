import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { store } from '../../store';

export default function Register({ navigation }) {    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        setLoading(true)
        
        if (password === confirmPassword) await store.user.create({name, email, password, isManager: true})
        if (store.user.state.currentUser) navigation.navigate('Home')
        
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={200} style={styles.containerHeader}>
                <Image source={require('../../assets/itemmLogo.png')} style={styles.imageLogo} />
                <Text style={styles.underText}>Avaliação de Trabalho Invididual</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Cadastro</Text>

                <Text style={styles.inputTitle}>Nome completo</Text>
                <TextInput placeholder='Insira seu nome' style={styles.inputText} value={name} onChangeText={text => setName(text)} />

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput autoCapitalize="none" placeholder='Insira seu email' style={styles.inputText} value={email} onChangeText={text => setEmail(text)} />

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput autoCapitalize="none" secureTextEntry={true} placeholder='Insira sua senha' style={styles.inputText} value={password} onChangeText={text => setPassword(text)} />

                <Text style={styles.inputTitle}>Confirmar senha</Text>
                <TextInput autoCapitalize="none" secureTextEntry={true} placeholder='Insira sua senha' style={styles.inputText} value={confirmPassword} onChangeText={text => setConfirmPassword(text)} />

                <TouchableOpacity style={styles.registerButton} onPress={() => onSubmit()}>
                    { loading ? (
                        <ActivityIndicator size="large" color="#004DA1" />
                    ) : (
                        <Text style={styles.registerButtonText}>Cadastre-se</Text>
                    )}
                </TouchableOpacity>
            </Animatable.View>
        </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#004DA1',
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