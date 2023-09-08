import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import React from 'react';
import {
  PageContainer,
  TitleText,
  TopContent,
  TrombinoContainer,
} from './TrombinoscopePage.style';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Employee, GetEmployeeImage, GetEmployees } from '../../api/api';
import { EmployeeCard } from '../../components/EmployeeCard/EmployeeCard.component';
import { Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type TrombinoscopeProps = StackScreenProps<RootStackParamList, 'Trombinoscope'>;

export const TrombinoscopePage: React.FC<TrombinoscopeProps> = ({
  navigation,
  route,
}) => {
  const token = route.params.token;
  const [employees, setEmployees] = React.useState<Employee[]>();

  React.useEffect(() => {
    if (token) {
      GetEmployees(token).then((employees) => {
        if (employees !== undefined) {
          setEmployees(employees!);
        }
      });
    }
  }, [token]);

  return (
    <PageContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Home', { token })}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <TopContent>
        <MaterialCommunityIcons name="wall" size={24} color="black" />
        <TitleText>Trombinoscope</TitleText>
      </TopContent>
      <ScrollView>
        <TrombinoContainer>
          {employees != undefined && (
            <>
              {employees.map((employee, index) => (
                <EmployeeCard
                  key={index}
                  name={employee.name}
                  surname={employee.surname}
                  email={employee.email}
                  image={
                    <Image
                      source={GetEmployeeImage(token, employee.id)}
                      width={110}
                      height={110}
                      borderTopLeftRadius={6.66}
                      borderTopRightRadius={6.66}
                    />
                  }
                  size="MEDIUM"
                  func={() =>
                    navigation.navigate('Profile', {
                      token: token,
                      id: employee.id,
                    })
                  }
                />
              ))}
            </>
          )}
        </TrombinoContainer>
      </ScrollView>
    </PageContainer>
  );
};
