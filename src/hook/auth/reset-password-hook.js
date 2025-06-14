import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { forgetPassword, resetPassword } from '../../redux/actions/authAction';
import notify from '../useNotify';

const ResetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangecode = (e) => setCode(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(email === "" || password === "" || confirmPassword === "" || code === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setIsPress(true)
        setLoading(true)
        await dispatch(resetPassword({
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword,
            "code": code
        }))
        setLoading(false)
        setIsPress(false)
    }

    console.log(typeof email)

    const resetPasswordRes = useSelector((state) => state.auth.resetPassword);


    useEffect(() => {
        if (loading === false) {
            if (resetPasswordRes) {
                if (resetPasswordRes.data.isSuccessed === true) {
                    notify("Password Reset Successfully", "success")
                    navigate("/login")
                } else {
                    notify(resetPasswordRes.data.message, "error")
                }
            }
        }
    }
    , [loading])

    return [
        email,
        onChangeEmail,
        code,
        onChangecode,
        password,
        onChangePassword,
        confirmPassword,
        onChangeConfirmPassword,
        onSubmit,
        
    ]
}

export default ResetPasswordHook
