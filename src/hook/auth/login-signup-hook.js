import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/actions/authAction";
import notify from "../useNotify";
const LoginSignUpHook = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState();


    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const loginRes = useSelector((state) => state.auth.login);

    console.log(loginRes?.data)

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsPress(true)
        setLoading(true)
        await dispatch(loginAction({
            email,
            password
        }))
        setLoading(false)
        setIsPress(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (loginRes) {
                if (loginRes.data.token) {
                    localStorage.setItem("token", loginRes.data.token)
                    localStorage.setItem("user", JSON.stringify(loginRes.data))
                    notify("Log In Successfully", "success");
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000);
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }
                if (loginRes.data.message === "Incorrect email or password") {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("Email Or Password Is Wrong", "error");
                }
            }
        }
    }
        , [loading])



    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit]

}

export default LoginSignUpHook