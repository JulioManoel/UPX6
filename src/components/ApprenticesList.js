import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native'
import * as Animatable from 'react-native-animatable'
import StarIcon from './icons/StarIcon'
import PlusIcon from './icons/PlusIcon';
import { store } from '../store';

export default function ApprenticeList() {
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [apprentices, setApprentices] = useState([])
    
    useEffect(() => {
        const get = async () => {
            setLoading(true)

            await store.manager.get(store.user.state.currentUser.uid)
            setApprentices(store.manager.state.manager.apprenticesObj)

            setLoading(false)
        }

        get()
    }, [])

    return (
        <View style={styles.apprenticeListContainer}>
            {loading ? (
                <ActivityIndicator size='large' color='004DA1' />
            ) : (
                <>
                    <Animatable.View animation='fadeIn' delay={400}>
                        <Text style={styles.apprenticeText}>Aprendizes</Text>
                    </Animatable.View>

                    <Animatable.View animation='fadeInRight' delay={400}>
                        <TouchableOpacity onPress={() => navigation.navigate('ApprenticeRegister', { replace: true })} style={styles.newApprentice}>
                            <PlusIcon iconSize={20}/>
                            <Text style={styles.newApprenticeText}>Cadastrar novo aprendiz</Text>
                        </TouchableOpacity>
                        
                        <FlatList
                            data={apprentices}
                            keyExtractor={item => item.uid}
                            renderItem={({ item }) => <View>
                                <TouchableOpacity style={styles.apprenticeCard} onPress={() => navigation.navigate('Apprentice', { apprentice: item, replace: true })}>
                                    <View style={styles.apprenticePictureContainer}>
                                        { item.image ? (
                                            <Image style={styles.apprenticePicture} src={`https://firebasestorage.googleapis.com/v0/b/ati-upx6.appspot.com/o/images%2F${item.image}?alt=media`} />
                                        ) : (
                                            <Image style={styles.apprenticePicture} src={`https://api.multiavatar.com/${item.uid}.png`} />
                                        )}
                                    </View>
                                    <View style={styles.apprenticeInfoContainer}>
                                        <Text style={styles.apprenticeName}>{item.name}</Text>

                                        <Text style={styles.apprenticeDepartment}> {item.department}</Text>
                                    </View>
                                    <View style={styles.apprenticeRatingContainer}>
                                        <View>
                                            <StarIcon />
                                        </View>
                                        <View>
                                            <Text style={styles.apprenticeRating}> {item.rating}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>} />
                    </Animatable.View>
                </>
            )}
        </View>
    )
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
    
    newApprentice: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
    },

    newApprenticeText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '500'
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
        height: 50,
        borderRadius: 100,
    },

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

