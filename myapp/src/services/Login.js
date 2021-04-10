import api from './api'

const ResponseToken = async (email, password) => {
    const data = {
        "email": email,
        "password": password
    }

    const response = await api.post('auth/sign-in', data);

    return response;
  
  };
  
export default ResponseToken;