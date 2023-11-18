import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StarIcon from './icons/StarIcon'
import * as Animatable from 'react-native-animatable'

const rating = '4.2'

const desempenho = 5
const pontualidade = 5
const comunicacao = 3


export default function ApprenticeRating(props) {
    const navigation = useNavigation()

    return (
        <View>
            <Animatable.View animation={'fadeIn'} delay={150} style={styles.generalRating}>
                <StarIcon iconSize={32} style={styles.starIcon}/>
                <Text style={styles.apprenticeRating}>{rating}</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInLeft' delay={200} style={styles.ratingsContainer}>
                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Desempenho</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{desempenho}</Text>
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Pontualidade</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{pontualidade}</Text>
                </View>

                <View style={styles.subjectContainer}>
                    <Text style={styles.subjectName}>Comunicação</Text>
                    <StarIcon iconSize={24} style={styles.starIcon}/>
                    <Text style={styles.subjectRating}>{comunicacao}</Text>
                </View>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' delay={200} style={styles.evaluateContainer}>
                <TouchableOpacity 
                    style={styles.evaluateButton}
                    onPress={() => navigation.navigate('Evaluation')}>
                        <Text style={styles.evaluateButtonText}>AVALIAR</Text>
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

