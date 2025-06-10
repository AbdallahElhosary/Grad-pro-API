import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../useNotify";
import { addAdmin } from "../../redux/actions/adminAction";

const LoginSignUpHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);


    // Change handlers

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };




    const onLogin = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(addAdmin({
            "email": email,
            "password": password
        }))
        setLoading(false)

    }

    const res = useSelector((state) => state.auth?.login);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Admin Added Successfully", "success");
                    setTimeout(() => {
                        navigate('/matrial')
                    }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [
        email,
        onChangeEmail,
        password,
        onChangePassword,
        onLogin
    ]

}

export default LoginSignUpHook
