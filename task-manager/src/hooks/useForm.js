import { useState } from 'react';

export default function useForm (initialValues, onSubmitHandler, moreProps) {
    const [values, setValues] = useState(initialValues);
    const [serverErrors, setServerErrors] = useState([]);
    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values, moreProps)
            .then(
                setValues(initialValues)
            )
            .catch((err) => {
                setServerErrors([])
                for (let value of Object.values(err)) {
                    setServerErrors(state => ([...state, value]))
                }
            })
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues,
        serverErrors,
    };
};