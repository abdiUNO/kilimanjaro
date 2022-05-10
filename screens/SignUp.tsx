import React, { useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { material, systemWeights } from 'react-native-typography';
import {
    Box,
    Button,
    Flex,
    FormControl,
    Input,
    KeyboardAvoidingView,
    Text as NativeBaseText,
    WarningOutlineIcon,
} from 'native-base';
import { useAuth } from '../context/Auth';
import api from '../services/Api';
import { AuthData } from '../services/authService';

export default function SignUp({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const { authData, updateAuthData } = useAuth();
    const [isFetching, setFetching] = useState(false);

    const updateData = async () => {
        setFetching(true);
        const response = await api.patch(`users/${authData.id}`, {
            name,
            phone,
            email: authData?.email,
        });

        const { id, email, jwtToken } = response.data.user;

        const _authData: AuthData = {
            id,
            email,
            name,
            phone,
            jwtToken,
        };

        await updateAuthData(_authData);
        setFetching(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            {isFetching ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000',
                    }}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (
                <>
                    <NativeBaseText
                        color="white"
                        fontSize="20px"
                        fontWeight="700"
                        fontFamily="Poppins_700Bold"
                        py="8px">
                        We need a few pieces of information from you.
                    </NativeBaseText>
                    <Flex flex={1} flexDirection="column" justifyContent="space-between">
                        <Box flexDirection="column" justifyContent="center">
                            <FormControl py="8px">
                                <FormControl.Label>Your name</FormControl.Label>
                                <Input
                                    size="xl"
                                    bgColor="#ffffff24"
                                    borderStyle="solid"
                                    color="white"
                                    style={{ color: 'white' }}
                                    placeholderTextColor="white"
                                    autoCapitalize="none"
                                    borderWidth="0px"
                                    borderRadius="10px"
                                    textContentType="name"
                                    value={name}
                                    onChangeText={setName}
                                    px="12px"
                                    py="12px"
                                />
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Invalid Code
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl py="8px">
                                <FormControl.Label>Your phone number</FormControl.Label>
                                <Input
                                    size="xl"
                                    bgColor="#ffffff24"
                                    borderStyle="solid"
                                    color="white"
                                    style={{ color: 'white' }}
                                    placeholderTextColor="white"
                                    autoCapitalize="none"
                                    borderWidth="0px"
                                    borderRadius="10px"
                                    textContentType="telephoneNumber"
                                    maxLength={10}
                                    keyboardType="phone-pad"
                                    value={phone}
                                    onChangeText={setPhone}
                                    px="12px"
                                    py="12px"
                                />
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size="xs" />}>
                                    Invalid Code
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </Box>

                        <Box my="12px" pb="5">
                            <Button
                                backgroundColor="#ffffff1e"
                                onPress={updateData}
                                _text={{
                                    fontWeight: '500',
                                    fontSize: 17,
                                }}
                                my="6px"
                                borderRadius={10}>
                                Continue
                            </Button>
                        </Box>
                    </Flex>
                </>
            )}
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 16,
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
