import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { forgetPassword } from '../../redux/actions/authAction';
import notify from '../useNotify';

const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e) => setEmail(e.target.value);

    const onSubmit = async (e) => {

        if (!email) {
            notify("Fill the Email Field", "error");
        }
            e.preventDefault();
            setIsPress(true)
            setLoading(true)
            await dispatch(forgetPassword(email))
            setLoading(false)
            setIsPress(false)
    }

    console.log(typeof email)

    const forgetPasswordRes = useSelector((state) => state.auth.forgetPassword);

    
    useEffect(() => {
        if (loading === false) {
            if (forgetPasswordRes) {
                console.log("forgetPasswordRes", forgetPasswordRes)
            }
        }
    }
        , [loading])

    return [email, onChangeEmail, onSubmit]
}

export default ForgetPasswordHook
