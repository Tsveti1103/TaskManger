import { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv'

import styles from './Tasks.module.css';
import modalStyles from '../commonStyles/modal.module.css';

import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';
import Create from '../Create/Create';
import { useTaskContext } from '../../contexts/TaskContext';
import { sortTasks } from '../../services/utils';


export default function Tasks() {
    const { tasks, getAllTasks, setTasks } = useTaskContext();
    const [taskSorting, setTaskSorting] = useState(false);
    useEffect(() => {
        getAllTasks()
    }, [])
    const haveTasks = tasks.length > 0
    const onClick = (e) => {
        const value = e.target.textContent;
        setTaskSorting(!taskSorting)
        const newTasks = sortTasks(tasks, value)
        setTasks(newTasks)
    }
    useEffect(() => {
        setTasks(tasks)
    }, [taskSorting])
    return (
        <>
            <div className={styles.container}>
                <div className={styles.btnsContainer}>
                    <Create></Create>
                    <CSVLink
                        data={tasks}
                        filename={'Tasks.csv'}
                        className={modalStyles.exportBtn}
                        title="Export tasks"
                    ><i className="fa-solid fa-file-export"></i></CSVLink>
                </div>
                {
                    haveTasks ?
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={onClick}>Title</th>
                                    <th onClick={onClick}>Priority</th>
                                    <th onClick={onClick}>Description</th>
                                    <th onClick={onClick}>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => {
                                    const day = task.date_created.split('T')[0]
                                    const hour = (task.date_created.split('T')[1]).split('.')[0]
                                    return (
                                        <tr key={task.id}>
                                            <td>{task.title}</td>
                                            <td>{task.priority}</td>
                                            <td className={styles.description}>{task.description}</td>
                                            <td>{`${day} ${hour}`}</td>
                                            <td>
                                                <div className={styles.icons}>
                                                    <Delete key={task.id} currentTask={task}></Delete>
                                                    <Edit {...task}></Edit>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        : <p>You don't have any tasks yet.</p>
                }
            </div>
        </>
    )
};