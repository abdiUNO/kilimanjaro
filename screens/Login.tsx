import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
} from 'react-native';
import * as Linking from 'expo-linking';

import { Text, View } from '../components/Themed';
import { RootScreenProps } from '../navigation/types';
import {
    Box,
    Center,
    Flex,
    VStack,
    Text as NativeBaseText,
    Input,
    Pressable,
    HStack,
    Checkbox,
    Button,
    FormControl,
    WarningOutlineIcon,
} from 'native-base';
import api from '../services/Api';
import { useAuth } from '../context/Auth';

const LoginScreen = ({
    email,
    setEmail,
    onSubmit,
    onCheckboxChange,
    isSelected,
    emailValid,
}: any) => {
    const openPrivacyURL = async () => {
        await Linking.openURL('https://www.kilimanjaro.com/privacy-policy');
    };

    return (
        <Flex flex={1}>
            <Flex flexDirection="column" flex={1} flexGrow={1} justifyContent="center">
                <NativeBaseText
                    fontSize="36px"
                    color="white"
                    lineHeight="43px"
                    fontWeight={900}
                    mb="12px"
                    textAlign="center">
                    The kilimanjaro marketplace
                </NativeBaseText>
                <NativeBaseText
                    fontSize="17px"
                    color="white"
                    lineHeight="20px"
                    mb="24px"
                    textAlign="center">
                    Things from and for the African Diaspora Community
                </NativeBaseText>
                <Input
                    size="xl"
                    placeholder="Email address"
                    borderStyle="solid"
                    borderColor="white"
                    color="white"
                    style={{ color: 'white' }}
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    _focus={{ borderColor: 'grey' }}
                    borderWidth="2px"
                    borderRadius="6px"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    px="12px"
                    py="13px"
                />
                <Flex>
                    <Flex mt="12px" mb="20px" ml="16px">
                        <Pressable
                            hitSlop={{ top: 10, bottom: 10, left: 14, right: 14 }}
                            onPress={openPrivacyURL}>
                            <NativeBaseText
                                color="white"
                                textDecorationLine="underline"
                                fontWeight="500"
                                fontSize="14px">
                                Terms and conditions
                            </NativeBaseText>
                        </Pressable>
                    </Flex>

                    <Flex mb="20px" ml="16px">
                        <HStack space={6}>
                            <Checkbox
                                shadow={2}
                                value="test"
                                bgColor="transparent"
                                borderColor="white"
                                borderRadius="4px"
                                onChange={onCheckboxChange}
                                p="1px"
                                _text={{
                                    color: 'white',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                }}
                                _unchecked={{
                                    backgroundColor: 'transparent',
                                    borderColor: 'white',
                                    borderRadius: 0,
                                    _pressed: {
                                        borderColor: 'transparent',
                                        borderRadius: 0,
                                    },
                                }}
                                _pressed={{
                                    borderColor: 'transparent',
                                    borderRadius: 0,
                                }}
                                _checked={{
                                    borderColor: 'transparent',
                                    borderRadius: 0,
                                    _pressed: {
                                        borderColor: 'transparent',
                                        borderRadius: 0,
                                    },
                                }}>
                                I accept the terms & conditions
                            </Checkbox>
                        </HStack>
                    </Flex>
                </Flex>
            </Flex>

            <Box my="12px" pb="5">
                <Button
                    isDisabled={!emailValid || !isSelected}
                    onPress={onSubmit}
                    backgroundColor="#fff"
                    _text={{
                        color: '#000',
                        fontWeight: '500',
                        fontSize: 17,
                    }}
                    borderRadius={10}>
                    Continue
                </Button>
            </Box>
        </Flex>
    );
};

const CodeScreen = ({ code, email, setCode, onSubmit, error }: any) => {
    return (
        <Flex flex={1}>
            <Flex flexDirection="column" flex={1} flexGrow={1} justifyContent="center">
                <NativeBaseText
                    fontSize="17px"
                    color="white"
                    lineHeight="20px"
                    mb="12px"
                    textAlign="center">{`We've sent a pin to ${email}`}</NativeBaseText>
                <NativeBaseText
                    fontSize="17px"
                    color="white"
                    lineHeight="20px"
                    mb="24px"
                    textAlign="center">
                    Check your spam folder if you don't receive it.
                </NativeBaseText>
                <Box alignItems="center">
                    <FormControl isInvalid={error && error.length > 0}>
                        <Input
                            size="xl"
                            placeholder="Enter Pin"
                            borderStyle="solid"
                            borderColor="white"
                            color="white"
                            style={{ color: 'white' }}
                            placeholderTextColor="white"
                            autoCapitalize="none"
                            _focus={{ borderColor: 'grey' }}
                            borderWidth="2px"
                            borderRadius="6px"
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            value={code}
                            onChangeText={(text) => text.length <= 6 && setCode(text)}
                            px="12px"
                            py="13px"
                        />
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}>
                            Invalid Code
                        </FormControl.ErrorMessage>
                    </FormControl>
                </Box>
            </Flex>
            <Box my="12px" pb="5">
                <Button
                    isDisabled={code.length < 5}
                    onPress={onSubmit}
                    backgroundColor="#fff"
                    _text={{
                        color: '#000',
                        fontWeight: '500',
                        fontSize: 17,
                    }}
                    borderRadius={10}>
                    Sign In
                </Button>
            </Box>
        </Flex>
    );
};

export default function Login({ navigation }: RootScreenProps) {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [password, setPassword] = useState('');

    const [isFetching, setFetching] = useState(false);
    const [authError, setAuthError] = useState('');
    const [codeError, setCodeError] = useState('');
    const [userId, setUserId] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    const auth = useAuth();
    const validateEmail = (email: string) => {
        let re =
            /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return re.test(email);
    };

    const onHandleLogin = () => {
        if (email !== '') {
        }
    };

    useEffect(() => {
        if (
            auth.authData?.jwtToken &&
            (!auth.authData?.name || auth.authData?.name.length < 1)
        ) {
            navigation.navigate('SignUp');
        }
    }, [navigation, auth]);

    const signIn = async () => {
        //make request to baseURL + 'iced'
        setFetching(true);
        const response = await api.post('users/login', { email });
        if (response.ok) {
            setEmailSubmitted(true);
            setUserId(response.data.user.id);
            setFetching(false);
        } else {
            setFetching(false);

            setAuthError('Something went wrong');
        }
    };

    const valideCode = () => {
        setFetching(true);
        auth.signIn(userId, code)
            .then((data) => {
                setFetching(false);
            })
            .catch((err) => {
                setFetching(false);
                setCodeError('Something went wrong');
            });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <Flex flexShrink={0} justifyContent="center" alignItems="center">
                <NativeBaseText
                    textAlign="center"
                    color="white"
                    fontSize="16px"
                    fontWeight="700">
                    Kilimanjaro
                </NativeBaseText>
            </Flex>
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
                    {!emailSubmitted ? (
                        <LoginScreen
                            email={email}
                            onSubmit={signIn}
                            emailValid={emailValid}
                            onCheckboxChange={(val: boolean) => {
                                setIsSelected(val);
                            }}
                            isSelected={isSelected}
                            setEmail={(text: any) => {
                                setEmail(text);
                                const isEmailValid = validateEmail(text);
                                if (emailValid !== isEmailValid)
                                    setEmailValid(isEmailValid);
                            }}
                        />
                    ) : (
                        <CodeScreen
                            code={code}
                            email={email}
                            setCode={setCode}
                            onSubmit={valideCode}
                            error={codeError}
                        />
                    )}
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
        paddingHorizontal: 30,
    },
    formWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#444',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
    },
});
