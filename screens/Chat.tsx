import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Avatar, Fab, Flex, Icon } from 'native-base';
import { db } from '../services/firebase';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootScreenProps } from '../navigation/types';
import { Bubble, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
} from 'firebase/firestore';
import { material, systemWeights } from 'react-native-typography';
// @ts-ignore

import Modal from 'react-native-modal';

import emojiUtils from 'emoji-utils';

import SlackMessage from './SlackMessage';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../context/Auth';

export type IMessage = {
    _id: number;
    text: string;
    createdAt: Date;
    user: { _id: number; name: string; avatar: string };
};

export const renderInputToolbar = (props: any) => (
    <InputToolbar
        {...props}
        containerStyle={{
            backgroundColor: '#000',
            paddingTop: 8,
            borderTopColor: '#4d4d4d',
            color: '#fff',
        }}
        primaryStyle={{ alignItems: 'center', color: '#fff' }}
    />
);

export default function Chat({ navigation }: RootScreenProps) {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [modalVisible, setModalVisible] = useState(true);

    const { authData } = useAuth();

    useLayoutEffect(() => {
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) =>
            setMessages(
                snapshot.docs.map((doc) => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user,
                }))
            )
        );

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        const { _id, createdAt, text, user } = messages[0];

        addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
    }, []);

    const renderMessage = (props: any) => {
        const {
            currentMessage: { text: currText },
        } = props;

        let messageTextStyle;

        // Make "pure emoji" messages much bigger than plain text.
        if (currText && emojiUtils.isPureEmojiString(currText)) {
            messageTextStyle = {
                fontSize: 28,
                // Emoji get clipped if lineHeight isn't increased; make it consistent across platforms.
                lineHeight: Platform.OS === 'android' ? 34 : 30,
            };
        }

        return <SlackMessage {...props} messageTextStyle={messageTextStyle} />;
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{ id: authData.id, name: authData.name }}
                renderMessage={renderMessage}
                renderInputToolbar={renderInputToolbar}
                textInputProps={{ color: '#fff' }}
                messagesContainerStyle={{ paddingBottom: 10 }}
            />
            {/*<Modal*/}
            {/*    isVisible={modalVisible}*/}
            {/*    hasBackdrop={true}*/}
            {/*    backdropColor="#000"*/}
            {/*    style={{ margin: 0, padding: 0 }}*/}
            {/*    onRequestClose={() => {*/}
            {/*        // Alert.alert('Modal has been closed.');*/}
            {/*        setModalVisible(!modalVisible);*/}
            {/*    }}>*/}
            {/*    <Flex bgColor="#000" flex={1}>*/}
            {/*        <Text style={{ color: '#fff' }}>Test</Text>*/}
            {/*    </Flex>*/}
            {/*</Modal>*/}
            {/*<Fab*/}
            {/*    renderInPortal={false}*/}
            {/*    shadow={2}*/}
            {/*    size="sm"*/}
            {/*    onPress={() => setModalVisible(true)}*/}
            {/*    icon={<Icon color="white" as={AntDesign} name="plus" size="sm" />}*/}
            {/*/>*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
