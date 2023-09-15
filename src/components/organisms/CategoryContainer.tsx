import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from '../atoms/CategoryCard';

interface CategoryCardData {
    iconName: string;
    text: string;
}

const data: CategoryCardData[] = [
    { iconName: 'list', text: 'Categories' },
    { iconName: 'mobile', text: 'Phone' },
    { iconName: 'laptop', text: 'Laptop' },
    { iconName: 'tshirt', text: 'Shirt' },
    { iconName: 'book', text: 'Books' },
    { iconName: 'air-freshener', text: 'Scent' },
    { iconName: 'shoe-prints', text: 'Shoes' },
];

const CategoryContainer: React.FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card iconName={item.iconName} text={item.text} />
                )}
                horizontal={true} // Set FlatList to horizontal scroll
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        height: 75
    },
});

export default CategoryContainer;
