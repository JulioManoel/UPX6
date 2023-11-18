import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ApprenticeHeader(props) {
    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={styles.apprenticeName}> {props.name} </Text>
            </View>
            <View style={styles.userContainer}>
                {props.image ? (
                    <Image style={styles.profilePicture} src={`https://firebasestorage.googleapis.com/v0/b/ati-upx6.appspot.com/o/images%2F${props.image}?alt=media`} />
                ) : (
                    <Image style={styles.profilePicture} src={`https://api.multiavatar.com/${props.uid}.png`} />
                )}
                <Text style={styles.apprenticeDepartment}> {props.department} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#004DA1',
    },

    apprenticeName: {
        marginTop: 24,
        marginBottom: 14,
        color: '#F5F5F5',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    userContainer: {
        width: '100%',
        backgroundColor: '#196DC9',
    },

    profilePicture: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        bottom: -60,
        borderRadius: 100
    },

    apprenticeDepartment: {
        alignSelf: 'center',
        color: '#202020',
        fontSize: 14,
        fontWeight: '600',
        bottom: -75,
    },
})
