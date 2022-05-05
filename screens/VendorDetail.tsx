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
import BubbleIcon from '../icons/bubble.svg';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Button } from 'native-base';

import Carousel, { CarouselProperties } from 'react-native-snap-carousel';
import { IProduct, IVendor } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import Communications from 'react-native-communications';

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

function formatPhoneNumber(phoneNumberString: any) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return null;
}

export default function VendorDetail({ route, navigation }: ProductsDetailScreenProps) {
    const product: IProduct = route.params;
    const vendor: IVendor = product.vendor;

    const vendorEmail = vendor.email;
    const vendorPhoneStr = vendor.phone.toString().replace(/\D+/g, '');
    const vendorPhoneFormatted = formatPhoneNumber(vendorPhoneStr);

    const ref = useRef(null);

    return (
        <ScrollView style={styles.container} scrollEventThrottle={500}>
            <Image
                source={{ uri: vendor.profilePic }}
                alt={`vendor-image`}
                style={{ flexGrow: 1, height: 300, flexShrink: 0 }}
            />

            <Center
                style={{ width: '100%' }}
                position="absolute"
                top="223px"
                pt="2px"
                pb="3px">
                <LinearGradient
                    // Button Linear Gradient
                    style={{ flex: 1, width: '100%', padding: 16 }}
                    colors={['transparent', 'rgba(0, 0, 0, 2.9)']}>
                    <Text
                        style={{
                            flex: 1,
                            color: 'white',
                            fontWeight: '700',
                            fontSize: 20,
                            lineHeight: 24,
                        }}>
                        {vendor.title}
                    </Text>
                    <Text
                        style={{
                            flex: 1,
                            color: 'white',
                            fontWeight: '600',
                            textShadowRadius: 4,
                            fontSize: 16,
                            lineHeight: 19,
                        }}>
                        {vendor.location}
                    </Text>
                </LinearGradient>
            </Center>

            <Box pl="4" pr="4" py="2">
                <Text
                    color="#ffffffe6"
                    lineHeight="19px"
                    fontSize="16px"
                    fontWeight="400">
                    {vendor.description}
                </Text>
            </Box>
            <Box pl="4" pr="4" py="2">
                <Pressable
                    onPress={() =>
                        Communications.email(
                            [vendorEmail],
                            null,
                            null,
                            'My Subject',
                            'My body text'
                        )
                    }>
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
                                {vendorEmail}
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
                </Pressable>
            </Box>
            <Box pl="4" pr="4" py="2">
                <HStack alignItems="center" justifyContent="space-between">
                    <VStack>
                        <Text
                            color="#999996"
                            lineHeight="17px"
                            fontSize="17px"
                            fontWeight="400">
                            Phone
                        </Text>
                        <Text
                            color="#ffffffe6"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500">
                            {vendorPhoneFormatted}
                        </Text>
                    </VStack>
                    <HStack>
                        <Pressable onPress={() => Communications.text(vendorPhoneStr)}>
                            <View
                                style={{
                                    backgroundColor: '#ffffff1e',
                                    width: 40,
                                    height: 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                }}>
                                <BubbleIcon width={18} height={18} fill="#fff" />
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() =>
                                Communications.phonecall(vendorPhoneStr, false)
                            }>
                            <View
                                style={{
                                    backgroundColor: '#ffffff1e',
                                    width: 40,
                                    height: 40,
                                    marginLeft: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                }}>
                                <FontAwesome name="phone" size={18} color="white" />
                            </View>
                        </Pressable>
                    </HStack>
                </HStack>
            </Box>

            <Box pl="4" pr="4" py="12px" pb="6">
                <Button
                    onPress={() => console.log('hello world')}
                    backgroundColor="#ffffff1e"
                    _text={{
                        color: '#fff',
                        fontWeight: '500',
                        fontSize: 16,
                    }}
                    borderRadius={10}>
                    Ask this seller a question here
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
