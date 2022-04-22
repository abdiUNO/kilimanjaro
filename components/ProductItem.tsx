import React from 'react';
import {
    AspectRatio,
    Avatar,
    Box,
    Center,
    Flex,
    HStack,
    Image,
    Stack,
} from 'native-base';
import { Text as NativeBaseText } from 'native-base';
import { IProduct } from '../types';
// import FastImage from 'react-native-fast-image';

export default function ProductItem({
    id,
    title,
    description,
    category,
    images,
    vendor,
    price,
}: IProduct) {
    return (
        <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            backgroundColor="#333333">
            <Box>
                <AspectRatio w="100%" ratio={1.5}>
                    <Image
                        source={{ uri: images[0] }}
                        alt={`product-img-${id}`}
                        key={`product-${id}`}
                    />
                </AspectRatio>
                <Center
                    bg="white"
                    _text={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: '10px',
                        lineHeight: 17,
                    }}
                    borderRadius="xl"
                    position="absolute"
                    top="12px"
                    left="10px"
                    pt="2px"
                    pb="3px"
                    px="12px">
                    {category.toUpperCase()}
                </Center>
            </Box>
            <Stack p="2" space={3}>
                <Stack space={0}>
                    <Box p={0} mb="5px">
                        <NativeBaseText
                            color="white"
                            fontSize="xs"
                            fontWeight="600"
                            lineHeight="17px"
                            numberOfLines={1}
                            mb="4px">
                            {title.toUpperCase()}
                        </NativeBaseText>
                        <NativeBaseText
                            fontSize="18px"
                            color="#ffffffe6"
                            fontWeight="400"
                            ellipsizeMode="tail"
                            lineHeight="19px"
                            numberOfLines={1}>
                            {description}
                        </NativeBaseText>
                    </Box>
                    <NativeBaseText
                        color="#999999"
                        _dark={{
                            color: 'warmGray.200',
                        }}
                        lineHeight="17px"
                        fontSize="14px"
                        fontWeight="400">
                        {category}
                    </NativeBaseText>
                </Stack>
                <HStack alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center" flexDirection="row" flex={3 / 4} mr="28px">
                        <Avatar
                            bg="green.500"
                            size="sm"
                            source={{
                                uri: vendor.profilePic,
                            }}
                            mr="7px">
                            AJ
                        </Avatar>
                        <NativeBaseText
                            color="#ffffff"
                            _dark={{
                                color: 'warmGray.200',
                            }}
                            lineHeight="17px"
                            fontSize="14px"
                            fontWeight="400"
                            ellipsizeMode="tail"
                            numberOfLines={1}>
                            {vendor.title}
                        </NativeBaseText>
                    </Flex>
                    <NativeBaseText
                        color="#ffffff"
                        _dark={{
                            color: 'warmGray.200',
                        }}
                        lineHeight="17px"
                        fontSize="14px"
                        fontWeight="400"
                        ellipsizeMode="tail"
                        numberOfLines={1}>
                        {price}
                    </NativeBaseText>
                </HStack>
            </Stack>
        </Box>
    );
}
