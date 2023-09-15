import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import an arrow icon from the icon library of your choice

const ProductContainerHeading = ({ heading, onPress }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <TouchableOpacity onPress={e => onPress(heading)} style={styles.button}>
                <Text style={styles.buttonText}>See All</Text>
                <Icon name="arrow-right" size={20} color="#2874F0" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#2874F0"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: "#000",
        marginRight: 4,
    },
});

export default ProductContainerHeading;
