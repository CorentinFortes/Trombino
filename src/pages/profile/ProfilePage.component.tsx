import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Image, Linking } from 'react-native';
import {
  Employee,
  EmployeeDetail,
  GetEmployee,
  GetEmployeeImage,
  GetEmployees,
  getMe,
} from '../../api/api';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { LogoIcon } from '../../svg/LogoIcon';
import { PageContainer } from '../home/HomePage.style';
import {
  ArrowButton,
  ContactButton,
  ContactButtonText,
  ImageContainer,
  LineInfoContainer,
  NameText,
  NameWorkContainer,
  ProfileInfoContainer,
  ProfilePageContainer,
  RepInfoText,
  TitleInfoText,
  TopContainer,
  WorkText,
} from './ProfilePage.style';

type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;

export const ProfilePage: React.FC<ProfileProps> = ({ route, navigation }) => {
  const token = route.params.token;
  const [me, setMe] = React.useState<EmployeeDetail>();
  const [employees, setEmployees] = React.useState<Employee[]>();

  React.useEffect(() => {
    if (token) {
      if (route.params.id === undefined) {
        getMe(token).then((me) => {
          if (me !== undefined) {
            me.surname = me.surname.toUpperCase();
          }
          setMe(me);
        });
      } else {
        GetEmployee(token, route.params.id).then((me) => {
          if (me !== undefined) {
            me.surname = me.surname.toUpperCase();
          }
          setMe(me);
        });
      }
      GetEmployees(token).then((employees) => {
        if (employees !== undefined) {
          setEmployees(employees!);
        }
      });
    }
  }, [token]);

  return (
    <PageContainer>
      <ProfilePageContainer>
        <ArrowButton
          onPress={() =>
            navigation.navigate(
              route.params.id === undefined ? 'Home' : 'Trombinoscope',
              { token },
            )
          }
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </ArrowButton>
        <TopContainer>
          <LogoIcon />
          {me !== undefined ? (
            <ImageContainer>
              <Image
                source={GetEmployeeImage(token, me!.id)}
                width={200}
                height={200}
                borderRadius={100}
              />
            </ImageContainer>
          ) : (
            <ActivityIndicator size="small" color="#1E1E1E" />
          )}
          <NameWorkContainer>
            <NameText>
              {me?.name} {me?.surname}
            </NameText>
            <WorkText>{me?.work}</WorkText>
          </NameWorkContainer>
        </TopContainer>
        <ProfileInfoContainer>
          <LineInfoContainer>
            <TitleInfoText>Gender</TitleInfoText>
            <RepInfoText>{me?.gender}</RepInfoText>
          </LineInfoContainer>
          <LineInfoContainer>
            <TitleInfoText>Email</TitleInfoText>
            <RepInfoText>{me?.email}</RepInfoText>
          </LineInfoContainer>
          <LineInfoContainer>
            <TitleInfoText>Birth date</TitleInfoText>
            <RepInfoText>{me?.birth_date}</RepInfoText>
          </LineInfoContainer>
        </ProfileInfoContainer>
        <ContactButton onPress={() => Linking.openURL('mailto:' + me?.email)}>
          <ContactButtonText>Contact</ContactButtonText>
        </ContactButton>
      </ProfilePageContainer>
    </PageContainer>
  );
};
