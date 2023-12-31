import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import { StatusBar } from 'expo-status-bar';


export default function EvaluationSlider(props) {
    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={5}
                minimumTrackTintColor='#196DC9'
                maximumTrackTintColor='#F5F5F5'
                thumbTintColor='#196DC9'
                value={props.value}
                step={1}
                onValueChange={value => props.set(parseInt(value))}
            />
            <View style={styles.sliderValues}>
                <Text style={styles.biggerNum}>1</Text>
                <Text style={styles.smallerNum}>2</Text>
                <Text style={styles.smallerNum}>3</Text>
                <Text style={styles.smallerNum}>4</Text>
                <Text style={styles.biggerNum}>5</Text>

            </View>
            <StatusBar style='auto'/>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },

    slider: {
        width: 300,
        marginTop: 10,
    },

    sliderValues: {
        width: 280,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    smallerNum: {
        fontSize: 14,
        color: '#909090',
        fontWeight: 'bold',
        marginBottom: 6
    },

    biggerNum: {
        fontSize: 18,
        color: '#404040',
        fontWeight: '500'
    },
})

