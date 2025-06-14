import { useEffect, useState } from 'react'

const ProtectedRouteHook = () => {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("user")));
    const [isUser, setIsUser] = useState();
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        if (userData !== null) {
            if (userData.role === 0) {
                setIsUser(true)
                setIsAdmin(false)
            } else {
                setIsUser(false)
                setIsAdmin(true)
            }
        } else {
            setIsUser(false)
            setIsAdmin(false)
        }
    }, [])


    return [userData, isUser, isAdmin]

}

export default ProtectedRouteHook
