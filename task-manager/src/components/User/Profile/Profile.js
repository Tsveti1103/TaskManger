import styles from './Profile.module.css';

import { Link } from 'react-router-dom';

import Delete from '../Delete/Delete';
import { useAuthContext } from "../../../contexts/AuthContext";





export default function Profile() {
    const { user } = useAuthContext();

    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <Link className={styles.editBtn} to={`edit/`} title="Edit">
                    <i className="fa-solid fa-user-pen"></i>
                </Link>
                <Delete currentUser={user}></Delete>
            </div>
            <div className={styles.statistics}>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
            </div>
        </div>
    );
};
