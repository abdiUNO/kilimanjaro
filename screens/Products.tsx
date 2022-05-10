import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Box, Button, Flex, HStack, Pressable } from 'native-base';

import ProductItem from '../components/ProductItem';
import { RootScreenProps } from '../navigation/types';
import { IVendor, IProduct } from '../types';
import products from '../data/products';
import { useAuth } from '../context/Auth';
export default function Products({ navigation }: RootScreenProps) {
    // useAuth().signOut();
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
            style={{ backgroundColor: '#000000' }}
            contentInsetAdjustmentBehavior="automatic"
            // ListHeaderComponent={Header}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            data={products}
            renderItem={renderItem}
            ListHeaderComponent={
                <Box
                    display={'flex'}
                    flex={1}
                    mx="16px"
                    mb="16px"
                    p="2px"
                    borderStyle="solid"
                    borderColor="#182026"
                    borderRadius="10px"
                    justifyContent="center"
                    alignContent="center"
                    bgColor="#ffffff1f">
                    <Button.Group size="lg">
                        <Button
                            flex={1}
                            flexGrow={1}
                            px={0}
                            py="2px"
                            m={0}
                            borderRadius="9px"
                            bgColor="#000"
                            _text={{
                                fontWeight: '600',
                                fontSize: 16,
                                fontFamily: 'NunitoSans_600SemiBold',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            All
                        </Button>
                        <Button
                            flex={1}
                            flexGrow={1}
                            px={0}
                            py="2px"
                            m={0}
                            color="#ffffffe6"
                            borderRadius="9px"
                            bgColor="transparent"
                            _text={{
                                fontWeight: '600',
                                fontSize: 16,
                                fontFamily: 'NunitoSans_600SemiBold',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffffe6',
                            }}
                            variant="ghost">
                            Favorite
                        </Button>
                    </Button.Group>
                </Box>
            }
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
