import { createContext, useState } from 'react';

export type IAuthContext = {
    user: any;
    setUser: (user: any) => void;
};

const AuthenticatedUserContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {},
});

const AuthenticatedUserProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    return (
        <AuthenticatedUserContext.Provider value={{ user, setUser }}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

export { AuthenticatedUserProvider as default, AuthenticatedUserContext };
