import React, { useRef } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    Pressable,
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { View } from '../components/Themed';
import { ProductsDetailScreenProps } from '../navigation/types';
import {
    Box,
    HStack,
    VStack,
    Avatar,
    Flex,
    Text,
    Spacer,
    AspectRatio,
    Center,
    ScrollView,
} from 'native-base';
import { material, systemWeights } from 'react-native-typography';
import ChevronRight from '../icons/chevron_right.svg';
import EmailIcon from '../icons/email.svg';
import { Feather } from '@expo/vector-icons';
import { Button } from 'native-base';

import Carousel, { CarouselProperties } from 'react-native-snap-carousel';
import { IProduct } from '../types';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(100);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default function ProductDetail({ route, navigation }: ProductsDetailScreenProps) {
    const product: IProduct = route.params;

    React.useEffect(() => {
        const parentProps = navigation.getParent();

        navigation.setOptions({
            headerTitle: product.title,
        });
    }, [navigation]);

    const ref = useRef(null);

    return (
        <ScrollView style={styles.container} scrollEventThrottle={500}>
            <Carousel
                ref={ref}
                containerCustomStyle={{ flexGrow: 1, height: 520, flexShrink: 0 }}
                data={product.images}
                renderItem={({ item, index }) => (
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: item }}
                            key={`product-${index}`}
                            style={{
                                flex: 1,
                                height: '100%',
                            }}
                        />
                    </View>
                )}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                loop={true}
                useScrollView={true}
            />
            <Center
                bg="white"
                _text={{
                    color: 'black',
                    fontWeight: '500',
                    fontSize: '10px',
                    lineHeight: 17,
                }}
                position="absolute"
                top="12px"
                left="10px"
                pt="2px"
                pb="3px"
                px="12px">
                {product.category.toUpperCase()}
            </Center>

            <Box pl="4" pr="4" py="2">
                <HStack alignItems="center">
                    <Text
                        color="#ffffff"
                        lineHeight="24px"
                        fontSize="20px"
                        fontFamily="Poppins_700Bold">
                        {product.title}
                    </Text>
                </HStack>
            </Box>
            <Box pl="4" pr="4" py="2">
                <Pressable onPress={() => navigation.navigate('Vendor', product)}>
                    <HStack alignItems="center">
                        <Avatar
                            bg="green.500"
                            size="md"
                            source={{
                                uri: product.vendor.profilePic,
                            }}
                            mr="10px"
                        />

                        <VStack>
                            <Text
                                color="#ffffff"
                                _dark={{
                                    color: 'warmGray.200',
                                }}
                                lineHeight="19px"
                                fontSize="17px"
                                fontFamily="Poppins_500Medium"
                                ellipsizeMode="tail"
                                numberOfLines={1}
                                mb="2px">
                                {product.vendor.title}
                            </Text>
                            <Text
                                color="#999999"
                                lineHeight="17px"
                                fontSize="16px"
                                fontWeight="400"
                                ellipsizeMode="tail"
                                numberOfLines={1}>
                                {product.vendor.location}
                            </Text>
                        </VStack>
                        <Spacer />
                        <ChevronRight width="12px" height="12px" fill="#ffffff66" />
                    </HStack>
                </Pressable>
            </Box>
            <Box pl="4" pr="4" py="2">
                <Text
                    color="#ffffffe6"
                    lineHeight="19px"
                    fontSize="16px"
                    fontWeight="400">
                    {product.description}
                </Text>
            </Box>
            <Box pl="4" pr="4" py="2">
                <HStack alignItems="center" justifyContent="space-between">
                    <VStack>
                        <Text
                            color="#999996"
                            lineHeight="17px"
                            fontSize="17px"
                            fontWeight="400">
                            Email
                        </Text>
                        <Text
                            color="#ffffffe6"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500">
                            {product.vendor.email}
                        </Text>
                    </VStack>
                    <View
                        style={{
                            backgroundColor: '#ffffff1e',
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                        }}>
                        <EmailIcon width={18} height={18} fill="#fff" />
                    </View>
                </HStack>
            </Box>
            <Box pl="4" pr="4" py="2">
                <HStack alignItems="center" justifyContent="space-between">
                    <Text
                        color="#ffffffe6"
                        lineHeight="19px"
                        fontSize="16px"
                        fontWeight="500">
                        Save it!
                    </Text>
                    <View
                        style={{
                            backgroundColor: '#000',
                            width: 40,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                        }}>
                        <Feather name="heart" size={24} color="#e9453a" />
                    </View>
                </HStack>
            </Box>
            <Box pl="4" pr="4" py="2">
                <Text
                    color="#ffffffe6"
                    lineHeight="24px"
                    fontSize="20px"
                    fontWeight="700">
                    {product.price}
                </Text>
            </Box>
            <Box pl="4" pr="4" py="12px" pb="6">
                <Button
                    onPress={() => console.log('hello world')}
                    backgroundColor="#fff"
                    _text={{
                        color: '#000',
                        fontWeight: '500',
                        fontSize: 16,
                    }}
                    borderRadius={10}>
                    Buy
                </Button>
            </Box>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        height: '100%',
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
