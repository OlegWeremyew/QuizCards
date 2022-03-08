import React from 'react';
import {registerUserTC, setErrorRegisterAC} from "./RegisterFormReducer";
import {useDispatch, useSelector} from "react-redux";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import regS from './RegisterForm.module.css'
import {useFormik} from "formik";
import {Navigate} from 'react-router-dom'
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";

type FormikErrorType = {
    email?: string
    password?: string
    confirm?: string
}

const RegisterForm = () => {
    const error = useSelector<fridayReducerType, string | undefined>(state => state.registration.error)
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<fridayReducerType, boolean>(state => state.login.isLoggedIn)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirm: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Invalid password,pass will be longer tham 8 symbols';
            }
            if (!values.confirm) {
                errors.confirm = 'Required';
            } else if (values.confirm.length !== values.password.length && values.confirm !== values.password) {
                errors.confirm = 'Invalid confirm password';
            }
            return errors;
        },
        onSubmit: value => {
            formik.resetForm()
            dispatch(registerUserTC({email: value.email, password: value.password}))
        }
    })
    const cancelHandler = () => {
        formik.resetForm()
        formik.setTouched({})
        formik.setErrors({email: undefined, password: undefined, confirm: undefined})
        dispatch(setErrorRegisterAC(""))
    }
    if (error === "email already exists /ᐠ｡ꞈ｡ᐟ\\") {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    if (isLoggedIn) {
        return <Navigate to={RoutesXPaths.PROFILE}/>
    }
    return (
        <div className={regS.main}>
            <div className={regS.title}>
                <h1>Cards</h1>
                {!!error && <div>{error}</div>}
                <h4>Sing in</h4>
            </div>

            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className={regS.second}>
                        eMail
                        <input {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email ?
                            <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    </div>
                    <div className={regS.second}>
                        Password
                        <input type="password"
                               {...formik.getFieldProps('password')}/>
                        {formik.touched.password && formik.errors.password ?
                            <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                    </div>
                    <div className={regS.second}>
                        Confirm password
                        <input type="password"
                               {...formik.getFieldProps('confirm')}/>
                        {formik.touched.confirm && formik.errors.confirm ?
                            <div style={{color: 'red'}}>{formik.errors.confirm}</div> : null}
                    </div>
                    <div className={regS.buttonsDiv}>
                        <button type="button" onClick={cancelHandler}>Cancel</button>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;