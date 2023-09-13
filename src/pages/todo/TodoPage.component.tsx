import { AntDesign, MaterialIcons, Octicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { EmployeeDetail } from '../../api/api';
import { addTodo, getTodo, removeTodo, updateDoneTask } from '../../api/todo';
import { RootStackParamList } from '../../components/AppNavigation/AppNavigation.component';
import { Input } from '../../components/Input';
import { TaskCard } from '../../components/TaskCard';
import { TodoType } from '../../types/todo';
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
  ScrollTodos,
  TaskCircle,
  TitleText,
  TodosContainer,
  TopContent,
} from './TodoPage.style';

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
  const { token, profile, todos } = route.params;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleValue, setTitleValue] = useState<string>('');
  const [descValue, setDescValue] = useState<string>('');
  const [typeValue, setTypeValue] = useState<'urgent' | 'important' | 'normal'>(
    'normal',
  );
  const [newTodos, setTodos] = useState<TodoType[]>(todos);

  useEffect(() => {
    getTodos(profile);
  }, []);
  const pressAddTodo = () => {
    if (profile) {
      setDescValue('');
      setTitleValue('');
      setTypeValue('normal');
      addTodo(profile, titleValue, descValue, typeValue);
      getTodos(profile);
    }
    setIsModalOpen(false);
  };
  const getTodos = async (profile: EmployeeDetail) => {
    getTodo(setTodos, profile);
  };
  const delTodo = async (id: string) => {
    removeTodo(id);
    getTodos(profile!);
  };
  const updateTodo = async (id: string, done: boolean) => {
    updateDoneTask(id, done);
    getTodos(profile!);
  };
  const scrollViewRef = useRef();
  return (
    <>
      <PageContainer>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              token: token,
              newTodos: newTodos,
            })
          }
        >
          <AntDesign name="arrowleft" size={32} color="black" />
        </TouchableOpacity>
        <TopContent>
          <Octicons name="checklist" size={24} color="#480D49" />
          <TitleText>Todo</TitleText>
        </TopContent>
        <ScrollTodos
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef!.current!.scrollToEnd({ animated: true })
          }
        >
          <TodosContainer>
            {newTodos
              .sort((a, b) => {
                if (a.done && !b.done) {
                  return 1;
                }
                if (!a.done && b.done) {
                  return -1;
                }
                return 0;
              })
              .map((todo) => (
                <TaskCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  done={todo.done}
                  type={todo.type}
                  toRemove={delTodo}
                  toDone={() => updateTodo(todo.id, !todo.done)}
                />
              ))}
          </TodosContainer>
        </ScrollTodos>
        <TouchableOpacity
          onPress={() => setIsModalOpen(true)}
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}
        >
          <MaterialIcons name="add-circle" size={64} color="#480D49" />
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
