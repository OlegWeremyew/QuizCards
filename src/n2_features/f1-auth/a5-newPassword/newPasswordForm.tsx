import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {newPasswordTC} from "./newPasswordReducer";
import {Navigate, useParams} from "react-router-dom";
import regS from "../a2-register/RegisterForm.module.css";
import {fridayReducerType} from "../../../n1_main/m2-bll/store";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";


const NewPasswordForm = () => {
    const [newPass, setNewPass] = useState<string>('')
    const dispatch = useDispatch()
    const {token} = useParams<'token'>()
    const newPassInfo = useSelector<fridayReducerType, string | undefined>(state => state.newPass.info)
    const isLoggedIn = useSelector<fridayReducerType, boolean>(state => state.login.isLoggedIn)

    const create = () => {
        dispatch(newPasswordTC({
            password: newPass,
            resetPasswordToken: token
        }))
    }
    if (newPassInfo) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }
    if (isLoggedIn) {
        return <Navigate to={RoutesXPaths.PROFILE}/>
    }

    return (
        <div className={regS.main}>
            <div className={regS.title}>
                <h1>Cards</h1>
                <h4> Write new pass!</h4>
            </div>
            <>
                <div className={regS.second}>
                    <input type="text"
                           value={newPass}
                           onChange={(e) => setNewPass(e.currentTarget.value)}/>
                    <div className={regS.buttonsDiv}>
                        <button onClick={create}>Create</button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default NewPasswordForm;