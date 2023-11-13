import React from 'react';
import { View } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeRating from '../../components/ApprenticeRating'


export default function Apprentice({ route }) {
    return (
        <View>
            <ApprenticeHeader name={route.params.apprentice.name} department={route.params.apprentice.department} image={route.params.apprentice.image} />
            <ApprenticeRating />
        </View>
    )
}

