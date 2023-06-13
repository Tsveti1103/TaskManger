import { useEffect } from 'react';
import { CSVLink } from 'react-csv'

import styles from './Tasks.module.css';
import modalStyles from '../commonStyles/modal.module.css';

import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';
import Create from '../Create/Create';
import { useTaskContext } from '../../contexts/TaskContext';


export default function Tasks() {
    const { tasks, getAllTasks } = useTaskContext();
    useEffect(() => {
        getAllTasks()
    }, [])
    const haveTasks = tasks.length > 0
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
                                    <th>Title</th>
                                    <th>Priority</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task) => {
                                    return (
                                        <tr key={task.id}>
                                            <td>{task.title}</td>
                                            <td>{task.priority}</td>
                                            <td>{task.description}</td>
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