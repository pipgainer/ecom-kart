import { StyleSheet, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Card from '../atoms/ProductCard';
import ProductContainerHeader from '../molecules/ProductContainerHeader'
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook


const HorizantalList = ({ isWide, data, isDataLoading, heading, onPressSeeAll }: any) => {
    const navigation: any = useNavigation(); // Initialize the navigation hook

    const handleProductPress = (product: any) => {
        navigation.navigate('Details', { product });
    };

    return (
        <>
            <ProductContainerHeader heading={heading} onPress={onPressSeeAll} />
            {data.length === 0 && <ActivityIndicator size="large" style={styles.loaderContainer} />}
            <FlatList
                style={{ paddingHorizontal: 12 }}
                horizontal={true}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductPress(item)}>
                        <Card
                            title={item.title}
                            description={item.description}
                            imageUrl={item.thumbnail}
                            isWide={isWide}
                        />
                    </TouchableOpacity>

                )}
                keyExtractor={item => item.title}
            />
        </>

    );
};

export default HorizantalList;

const styles = StyleSheet.create({
    loaderContainer: {
        padding: 80
    }
});
