import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const ProductList = ({ products }: any) => {
    const renderItem = ({ item }: any) => (
        <View style={styles.productContainer}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.productDetails}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    thumbnail: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000"
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
});

export default ProductList;
