import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)



    const valida = async () => {
        setLoading(true)

        try {

            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) navigation.navigate('BottomNav')

        } catch {
            Alert.alert('Error', 'Erro ao logar', [{ text: 'OK' }])
        }
        setLoading(false)
    }
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Image source={require('../../assets/itemmLogo.png')} style={styles.imageLogo} />
                <Text style={styles.underText}>Avaliação de Trabalho Individual</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Bem-vindo(a)</Text>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Insira seu email' style={styles.inputText} value={email} onChangeText={text => setEmail(text)} />

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText} value={password} onChangeText={text => setPassword(text)} />

                <TouchableOpacity style={styles.button}
                    onPress={() => valida()}>

                    <Text style={styles.buttonText}>Conectar</Text>
                </TouchableOpacity>

                <Text style={styles.alternativeText}>ou</Text>

                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004DA1',
    },

    containerHeader: {
        marginTop: '16%',
        marginBottom: '20%',
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
        height: '56%',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },

    welcomeText: {
        fontSize: 28,
        color: '#004DA1',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '12%',
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

    button: {
        backgroundColor: '#004DA1',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12%',
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 18,
        color: '#F5F5F5',
        fontWeight: 'bold',
    },

    registerButton: {
        backgroundColor: '#F5F5F5',
        height: '8%',
        width: '60%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
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