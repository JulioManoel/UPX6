import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'
// import ProfilePicture from '../assets/profilePicture.png'

const apprentices = [
    {
        id: '001',
        // ProfilePicture: ProfilePicture,
        ProfilePicture: require('../assets/profilePicture.png'),
        name: 'Caio Rodrigues',
        department: 'IT - Information Technology',
        generalRating:  '4.2'
    },
    {
        id: '002',
        name: 'Miguel Ferreira',
        department: 'HR - Human Resources',
        generalRating:  '3.2'
    },
    {
        id: '003',
        name: 'Valéria Nóbrega',
        department: 'PD - Product Development',
        generalRating:  '4.8'
    },
    {
        id: '004',
        name: 'Luiza Martins',
        department: 'DM - Data Management',
        generalRating:  '4.5'
    },
]

export default function ApprenticeList() {
    const navigation = useNavigation();

    return (

        <View style={styles.apprenticeListContainer}>
            <Text style={styles.apprenticeText}>Aprendizes</Text>
        <FlatList
            data={apprentices}
            keyExtractor={item=>item.id}
            renderItem={({item})=><View>
                                    <TouchableOpacity style={styles.itemContainer}>
                                        <Text style={styles.apprenticeName}>{item.name}</Text>
                                        {/* <Text style={styles.apprenticeName}>{item.ProfilePicture}</Text> */}
                                        <Image source={item.ProfilePicture} />
                                        <Text style={styles.apprenticeDepartment}> {item.department}</Text>
                                        <Text style={styles.apprenticeDepartment}> {item.generalRating}</Text>
                                    </TouchableOpacity>
                                </View>}
        />
        </View>
    );
}

const styles = StyleSheet.create({

    apprenticeText: {
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '500',
    },

    apprenticeListContainer: {
        marginTop: '16%',
    },

    itemContainer: {
        margin: 10,
        padding: 10,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#E6E6E6',
        borderRadius: 20,
    },

    apprenticeName: {
        fontSize: 14,
    },
})

