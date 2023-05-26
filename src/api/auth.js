import axios from 'axios';

const authURL = 'https://todo-list.alphacamp.io/api/auth';

// 登入頁面
export async function login({ username, password }) {
  try {
    const { data } = await axios.post(`${authURL}/login`, {
      username,
      password,
    });

    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error('[Login Failed]:', error);
  }
}

// 註冊頁面
export async function register({ username, email, password }) {
  try {
    const { data } = await axios.post(`${authURL}/register`, {
      username,
      email,
      password,
    });

    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data };
    }

    return data;
  } catch (error) {
    console.error('[Register Failed]: ', error);
  }
}

// 測試 Token
export async function checkPermission(authToken) {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });

    return response.data.success;
  } catch (error) {
    console.error('[Check Permission]: ', error);
  }
}
