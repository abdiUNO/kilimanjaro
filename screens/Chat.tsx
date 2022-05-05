import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Avatar } from 'native-base';
import { auth, db } from '../firebase';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootScreenProps } from '../navigation/types';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
} from 'firebase/firestore';
import { material, systemWeights } from 'react-native-typography';
import emojiUtils from 'emoji-utils';

import SlackMessage from './SlackMessage';

const USERS = {
    KILIMANJARO: {
        _id: 1,
        name: 'Kilimanjaro',
        avatar: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/mpuus3hudgpBOxKpJvSv/pub/NPmm72Faw5616rHodyOd.png',
    },
    MANLY: {
        _id: 2,
        name: 'Manly',
        avatar: 'https://res.cloudinary.com/glide/image/fetch/f_auto,w_900,h_653,c_lfill/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2Fmpuus3hudgpBOxKpJvSv%2Fpub%2F4qxX0cQzybBXwOwoSrKP.jpeg',
    },
};

export default function Chat({ navigation }: RootScreenProps) {
    const [messages, setMessages] = useState([]);

    const currentUser = USERS.MANLY;

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Welcome to the Kilimanjaro Marketplace. This page is a public chat page for users to freely ask questions about different products and services. ',
                createdAt: new Date(),
                user: USERS.KILIMANJARO,
            },
        ]);
    }, []);

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
        const { _id, createdAt, text, user } = messages[0];

        addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
    }, []);

    const renderMessage = (props) => {
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
                showAvatarForEveryMessage={true}
                onSend={(messages) => onSend(messages)}
                user={USERS.MANLY}
                renderMessage={renderMessage}
            />
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
