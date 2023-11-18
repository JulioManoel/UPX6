import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import EvaluationSlider from './EvaluationSlider'
import { store } from '../store'


export default function ApprenticeEvaluation(props) {
    const navigation = useNavigation()

    const [apprentice] = useState(props.user)
    const [performance, setPerformance] = useState(3)
    const [punctuality, setPunctuality] = useState(3)
    const [communication, setComunication] = useState(3)
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        setLoading(true)

        apprentice.evaluation.performance.push(performance)
        apprentice.evaluation.punctuality.push(punctuality)
        apprentice.evaluation.communication.push(communication)
        await store.manager.update(apprentice)
        navigation.navigate('Home', { replace: true })

        setLoading(false)
    }

    return (
        <View>
            <View animation='fadeInLeft' delay={200} style={styles.ratingsContainer}>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Desempenho</Text>
                    <EvaluationSlider value={performance} set={setPerformance} />
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Pontualidade</Text>
                    <EvaluationSlider value={punctuality} set={setPunctuality} />
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Comunicação</Text>
                    <EvaluationSlider value={communication} set={setComunication} />
                </View>
            </View>

            <Animatable.View animation='fadeInUp' delay={200} style={styles.evaluateContainer}>
                <TouchableOpacity style={styles.evaluateButton} onPress={() => onSubmit()}>
                    { loading ? (
                        <ActivityIndicator size='large' color='#ffffff' />
                    ) : (
                        <Text style={styles.evaluateButtonText}>CONCLUIR</Text>
                    )}    
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

