import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StarIcon from './icons/StarIcon'
import * as Animatable from 'react-native-animatable'

export default function ApprenticeRating(props) {
    const navigation = useNavigation()

    const calculator = rating => {
        const sum = rating.reduce((accumulator, value) => accumulator + value, 0)
        return sum ? (sum / rating.length).toFixed(1) : '-'
    }

    const [performance] = useState(calculator(props.user.evaluation.performance))
    const [punctuality] = useState(calculator(props.user.evaluation.punctuality))
    const [communication] = useState(calculator(props.user.evaluation.communication))

    return (
        <View>
            <Animatable.View animation={'fadeIn'} delay={150} style={styles.generalRating}>
                <StarIcon iconSize={32} style={styles.starIcon}/>
                <Text style={styles.apprenticeRating}>{props.user.rating}</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInLeft' delay={200} style={styles.ratingsContainer}>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Desempenho</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{performance}</Text>
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Pontualidade</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{punctuality}</Text>
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Comunicação</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{communication}</Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={200} style={styles.evaluateContainer}>
                <TouchableOpacity 
                    style={styles.evaluateButton}
                    onPress={() => navigation.navigate('Evaluation', { apprentice: props.user, replace: true })}>
                        <Text style={styles.evaluateButtonText}>AVALIAR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.evaluateButton}
                    onPress={() => createPdf()}>
                        <Text style={styles.evaluateButtonText}>PDF</Text>
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
        fontWeight: 'bold',
    },

    ratingsContainer: {
        marginTop: 24,
    },

    subjectContainer: {
        marginLeft: 16,
        marginBottom: 24,
    },
    subjectName: {
        fontSize: 20,
    },

    subjectRating: {
        marginLeft: 7,
        fontSize: 16,
        fontWeight: '500'
    },

    evaluateContainer: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    evaluateButton: {
        backgroundColor: '#196DC9',
        height: 52,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
        margin: 10,
    },

    evaluateButtonText: {
        color: '#F5F5F5',
        fontSize: 15,
        fontWeight: '500',
    }
})

