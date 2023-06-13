import formStyles from '../../commonStyles/formStyle.module.css';
import buttonStyles from '../../commonStyles/button.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useErrors from '../../../hooks/useErorrs';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function Login() {
    const { userLogin } = useAuthContext();
    const [passwordShown, setPasswordShown] = useState(false);
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        password: '',
    }, userLogin);

    const { formErrors, formValidate, isValid } = useErrors(
        {
            username: '',
            password: '',
        }
    );
    function showPassword() {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className={formStyles.formBox}>
            <h1>Login</h1>
            <form onSubmit={onSubmit} className={formStyles.form}>
                <div className={formStyles.userBox}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        required=""
                        value={values.username}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.username &&
                        <p className={formStyles.formError}>
                            {formErrors.username}
                        </p>

                    }
                </div>
                <div className={formStyles.userBox}>
                    <i className={`fa-solid fa-eye ${formStyles['show']}`} onClick={showPassword}></i>
                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        required=""
                        value={values.password}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.password &&
                        <p className={formStyles.formError}>
                            {formErrors.password}
                        </p>

                    }
                </div>

                {serverErrors &&
                    <p className={formStyles.formError}>{serverErrors}</p>
                }
                <div className={formStyles.btns}>
                    <button type="submit" className={buttonStyles.greenBtn} disabled={!isValid}>
                        <span />
                        <span />
                        <span />
                        <span />
                        Login
                    </button>
                    <Link to="/register" className={buttonStyles.signUpIn}>Sign Up?</Link>
                </div>
            </form >
        </div >
    );
};