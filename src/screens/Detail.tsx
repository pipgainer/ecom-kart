import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const DetailScreen = ({ route }: any) => {
    const { product } = route.params;

    return (
        <ScrollView>
            <Image
                source={{ uri: product.thumbnail }}
                style={{ width: '100%', height: 200 }}
            />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: "#000" }}>{product.title}</Text>
                <Text style={{ fontSize: 18, color: 'gray' }}>{product.brand}</Text>
                <Text style={{ fontSize: 16, color: "#000" }}>{product.description}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 16, color: "#000" }}>
                    Price: ${product.price}
                </Text>
                <Text style={{ fontSize: 16, color: "#000" }}>
                    Discount: {product.discountPercentage}%
                </Text>
                <Text style={{ fontSize: 16, color: "#000" }}>
                    Rating: {product.rating}
                </Text>
                <Text style={{ fontSize: 16, color: "#000" }}>
                    Stock: {product.stock}
                </Text>
            </View>
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000" }}>Images</Text>
                {product.images.map((image: any, index: any) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={{ width: '100%', height: 200, marginTop: 8 }}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default DetailScreen;
