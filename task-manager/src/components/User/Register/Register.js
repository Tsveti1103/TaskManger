import formStyles from '../../commonStyles/formStyle.module.css';
import buttonStyles from '../../commonStyles/button.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import useErrors from '../../../hooks/useErorrs';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function Register() {
    const { registerUser } = useAuthContext();
    const [passwordShown, setPasswordShown] = useState(false);
    const { values, onChangeHandler, onSubmit, serverErrors } = useForm({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    }, registerUser);

    const { formErrors, formValidate, isValid } = useErrors(
        {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        values.password
    );
    function showPassword() {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className={formStyles.formBox}>
            <h1>Register</h1>
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        required=""
                        value={values.email}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.email &&
                        <p className={formStyles.formError}>
                            {formErrors.email}
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
                <div className={formStyles.userBox}>
                    <label htmlFor="confirmPassword">Repeat Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="repass"
                        required=""
                        value={values.confirmPassword}
                        onChange={onChangeHandler}
                        onBlur={formValidate}
                    />
                    {formErrors.confirmPassword &&
                        <p className={formStyles.formError}>
                            {formErrors.confirmPassword}
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
                        Register
                    </button>
                    <Link to="/login" className={buttonStyles.signUpIn}>Sign In?</Link>
                </div>
            </form >
        </div >
    );
};