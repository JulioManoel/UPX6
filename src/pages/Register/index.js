import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'


export default function SignIn() {
    const navigation = useNavigation();
    

    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={200} style={styles.containerHeader}>
                <Image source={require('../../assets/itemmLogo.png')} style={styles.imageLogo}/>
                <Text style={styles.underText}>Avaliação de Trabalho Invididual</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Cadastro</Text>

                <Text style={styles.inputTitle}>Nome completo</Text>
                <TextInput placeholder='Insira seu nome' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput placeholder='Insira seu email' style={styles.inputText}/>

                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText}/>
                
                <Text style={styles.inputTitle}>Confirmar senha</Text>
                <TextInput placeholder='Insira sua senha' style={styles.inputText}/>

                <TouchableOpacity
                style={styles.registerButton}
                onPress={ () => navigation.navigate('Apprentices')}>
                    <Text style={styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#004DA1',
    },

    containerHeader:{
        marginTop:'0%',
        marginBottom:'8%',
        paddingStart: '5%',
        paddingEnd: '5%',
        alignSelf: 'center',
    },

    imageLogo:{
        marginLeft: '18%',
        alignSelf: 'center'
    },

    underText:{
        alignSelf: 'center',
        marginTop: '-8%',
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
    },

    containerForm:{
        alignSelf: 'center',
        width: '72%',
        height: '66%',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },

    welcomeText:{
        fontSize: 28,
        color:'#004DA1',
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '6%',
        alignSelf: 'center'
    },
    
    inputTitle:{
        fontSize: 20,
        marginTop: 20,
        marginLeft: '10%',
    },

    inputText:{
        borderBottomWidth: 1,
        height: 40,
        width: '80%',
        marginBottom: 12,
        alignSelf: 'center'
    },

    registerButton:{
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

    registerButtonText:{
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