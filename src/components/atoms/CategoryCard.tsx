import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface CardProps {
    iconName: string;
    text: string;
}

const CategoryCard: React.FC<CardProps> = ({ iconName, text }) => {
    return (
        <View style={styles.card}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={25} color="#2874F0" />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        width: 60,
        alignItems: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginTop: 10, // Adjust the margin to separate the icon and text
    },
    text: {
        fontSize: 12,
        color: '#000000',
    },
});

export default CategoryCard;
