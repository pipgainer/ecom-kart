// Drawer.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Drawer = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: 140,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Icon name="user" size={40} color="#FFFFFF" />
                <Text style={[{ color: "#fff", fontSize: 20, marginTop: 10 }]}>Abhishek Powade</Text>
            </View>
            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => navigation.navigate('Home')}
            >
                <Icon name="home" size={24} color="#FFFFFF" />
                <Text style={styles.drawerItemText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2874F0',
        padding: 20,
    },
    drawerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    drawerHeaderText: {
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 10,
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    drawerItemText: {
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: 10,
    },
});

export default Drawer;
