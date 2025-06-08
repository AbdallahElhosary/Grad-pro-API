import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../useNotify";
import { addAdmin } from "../../redux/actions/adminAction";

const AddMatrialsHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(true);


    // Change handlers
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const onChangeCode = (e) => {
        setCode(e.target.value);
    };



    const onAddAdmin = async (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "" || confirmPassword === "" || code === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(addAdmin({
            code: code,
            name:name,
            password: password,
            confirmPassword: confirmPassword,
            email: email
          }))
        setLoading(false)

    }

    const res = useSelector((state) => state.admins?.addAdminAction);

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
        name,
        email,
        password,
        confirmPassword,
        code,
        onChangeName,
        onChangeEmail,
        onChangePassword,
        onChangeConfirmPassword,
        onChangeCode,
        onAddAdmin
    ]

}

export default AddMatrialsHook
