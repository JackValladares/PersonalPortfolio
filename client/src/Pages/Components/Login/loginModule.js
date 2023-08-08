import axios from 'axios';

export const createUser = async (user) => {
    return await axios.post('/api/users', user);

};
export const loginUser = async (credentials) => {
    console.log(credentials);
    return await axios.post(`/api/users/login`, credentials);
};

export const getAllUsers = async () => {
    return await axios.get('/api/users');
};

export const getUser = async (id) => {
    return await axios.get(`/api/users/${id}`);
};

export const updateUser = async (id, updates) => {
    return await axios.patch(`/api/users/${id}`, updates);
};

export const deleteUser = async (id) => {
    return await axios.delete(`/api/users/${id}`);
};

