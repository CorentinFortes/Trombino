import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import { FIRESTORE_DB } from '../../../firebaseConfig';
import { EmployeeDetail, GetEmployeeImage, getMe } from '../../api/api';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { MessageType } from '../../types/chat';
import {
  Avatar,
  AvatarContainer,
  InputContainer,
  InputMessage,
  Message,
  MessageContainer,
  MessageContent,
  MessagesContainer,
  MessagesContent,
  PageContainer,
  ScrollMessages,
  SendButton,
  TitleText,
  TopContent,
} from './ChatPage.style';
import { formatTimestampToTime } from '../../utils/time';

type ChatProps = StackScreenProps<RootStackParamList, 'Chat'>;

export const ChatPage: React.FC<ChatProps> = ({ route, navigation }) => {
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState<EmployeeDetail>();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
  const { token, targetEmployee, fromChat } = route.params;
  const receiverId = targetEmployee.id;
  React.useEffect(() => {
    if (token) {
      getMe(token).then((me) => {
        if (me !== undefined) {
          me.surname = me.surname.toUpperCase();
          setProfile(me);
          getMessages(me).then(() => {
            setLoadingMessages(false);
          });
        }
      });
    }
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [token]);
  const getMessages = async (profile: EmployeeDetail) => {
    const q = query(
      collection(FIRESTORE_DB, 'messages'),
      where('senderId', 'in', [profile.id, receiverId]),
      where('receiverId', 'in', [profile.id, receiverId]),
    );
    const snapshot = await getDocs(q);
    const tmpMessages: MessageType[] = [];
    snapshot.forEach((doc) => {
      tmpMessages.push({
        receiverId: doc.data().receiverId,
        senderId: doc.data().senderId,
        message: doc.data().message,
        timestamp: doc.data().timestamp,
      });
    });
    setMessages(tmpMessages);
  };
  const handleMessageChange = (text: string) => {
    setMessage(text);
  };
  const sendMessage = async () => {
    if (profile) {
      addDoc(collection(FIRESTORE_DB, 'messages'), {
        senderId: profile.id,
        receiverId: receiverId,
        message: message,
        timestamp: Timestamp.fromDate(new Date()),
      });
      getMessages(profile);
      setMessage('');
    }
  };
  const scrollViewRef = useRef();
  const _keyboardDidShow = () => {
    setKeyboardIsOpen(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardIsOpen(false);
  };
  const spinValue = useRef(new Animated.Value(0)).current;
  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const startAnimation = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      spinValue.setValue(0);
    });
    sendMessage();
  };
  return (
    <PageContainer keyboardIsOpen={keyboardIsOpen}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(fromChat ? 'CurrentChat' : 'Home', { token })
        }
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TopContent>
        <Ionicons name="ios-chatbubble-outline" size={24} color="#08374B" />
        <TitleText>{targetEmployee.name}</TitleText>
      </TopContent>
      <MessagesContainer>
        {loadingMessages ? (
          <ActivityIndicator size="small" color="#C4CBD0" />
        ) : (
          <ScrollMessages
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef!.current!.scrollToEnd({ animated: true })
            }
          >
            <MessagesContent>
              {messages
                .slice()
                .sort((a, b) => {
                  const timestampA =
                    a.timestamp.seconds + a.timestamp.nanoseconds / 1e9;
                  const timestampB =
                    b.timestamp.seconds + b.timestamp.nanoseconds / 1e9;
                  return timestampA - timestampB;
                })
                .map((message, index) => (
                  <MessageContainer
                    key={index}
                    receiver={message.senderId === receiverId}
                  >
                    <AvatarContainer>
                      {profile && message.senderId === profile.id && (
                        <Avatar source={GetEmployeeImage(token, profile.id)} />
                      )}
                      {message.senderId === receiverId && (
                        <Avatar source={GetEmployeeImage(token, receiverId)} />
                      )}
                    </AvatarContainer>
                    <MessageContent receiver={message.senderId === receiverId}>
                      <Message>{message.message}</Message>
                    </MessageContent>
                    <Text>
                      {formatTimestampToTime(message.timestamp.seconds)}
                    </Text>
                  </MessageContainer>
                ))}
            </MessagesContent>
          </ScrollMessages>
        )}
      </MessagesContainer>
      <InputContainer>
        <InputMessage
          value={message}
          onChangeText={handleMessageChange}
          placeholder="Send message..."
          textAlignVertical="top"
          multiline={true}
        />
        <SendButton onPress={startAnimation}>
          <Animated.View style={{ transform: [{ rotate }] }}>
            <Feather name="arrow-up-circle" size={28} color="#1E1E1E" />
          </Animated.View>
        </SendButton>
      </InputContainer>
    </PageContainer>
  );
};
