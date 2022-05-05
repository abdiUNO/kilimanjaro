/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IProduct } from '../types';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
};

export type ProductStackList = {
    ProductsRoot: undefined;
    ProductsDetail: IProduct;
    Vendor: IProduct;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    Products: NavigatorScreenParams<ProductStackList>;
    Categories: undefined;
    Cart: undefined;
    Chat: undefined;
    Profile: undefined;
};

export type ProductStackScreenProps<Screen extends keyof ProductStackList> =
    CompositeScreenProps<
        NativeStackScreenProps<ProductStackList, Screen>,
        BottomTabScreenProps<RootTabParamList>
    >;

export type ProductsDetailScreenProps = CompositeScreenProps<
    NativeStackScreenProps<ProductStackList, 'ProductsDetail'>,
    BottomTabScreenProps<RootTabParamList>
>;

export type RootScreenProps = CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList>,
    ProductsDetailScreenProps
>;

// export type RootScreenProps = CompositeScreenProps<
//     NativeStackScreenProps<RootStackParamList>,
//     CompositeScreenProps<
//         NativeStackScreenProps<ProductStackList, 'ProductsRoot'>,
//         BottomTabScreenProps<RootTabParamList>
//         >
//     >;
