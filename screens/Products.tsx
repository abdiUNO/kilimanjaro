import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Box } from 'native-base';

import ProductItem from '../components/ProductItem';
import { RootTabScreenProps } from '../navigation/types';
import { IVendor, IProduct } from '../types';
import products from '../data/products';

const renderItem = ({ item }: { item: IProduct }) => (
    <Box w="1/2" p="2">
        <ProductItem {...item} />
    </Box>
);

export default function Products({ navigation }: RootTabScreenProps<'Products'>) {
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
