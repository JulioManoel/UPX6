import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeEvaluation from '../../components/ApprenticeEvaluation'
import * as Animatable from 'react-native-animatable'


export default function Evaluation({ route }) {
    const [user] = useState(route.params.apprentice)

    return (
        <View>
            <ApprenticeHeader user={user} />
            <Animatable.View animation={'fadeInUp'}>
                <ApprenticeEvaluation user={user} />
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({



})

