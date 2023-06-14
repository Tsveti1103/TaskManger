import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useFetcher from "../hooks/useFetcher";
import * as itemService from "../services/itemService";
import useModal from "../hooks/useModal";

export const TaskContext = createContext();

export const TaskProvider = ({
  children,
}) => {
  const [tasks, setTasks] = useFetcher(itemService.getAllTasks, []);
  const [isOpen, onChange] = useModal()
  const navigate = useNavigate();
  const getAllTasks = async()=>{
    const result = await itemService.getAllTasks()
    setTasks(result);
  }
  const delTask = async (taskId) => {
    const result = await itemService.deleteTask(taskId)
    setTasks(state => state.filter(x => x.id !== taskId))
    document.body.classList.remove("modal-open");
    navigate('/');

  };

  const createTask = async (data, onChange) => {
    try {
      const result = await itemService.createTask(data)
      setTasks(state => [...state, result]);
      onChange()
      navigate('/');
    }
    catch (err) {
      throw err
    }
  };

  const editTask = async (data, taskId) => {
    try {
      const result = await itemService.editTask(taskId, data)
      setTasks(state => state.map(x => x.id === taskId ? result : x));
      navigate(`/`);
    }
    catch (err) {
      throw err
    }
  };


  const contextValues = {
    createTask,
    editTask,
    delTask,
    tasks,
    isOpen,
    onChange,
    getAllTasks,
    setTasks,
  }
  return (
    <>
      <TaskContext.Provider value={contextValues}>
        {children}
      </TaskContext.Provider>
    </>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  return context;
};