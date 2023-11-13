import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Slider from '@react-native-community/slider'
import EvaluationSlider from './EvaluationSlider';


export default function ApprenticeRegisterForm() {

    return (
        <View style={styles.container}>
                <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.welcomeText}>Novo aprendiz</Text>

                <Text style={styles.inputTitle}>Nome completo</Text>
                <TextInput style={styles.inputText}  />

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput  style={styles.inputText} />

                <Text style={styles.inputTitle}>Departamento</Text>
                <TextInput  style={styles.inputText} />

                <Text style={styles.inputTitle}>Email</Text>
                <TextInput  style={styles.inputText} />

                <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Cadastrar</Text>
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

