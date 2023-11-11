import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable'
import StarIcon from './icons/StarIcon'


// import ProfilePicture from '../assets/profilePicture.png'

const apprentices = [
    {
        id: '001',
        ProfilePicture: require('../assets/profilePicture2.png'),
        name: 'Caio Rodrigues',
        department: 'IT - Information Technology',
        rating:  '4.2'
    },
    {
        id: '002',
        ProfilePicture: require('../assets/profilePicture3.png'),
        name: 'Miguel Ferreira',
        department: 'HR - Human Resources',
        rating:  '3.2'
    },
    {
        id: '003',
        ProfilePicture: require('../assets/profilePicture4.png'),
        name: 'Valéria Ferreira',
        department: 'PD - Product Development',
        rating:  '4.8'
    },
    {
        id: '004',
        ProfilePicture: require('../assets/profilePicture5.png'),
        name: 'Luiza Martins',
        department: 'DM - Data Management',
        rating:  '4.5'
    },
]

export default function ApprenticeList() {
    const navigation = useNavigation();

    return (
        <View style={styles.apprenticeListContainer}>
            <Animatable.View animation='fadeIn' delay={400}>
                <Text style={styles.apprenticeText}>Aprendizes</Text>
            </Animatable.View>
            <Animatable.View animation='fadeInRight' delay={400}>
                <FlatList
                    data={apprentices}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><View>
                                            <TouchableOpacity style={styles.apprenticeCard} onPress={() => navigation.navigate('Apprentice')}>
                                                <View style={styles.apprenticePictureContainer}>
                                                    <Image style={styles.apprenticePicture} source={item.ProfilePicture} />
                                                </View>
                                                <View style={styles.apprenticeInfoContainer}>
                                                    <Text style={styles.apprenticeName}>{item.name}</Text>

                                                    <Text style={styles.apprenticeDepartment}> {item.department}</Text>
                                                </View>
                                                <View style={styles.apprenticeRatingContainer}>
                                                    <View>
                                                        <StarIcon/>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.apprenticeRating}> {item.rating}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>}
                />
        </Animatable.View>
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

    apprenticeCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        padding: 10,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#E6E6E6',
        borderRadius: 20,
    },

    apprenticePicture: {
        width: 50,
        height: 50
,    },

    apprenticeInfoContainer: {
        display: 'flex',
        marginLeft: '3%',
        justifyContent: 'center',
    },

    apprenticeName: {
        fontSize: 14,
        fontWeight: '500'
    },

    apprenticeDepartment: {
        fontWeight: '500'
    },

    apprenticeRatingContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        marginLeft: 'auto'
    },

    apprenticeRating: {
        fontWeight: 'bold',
    },
})

