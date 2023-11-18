import React, { useState } from 'react';
import { View } from 'react-native'
import ApprenticeHeader from '../../components/ApprenticeHeader'
import ApprenticeRating from '../../components/ApprenticeRating'


export default function Apprentice({ route }) {
    const [user] = useState(route.params.apprentice)

    return (
        <View>
            <ApprenticeHeader user={user} />
            <ApprenticeRating user={user} />
        </View>
    )
}

