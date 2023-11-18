import React, { useState } from 'react';
import { View } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeRating from '../../components/ApprenticeRating'


export default function Apprentice({ route }) {
    const [user, setUser] = useState(route.params.apprentice)

    return (
        <View>
            <ApprenticeHeader uid={user.uid} name={user.name} department={user.department} image={user.image} />
            <ApprenticeRating communication={user.evaluation.communication} performance={user.evaluation.performance} punctuality={user.evaluation.punctuality} rating={user.rating} />
        </View>
    )
}

