import { StackScreenProps } from '@react-navigation/stack';
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { FIRESTORE_DB } from '../../../firebaseConfig';
import { EmployeeDetail, getMe } from '../../api/api';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import {
  ConnectButton,
  ConnectButtonText,
  InputMessage,
  PageContainer,
} from './ChatPage.style';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type ChatProps = StackScreenProps<RootStackParamList, 'Chat'>;

export const ChatPage: React.FC<ChatProps> = ({ route, navigation }) => {
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState<EmployeeDetail>();
  const token = route.params.token;
  React.useEffect(() => {
    if (token) {
      getMe(token).then((me) => {
        if (me !== undefined) {
          me.surname = me.surname.toUpperCase();
        }
        setProfile(me);
      });
    }
  }, [token]);
  const handleMessageChange = (text: string) => {
    setMessage(text);
  };
  const sendMessage = async () => {
    if (profile) {
      const msg = addDoc(collection(FIRESTORE_DB, 'message'), {
        senderId: profile.id,
        receiverId: 1,
        message: message,
        date: new Date().getTime(),
      });
      console.log(`msg: ${msg}`);
    }
  };
  return (
    <PageContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Home', { token })}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <InputMessage
        value={message}
        onChangeText={handleMessageChange}
        placeholder="Send message..."
      />
      <ConnectButton onPress={() => sendMessage()}>
        <ConnectButtonText>Send</ConnectButtonText>
      </ConnectButton>
    </PageContainer>
  );
};
