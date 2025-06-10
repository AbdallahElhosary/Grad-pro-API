import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addMatrial } from "../../redux/actions/matrialAction";
import notify from "../useNotify";

const AddMatrialsHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [matrialName, setMatrialName] = useState("")
    const [matrialCode, setMatrialCode] = useState("")
    const [matrialDoctor, setMatrialDoctor] = useState("")
    const [matrialYoutLink, setMatrialYoutLink] = useState("")
    const [matrialDrivLink, setMatrialDrivLink] = useState("")
    const [loading , setLoading] = useState(true)

    

    const onChangeName = (e) => {
        setMatrialName(e.target.value)
    }
    const onChangeCode = (e) => {
        setMatrialCode(e.target.value)
    }
    const onChangeDoctor = (e) => {
        setMatrialDoctor(e.target.value)
    }
    const onChangeYoutLink = (e) => {
        
        setMatrialYoutLink(e.target.value)
    }
    const onChangeDrivLink = (e) => {
        setMatrialDrivLink(e.target.value)
    }


    const onAddMatrial = async (e) => {
        e.preventDefault();
        if (matrialName === "" || matrialCode === "" || matrialDoctor === "" || matrialYoutLink === "" || matrialDrivLink === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(addMatrial({
            
            "name": matrialName,
            "instructor": matrialDoctor,
            "youtubeLink": matrialYoutLink,
            "driveLink": matrialDrivLink,
            "courseCode": matrialCode
            
        }))
        setLoading(false)

    }

    const res = useSelector((state) => state.allMatrail?.addMatrial);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 204) {
                    notify("Matrial Added Successfully", "success");
                    setTimeout(() => {
                        navigate('/matrial')
                    }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [matrialName, matrialCode, matrialDoctor, matrialYoutLink, matrialDrivLink, onChangeName, onChangeCode, onChangeDoctor, onChangeYoutLink, onChangeDrivLink, onAddMatrial]

}

export default AddMatrialsHook
