import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryContainer from '../components/organisms/CategoryContainer'
import ProductContainer from '../components/organisms/ProductContainer'
import { useNavigation } from '@react-navigation/native';
import ApiService from '../services/ApiService'

const Home = () => {
    const [smartphones, setSmartphones] = useState([]);
    const [fragrances, setFragrances] = useState([]);
    const [laptops, setLaptops] = useState([]);

    const categories = [
        { data: smartphones, heading: 'Smartphones', isWide: false, isLoading: true },
        { data: laptops, heading: 'Laptops', isWide: true, isLoading: true },
        { data: fragrances, heading: 'Fragrances', isWide: false, isLoading: true },
    ];

    const navigation: any = useNavigation();

    const onPressSeeAll = (product: any) => {
        navigation.navigate('Product');
    };


    useEffect(() => {
        const fetchData = async (category: any, setData: any) => {
            try {
                const response: any = await ApiService.fetchData(`/products/category/${category}`,
                    {
                        params: {
                            limit: 10,
                        },
                    }
                );
                setData(response.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData('smartphones', setSmartphones);
        fetchData('fragrances', setFragrances);
        fetchData('laptops', setLaptops);

    }, []);

    return (
        <ScrollView>
            <CategoryContainer />
            {categories.map((category, index) => (
                <ProductContainer
                    key={index}
                    data={category.data}
                    heading={category.heading}
                    isWide={category.isWide}
                    onPressSeeAll={onPressSeeAll}
                />
            ))}
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({

})