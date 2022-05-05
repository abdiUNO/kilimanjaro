import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Dimensions } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Products from '../screens/Products';
import ProductDetail from '../screens/ProductDetail';
import Categories from '../screens/Categories';
import Cart from '../screens/Cart';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import VendorDetail from '../screens/VendorDetail';
import Vendors from '../screens/Vendors';
import ProductsIcon from '../icons/products.svg';
import CategoriesIcon from '../icons/categories.svg';
import CartIcon from '../icons/cart.svg';
import ChatIcon from '../icons/chat.svg';
import ProfileIcon from '../icons/profile.svg';

import {
    RootStackParamList,
    ProductStackList,
    RootTabParamList,
    RootScreenProps,
    ProductStackScreenProps,
} from './types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function getCurrentRouteName(navigationState: any): any {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

function getHeaderTitle(route: any) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Products';

    switch (routeName) {
        case 'Products':
            return 'Products';
        case 'Categories':
            return 'Categories';
        case 'Cart':
            return 'Cart';
        case 'Chat':
            return 'Chat';
        case 'Profile':
            return 'Profile';
    }
}

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen
                name="Root"
                options={({ route }) => {
                    if (getHeaderTitle(route) != 'Products')
                        return {
                            headerShown: true,
                            headerLargeTitle: true,
                            headerTintColor: '#ffffff',
                            headerLargeTitleShadowVisible: false,
                            headerShadowVisible: false,
                            headerLargeStyle: {
                                backgroundColor: '#000000',
                            },
                            headerLargeTitleStyle: {
                                fontSize: 34,
                                fontWeight: '800',
                            },
                            headerStyle: {
                                backgroundColor: '#000000',
                                borderBottomColor: '#000000',
                            },
                            headerTitle: getHeaderTitle(route),
                            animation: 'none',
                        };
                    else return { headerShown: false };
                }}
                component={BottomTabNavigator}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

const ProductsStack = createNativeStackNavigator<ProductStackList>();

function ProductsNavigator() {
    return (
        <ProductsStack.Navigator>
            <ProductsStack.Screen
                name="ProductsRoot"
                options={({ route }) => ({
                    headerLargeTitle: true,
                    headerTintColor: '#ffffff',
                    headerLargeTitleShadowVisible: false,
                    headerShadowVisible: false,
                    headerLargeStyle: {
                        backgroundColor: '#000000',
                    },
                    headerLargeTitleStyle: {
                        fontSize: 34,
                        fontWeight: '800',
                    },
                    headerStyle: {
                        backgroundColor: '#000000',
                        borderBottomColor: '#000000',
                    },
                    headerTitle: getHeaderTitle(route),
                })}
                component={Products}
            />
            <ProductsStack.Screen
                name="ProductsDetail"
                options={({ route }) => ({
                    headerLargeTitle: false,
                    headerTintColor: '#ffffff',
                    headerLargeTitleShadowVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#000000',
                        borderBottomColor: '#000000',
                    },
                })}
                component={ProductDetail}
            />
            <ProductsStack.Screen
                name="Vendor"
                options={({ route }) => ({
                    headerLargeTitle: false,
                    headerTintColor: '#ffffff',
                    headerLargeTitleShadowVisible: false,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: '#000000',
                        borderBottomColor: '#000000',
                    },
                })}
                component={VendorDetail}
            />
        </ProductsStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Products"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#999999',
                tabBarStyle: {
                    backgroundColor: 'rgba(0,0,0,0.98)',
                    borderTopColor: '#000000',
                },
            }}>
            <BottomTab.Screen
                name="Products"
                component={ProductsNavigator}
                options={({ navigation }) => ({
                    title: 'Products',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5
                            name="eye"
                            color={color}
                            size={25}
                            style={{ marginBottom: -3 }}
                        />
                    ),
                })}
            />
            <BottomTab.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categories',

                    tabBarIcon: ({ color }) => (
                        <CategoriesIcon width={24} height={24} fill={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Cart"
                component={Cart}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <CartIcon width={24} height={24} fill={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Chat"
                component={Chat}
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => (
                        <ChatIcon width={24} height={24} fill={color} />
                    ),
                }}
            />

            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <ProfileIcon width={24} height={24} fill={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => {
//     return (
//         <Drawer.Navigator>
//             <Drawer.Screen name="Home" component={BottomTabNavigator} />
//             <Drawer.Screen name="Vendors" component={Vendors} />
//         </Drawer.Navigator>
//     );
// };
