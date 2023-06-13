import useErrors from '../../hooks/useErorrs';
import useForm from '../../hooks/useForm';
import useModal from '../../hooks/useModal';
import formStyles from '../commonStyles/formStyle.module.css';
import modalStyles from '../commonStyles/modal.module.css';
import { useTaskContext } from '../../contexts/TaskContext';



export default function Edit({id,title,description,priority}) {
    const { editTask } = useTaskContext();
    const taskId = id
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        title: title,
        description: description,
        priority: priority,
    }, editTask, taskId);
    const [isOpen, onChange] = useModal()
    const { formErrors, formValidate, isValid } = useErrors(
        {
            title: '',
            description: '',
            priority: ''
        }
    );

    return (
        <>
            <button onClick={onChange} className={modalStyles.editBtn} title="Edit task"><i className="fa-solid fa-pen"></i></button>
            <div className={modalStyles.modal} style={{ display: isOpen ? 'flex' : 'none' }}>
                <form method="post" className={modalStyles.modalContent} onSubmit={onSubmit} >
                    <span onClick={onChange} className={modalStyles.close} title="Close">&times;</span>
                    <div className={modalStyles.container}>
                        <h1>Edit Taks</h1>
                        <div className={formStyles.userBox}>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                required
                                value={values.title}
                                onChange={onChangeHandler}
                                onBlur={formValidate}
                            />
                            {formErrors.title &&
                                <p className={formStyles.formError}>
                                    {formErrors.title}
                                </p>
                            }
                        </div>
                        <div className={formStyles.userBox}>
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                required
                                value={values.description}
                                onChange={onChangeHandler}
                                onBlur={formValidate}
                            />
                            {formErrors.description &&
                                <p className={formStyles.formError}>
                                    {formErrors.description}
                                </p>
                            }
                        </div>
                        <div className={formStyles.userBox}>
                            <label htmlFor="priority">Priority</label>
                            <input
                                type="number"
                                name="priority"
                                id="priority"
                                required
                                value={values.priority}
                                onChange={onChangeHandler}
                                onBlur={formValidate}
                            />
                            {formErrors.priority &&
                                <p className={formStyles.formError}>
                                    {formErrors.priority}
                                </p>
                            }
                        </div>
                        {serverErrors ? serverErrors.map(err => <p key={err} className={formStyles.formError}>{err}</p>) : <></>}
                        <div className={modalStyles.btns}>
                            <button type="button" onClick={onChange} className={modalStyles.cancelbtn}>Cancel</button>
                            <button type="submit" onClick={onChange} className={modalStyles.deletebtn} disabled={!isValid}>Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}