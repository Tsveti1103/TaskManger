import modalStyles from '../../commonStyles/modal.module.css';

import { useAuthContext } from '../../../contexts/AuthContext';
import useModal from '../../../hooks/useModal';


export default function Delete(
    { currentUser },
) {
    const [isOpen, onChange] = useModal()
    const { userDelete } = useAuthContext();
    const onDelete = () => {
        userDelete(currentUser.user_id);
    }
    return (
        <>
            <button onClick={onChange} className={modalStyles.delBtn} title="Delete profile"><i className="fa-regular fa-trash-can"></i></button>
            <div className={modalStyles.modal} style={{ display: isOpen ? 'flex' : 'none' }}>
                <form className={modalStyles.modalContent}>
                    <span onClick={onChange} className={modalStyles.close} title="Close">&times;</span>
                    <div className={modalStyles.container}>
                        <h1>Delete Profile</h1>
                        <p className={modalStyles.message}>Are you sure you want to delete <b>{currentUser.username}</b> ?</p>
                        <div className={modalStyles.btns}>
                            <button type="button" onClick={onChange} className={modalStyles.cancelbtn}>Cancel</button>
                            <button type="button" className={modalStyles.deletebtn} onClick={onDelete}>Delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}