import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthData, authService } from '../services/authService';
import api from '../services/Api';

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    error?: string;
    updateAuthData: (data: AuthData) => void;
    signIn(userId: string, code: string): Promise<void>;
    signOut(): void;
};

//Create the Auth Context with the data type specified
//and a empty object
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [error, setError] = useState<string>('');

    //the AuthContext start with loading equals true
    //and stay like this, until the data be load from Async Storage
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorage function.
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            //Try get the data from Async Storage
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
                api.setHeader('Authorization', `Bearer ${_authData.jwtToken}`);
            }
        } catch (error) {
        } finally {
            //loading finished
            setLoading(false);
        }
    }

    const updateAuthData = async (data: AuthData) => {
        await AsyncStorage.setItem('@AuthData', JSON.stringify(data));
        await setAuthData(data);
    };

    const signIn = async (id: string, code: string): Promise<any> =>
        //call the service passing credential (email and password).
        //In a real App this data will be provided by the user from some InputText components.
        // const _authData = await authService.signIn('lucasgarcez@email.com', '123456');
        new Promise((resolve, reject) =>
            api
                .post('users/otp-code', { userId: id, code })
                .then((response) => response.data)
                .then((data: any) => {
                    if (data && data.isValid) {
                        const _authData: AuthData = {
                            email: data.user.email,
                            jwtToken: data.user.jwtToken,
                            id: id,
                            name: data.user.name,
                            phone: data.user.phone,
                        };

                        api.setHeader('Authorization', `Bearer ${_authData.jwtToken}`);

                        setAuthData(_authData);

                        //Persist the data in the Async Storage
                        //to be recovered in the next user session.
                        resolve(_authData);

                        AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
                    } else {
                        reject('Invalid code');
                    }
                })
                .catch((error) => reject(error))
        );
    //
    // try {
    //     const response = await api.post('users/otp-code', { userId: id, code });
    //     const data: any = response.data;
    //     //Set the data in the context, so the App can be notified
    //     //and send the user to the AuthStack
    //     const _authData: AuthData = {
    //         email: data.user.email,
    //         jwtToken: data.user.jwtToken,
    //         id: id,
    //     };
    //     setAuthData(_authData);
    //
    //     //Persist the data in the Async Storage
    //     //to be recovered in the next user session.
    //     AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
    // } catch (error) {
    //     console.log(error);
    // }
    const signOut = async () => {
        //Remove data from context, so the App can be notified
        //and send the user to the AuthStack
        setAuthData(undefined);

        //Remove the data from Async Storage
        //to NOT be recoverede in next session.
        await AsyncStorage.removeItem('@AuthData');
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider
            value={{ authData, loading, signIn, signOut, updateAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

//A simple hooks to facilitate the access to the AuthContext
// and permit components to subscribe to AuthContext updates
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthContext, AuthProvider, useAuth };
