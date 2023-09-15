import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ProductCard = ({ title, description, imageUrl, isWide }: any) => {
    const cardStyles = isWide ? styles.wideCard : styles.squareCard;

    return (
        <View style={[styles.card, cardStyles]}>
            <Image source={{ uri: imageUrl }} style={[styles.image, isWide && styles.containImage]} />
            <View  style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginHorizontal: 4,
        backgroundColor: "#fff"
    },
    squareCard: {
        width: windowWidth / 3,
    },
    wideCard: {
        width: windowWidth / 1.5,
    },
    image: {
        width: '100%',
        height: windowHeight / 5,
        borderRadius: 10
    },
    containImage: {
        objectFit: 'contain',
    },
    textContainer: {
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 16,
        color: 'gray',
    },
});

export default ProductCard;
