import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Box, Pressable } from 'native-base';

import ProductItem from '../components/ProductItem';
import { RootScreenProps } from '../navigation/types';
import { IVendor, IProduct } from '../types';
import products from '../data/products';

export default function Products({ navigation }: RootScreenProps) {
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        const parentProps = navigation.getParent();

        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: 'Search',
                hideWhenScrolling: false,
                onChangeText: (event: any) => setSearch(event.nativeEvent.text),
            },
        });
    }, [navigation]);

    const renderItem = (params: any) => {
        const item: IProduct = params.item;
        const index: number = params.index;
        const isEven = index % 2 === 0;

        return (
            <Box
                w="1/2"
                pl={isEven ? '16px' : '8px'}
                pr={!isEven ? '16px' : '8px'}
                pb="3">
                <Pressable onPress={() => navigation.navigate('ProductsDetail', item)}>
                    <ProductItem {...item} />
                </Pressable>
            </Box>
        );
    };

    return (
        <FlatList
            style={{ backgroundColor: '#000000', flex: 1 }}
            contentInsetAdjustmentBehavior="automatic"
            // ListHeaderComponent={Header}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            data={products}
            renderItem={renderItem}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
