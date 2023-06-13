import useModal from '../../hooks/useModal';
import modalStyles from '../commonStyles/modal.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export default function Delete(
    { currentTask },
) {
    const [isOpen, onChange] = useModal()
    const { delTask } = useTaskContext();
    const onDelete = () => {
        delTask(currentTask.id);
        onChange()
    }
    return (
        <>
            <button onClick={onChange} className={modalStyles.delBtn} title="Complete task" ><i className="fa-solid fa-circle-check"></i></button>
            <div className={modalStyles.modal} style={{ display: isOpen ? 'flex' : 'none' }}>
                <form className={modalStyles.modalContent}>
                    <span onClick={onChange} className={modalStyles.close} title="Close">&times;</span>
                    <div className={modalStyles.container}>
                        <h1>Complete Task</h1>
                        <p className={modalStyles.message}>Are you sure you want to complete <b>{currentTask.title}</b> task ?</p>
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