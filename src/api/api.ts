import axios from 'axios';

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
          'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
        },
      },
    );
    const tokenRes: Token = res.data;
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
        'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
      },
    });
    const employees: Employee[] = res.data;
    console.log(employees);
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
        'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
      },
    });
    console.log(res.data);
    const me: EmployeeDetail = res.data;
    console.log(me);
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
        'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
      },
    });
    console.log("ALALALA");
    console.log(res.data);
    const leaders: Employee[] = res.data;
    console.log(leaders);
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
        'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
      },
    });
    console.log(res.data);
    const employee: EmployeeDetail = res.data;
    console.log(employee);
    return employee;
  } catch (error) {
    console.log(error);
  }
};

export const GetEmployeeImage = async (token: string, id: number) => {
  try {
    const res = await axios.get(
      `https://masurao.fr/api/employees/${id}/image`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Group-Authorization': 'dfIYtMwmYQIhUGnZY6GPzT82LBKV2cMn',
        },
      },
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
