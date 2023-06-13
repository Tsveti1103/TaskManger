import * as api from './api.js';
const endpoints = {
    tasks: '/tasks/all',
    create: '/tasks/create',
    details: (taskId)=> `/tasks/details/${taskId}`,
    delete: (taskId)=> `/tasks/delete/${taskId}`,
    edit: (taskId)=> `/tasks/edit/${taskId}`,

};

export async function getAllTasks(){
    return await api.get(endpoints.tasks)
};
export async function details(id){
    return await api.get(endpoints.details(id))
};
export async function createTask(data){
    return await api.post(endpoints.create,data)
};
export function deleteTask(id){
    return api.del(endpoints.delete(id))
};
export async function editTask(id,data){
    return await api.put(endpoints.edit(id),data)
};





