import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Token {
  access_token: string;
}

export interface Employee {
  id: number;
  email: string;
  name: string;
  surname: string;
}

export interface EmployeeDetail {
  id: number;
  email: string;
  name: string;
  surname: string;
  birth_date: string;
  gender: string;
  work: string;
  subordinates: Employee[];
}

export const Login = async (email: string, password: string) => {
  if (!email.trim() || !password.trim()) {
    alert('Email or password invalid');
    return;
  }
  try {
    const res = await axios.post(
      'https://masurao.fr/api/employees/login',
      {
        email,
        password,
      },
      {
        headers: {
          'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
        },
      },
    );
    const tokenRes: Token = res.data;
    AsyncStorage.setItem('token', tokenRes.access_token);
    return tokenRes.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const GetEmployees = async (token: string) => {
  try {
    const res = await axios.get('https://masurao.fr/api/employees', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
      },
    });
    const employees: Employee[] = res.data;
    return employees;
  } catch (error) {
    console.log(error);
  }
};

export const getMe = async (token: string) => {
  try {
    const res = await axios.get('https://masurao.fr/api/employees/me', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
      },
    });
    const me: EmployeeDetail = res.data;
    return me;
  } catch (error) {
    console.log(error);
  }
};

export const getLeaders = async (token: string) => {
  try {
    const res = await axios.get('https://masurao.fr/api/employees/leaders', {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
      },
    });
    const leaders: Employee[] = res.data;
    return leaders;
  } catch (error) {
    console.log(error);
  }
};

export const GetEmployee = async (token: string, id: number) => {
  try {
    const res = await axios.get(`https://masurao.fr/api/employees/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
      },
    });
    const employee: EmployeeDetail = res.data;
    return employee;
  } catch (error) {
    console.log(error);
  }
};

export const GetEmployeeImage = (token: string, id: number) => {
  const res = {
    uri: `https://masurao.fr/api/employees/${id}/image`,
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Group-Authorization': '5e150ebfda0cfd443239c42af17c98fd',
    },
  };
  return res;
};
