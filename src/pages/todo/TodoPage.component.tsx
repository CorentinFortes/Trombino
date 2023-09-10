import { AntDesign, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { EmployeeDetail, getMe } from '../../api/api';
import { addTodo } from '../../api/todo';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { Input } from '../../components/Input';
import { TaskCard } from '../../components/TaskCard';
import {
  AddTodoContainer,
  AddTodoTitle,
  ConnectButton,
  ConnectButtonText,
  CrossButton,
  ModalContainer,
  ModalContent,
  ModalHeader,
  PageContainer,
  TaskCircle,
  TitleText,
  TopContent,
} from './TodoPage.style';
import { TodoType } from '../../types/todo';

type TodoProps = StackScreenProps<RootStackParamList, 'Todo'>;

const data = [
  { label: 'Normal', value: 'normal' },
  { label: 'Important', value: 'important' },
  { label: 'Urgent', value: 'urgent' },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  dropdown: {
    height: 50,
    borderColor: '#C2BFBF',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    width: '100%',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    marginLeft: 10,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: 'Rubik_Regular',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: 'Rubik_Regular',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
});

export const TodoPage: React.FC<TodoProps> = ({ route, navigation }) => {
  const { token } = route.params;
  const [profile, setProfile] = useState<EmployeeDetail>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleValue, setTitleValue] = useState<string>('');
  const [descValue, setDescValue] = useState<string>('');
  const [typeValue, setTypeValue] = useState<'urgent' | 'important' | 'normal'>(
    'normal',
  );
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    if (token) {
      getMe(token).then((me) => {
        if (me !== undefined) {
          me.surname = me.surname.toUpperCase();
          setProfile(me);
        }
      });
    }
  });
  const pressAddTodo = () => {
    if (profile) {
      addTodo(profile, titleValue, descValue, typeValue);
    }
    setIsModalOpen(false);
  };
  return (
    <>
      <PageContainer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              token: token,
            })
          }
        >
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <TopContent>
          <Octicons name="checklist" size={24} color="#480D49" />
          <TitleText>Todo</TitleText>
        </TopContent>
        <TaskCard
          title="Faire les courses"
          description="Acheter du pain"
          done={false}
          type="normal"
        />
        <TouchableOpacity onPress={() => setIsModalOpen(true)}>
          <MaterialIcons name="add-circle" size={48} color="#480D49" />
        </TouchableOpacity>
      </PageContainer>
      {isModalOpen && (
        <ModalContainer transparent>
          <ModalContent>
            <AddTodoContainer>
              <ModalHeader>
                <AddTodoTitle>Add a task</AddTodoTitle>
                <CrossButton onPress={() => setIsModalOpen(false)}>
                  <AntDesign name="close" size={24} color="#1E1E1E" />
                </CrossButton>
              </ModalHeader>
              <Input
                placeholder="Title"
                type="text"
                value={titleValue}
                onChangeText={setTitleValue}
              />
              <Input
                placeholder="Description"
                type="text"
                value={descValue}
                onChangeText={setDescValue}
              />
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                containerStyle={styles.container}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={typeValue}
                placeholder={'Select item'}
                onChange={(item) => {
                  setTypeValue(item.value);
                }}
                renderLeftIcon={() => <TaskCircle type={typeValue} />}
              />
              <ConnectButton onPress={pressAddTodo}>
                <ConnectButtonText>Add task</ConnectButtonText>
              </ConnectButton>
            </AddTodoContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};
