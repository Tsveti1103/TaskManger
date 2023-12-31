import * as api from './api.js';

const endpoints = {
    login: '/user/login',
    register: '/user/register',
    logout: '/user/logout',
    del: (id)=> `/user/delete/${id}`,
    edit: (id)=> `/user/update/${id}`,
};
export async function register(data) {
    const {
        username,
        email,
        password,
    } = data
    return await api.post(endpoints.register,{username,email, password});
};
export async function login(data) {
      const {
        username,
        password,
    } = data;
    return await api.post(endpoints.login,{username, password});
};
export async function editUser(id,data){
    return await api.put(endpoints.edit(id),data)
};

export async function logout() {
    return await api.get(endpoints.logout);
};
export  function deleteUser(id) {
    return api.del(endpoints.del(id));
};


