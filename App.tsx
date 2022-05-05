import React from 'react';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, Box } from 'native-base';
import {
    useFonts,
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';

import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
    let [fontsLoaded] = useFonts({
        NunitoSans_200ExtraLight,
        NunitoSans_200ExtraLight_Italic,
        NunitoSans_300Light,
        NunitoSans_300Light_Italic,
        NunitoSans_400Regular,
        NunitoSans_400Regular_Italic,
        NunitoSans_600SemiBold,
        NunitoSans_600SemiBold_Italic,
        NunitoSans_700Bold,
        NunitoSans_700Bold_Italic,
        NunitoSans_800ExtraBold,
        NunitoSans_800ExtraBold_Italic,
        NunitoSans_900Black,
        NunitoSans_900Black_Italic,
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete || !fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NativeBaseProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar animated={true} style="light" />
            </NativeBaseProvider>
        );
    }
}
