import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import {
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
import { LogoIcon } from '../../svg/LogoIcon';
import React from 'react';
import {
  Employee,
  EmployeeDetail,
  GetEmployeeImage,
  GetEmployees,
  getMe,
} from '../../api/api';
import { ActivityIndicator, Image } from 'react-native';
import { PageContainer } from '../home/HomePage.style';
import { TrominoWidget } from '../../components/TrombinoscopeWidget/TrombinoscopeWidget';

type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;

export const ProfilePage: React.FC<ProfileProps> = ({ navigation, route }) => {
  const token = route.params.token;
  const [me, setMe] = React.useState<EmployeeDetail>();
  const [employees, setEmployees] = React.useState<Employee[]>();

  React.useEffect(() => {
    if (token) {
      getMe(token).then((me) => {
        if (me !== undefined) {
          me.surname = me.surname.toUpperCase();
        }
        setMe(me);
      });
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
        <ContactButton>
          <ContactButtonText>Contact</ContactButtonText>
        </ContactButton>
      </ProfilePageContainer>
    </PageContainer>
  );
};
