import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Slider from '@react-native-community/slider'
import EvaluationSlider from './EvaluationSlider';


export default function ApprenticeEvaluation() {
    const navigation = useNavigation();
    const [range, setRange] = useState('50%')
    const [sliding,setSliding] = useState('Inactive')

    return (
        <View>
            <View animation='fadeInLeft' delay={200} style={styles.ratingsContainer}>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Desempenho</Text>
                    <EvaluationSlider/>
                </View>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Pontualidade</Text>
                    <EvaluationSlider/>
                </View>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Comunicação</Text>
                    <EvaluationSlider/>
                </View>
            </View>
            <Animatable.View animation='fadeInUp' delay={200} style={styles.evaluateContainer}>
                <TouchableOpacity 
                    style={styles.evaluateButton}
                    onPress={() => navigation.navigate('Apprentice')}>
                        <Text style={styles.evaluateButtonText}>CONCLUIR</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({

    generalRating: {
        marginTop: 90,
        width: '100%',
        alignItems: 'center',
    },

    apprenticeRating: {
        fontSize: 16,
        paddingRight: 2,
    },

    ratingsContainer: {
        marginTop: 120,
        width: '100%',
        alignItems: 'center',
    },

    subjectContainer: {
        marginLeft: 16,
        marginBottom: 24,
        alignItems: 'center',
    },
    subjectName: {
        fontSize: 20,
    },

    subjectRating: {
        marginLeft: 7,
        fontSize: 16,
    },

    evaluateContainer: {
        marginTop: 140,
        justifyContent: 'center',
        alignItems: 'center',
    },
    evaluateButton: {
        backgroundColor: '#196DC9',
        height: 52,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
    },

    evaluateButtonText: {
        color: '#F5F5F5',
        fontSize: 15,
        fontWeight: '500',
    }
})

