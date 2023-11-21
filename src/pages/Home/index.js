import React from 'react';
import { View, StyleSheet } from 'react-native'
import ApprenticeList from '../../components/ApprenticesList';
import ManagerHeader from '../../components/ManagerHeader'

export default function Home() {
    return (
        <View style={styles.container}>
            <ManagerHeader style={styles.managerHeader}/>
            <ApprenticeList style={styles.apprenticeList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },

    managerHeader: {
        flex: 1,
    },

    apprenticeList: {
        flex: 2,
    },
    
})
